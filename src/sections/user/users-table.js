import PropTypes from 'prop-types'
import { format } from 'date-fns'
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Button,
    SvgIcon,
    Tooltip
} from '@mui/material'
import { PencilIcon } from '@heroicons/react/24/solid'
import { Scrollbar } from 'src/components/scrollbar'
import { getInitials } from 'src/utils/get-initials'

export const UsersTable = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => { },
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        onEdit,
        page = 0,
        rowsPerPage = 0,
        selected = []
    } = props

    const selectedSome = (selected.length > 0) && (selected.length < items.length)
    const selectedAll = (items.length > 0) && (selected.length === items.length)

    return (
        <Card>
            <Scrollbar>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedAll}
                                        indeterminate={selectedSome}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                onSelectAll?.()
                                            } else {
                                                onDeselectAll?.()
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    Aciton
                                </TableCell>
                                <TableCell>
                                    Full name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Role
                                </TableCell>
                                <TableCell>
                                    Last signed in
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((user) => {
                                const isSelected = selected.includes(user.id)
                                const createdAt = format(user.createdAt, 'dd/MM/yyyy')

                                return (
                                    <TableRow
                                        hover
                                        key={user.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(user.id)
                                                    } else {
                                                        onDeselectOne?.(user.id)
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title="Edit">
                                                <Button
                                                    variant="text"
                                                    onClick={() => { onEdit(user.id) }}
                                                    startIcon={(
                                                        <SvgIcon fontSize="small">
                                                            <PencilIcon />
                                                        </SvgIcon>
                                                    )}
                                                >
                                                </Button>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                alignItems="center"
                                                direction="row"
                                                spacing={2}
                                            >
                                                <Avatar src={user.avatar}>
                                                    {getInitials(user.name)}
                                                </Avatar>
                                                <Typography variant="subtitle2">
                                                    {user.name} {user.surname}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            {user.email}
                                        </TableCell>
                                        <TableCell>
                                            {user.role}
                                        </TableCell>
                                        <TableCell>
                                            {createdAt}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}

UsersTable.propTypes = {
    count: PropTypes.number,
    items: PropTypes.array,
    onDeselectAll: PropTypes.func,
    onDeselectOne: PropTypes.func,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectOne: PropTypes.func,
    onEdit: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array
}