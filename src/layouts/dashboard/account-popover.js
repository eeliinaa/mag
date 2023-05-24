import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { Box, Divider, MenuItem, MenuList, Popover, Typography, Switch, FormControlLabel } from '@mui/material'
import { useAuth } from 'src/hooks/use-auth'

import { roleTypes } from 'src/helpers/collections'

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props
  const router = useRouter()
  const auth = useAuth()

  const handleViewTypeChange = useCallback(
    (event) => {
      const value = event.target.checked ? roleTypes.user : roleTypes.mentor
      auth.changeViewType(value)
    },
    [auth]
  )

  const handleSignOut = useCallback(
    () => {
      onClose?.()
      auth.signOut()
      router.push('/auth/login')
    },
    [onClose, auth, router]
  )

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Samanta Rone (admin)
        </Typography>
      </Box>
      <Divider />
      {/* <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList> */}
      <Divider />
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <FormControlLabel
          control={
            <Switch
              // onChange={handleViewTypeChange}
              // checked={auth.viewMode === roleTypes.user}
            />}
          label="Student view"
        />
      </Box>
    </Popover>
  )
}

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
}