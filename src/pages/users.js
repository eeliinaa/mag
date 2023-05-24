import { useCallback, useMemo, useState } from 'react'
import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'
import { Box, Button, Container, Stack, SvgIcon, Typography, Grid } from '@mui/material'
import { useSelection } from 'src/hooks/use-selection'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'

import { UsersTable } from 'src/sections/user/users-table'
import { UserSearch } from 'src/sections/user/user-search'
import { UserFormAvatar } from 'src/sections/user/user-form-avatar'
import { UserForm } from 'src/sections/user/user-form'
import Banner from 'src/sections/banner'

import { applyPagination } from 'src/utils/apply-pagination'

import { roleTypes } from 'src/helpers/collections'
import { users } from 'src/utils/storage'

const viewTypes = {
  list: 0,
  form: 1
}

const now = new Date()

const usersData = [
  {
    id: '101',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'elina@somemail.com',
    name: 'Elina',
    surname: 'Admin',
    role: 'Mentor',
    roleId: roleTypes.mentor,
  },
  {
    id: '1',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'juris.lielais@somemail.com',
    name: 'Juris',
    surname: 'Lielais',
    role: 'Mentor',
    roleId: roleTypes.mentor,
  },
  {
    id: '2',
    avatar: '/assets/avatars/avatar-fran-perez.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'karlis.egle@somemail.com',
    name: 'Karlis',
    surname: 'Egle',
    roleId: roleTypes.user,
    role: 'User',
  },
  {
    id: '3',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'viksne@somemail.com',
    name: 'Peteris',
    surname: 'Viksna',
    roleId: roleTypes.user,
    role: 'User',
  },
  {
    id: '4',
    avatar: '/assets/avatars/avatar-anika-visser.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'vitola@somemail.com',
    name: 'Anika',
    surname: 'Vitola',
    roleId: roleTypes.user,
    role: 'User',
  },
  {
    id: '5',
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: 'asns@somemail.com',
    name: 'Roberts',
    surname: 'Viksna',
    roleId: roleTypes.user,
    role: 'User',
  },
  {
    id: '6',
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: 'ozola@somemail.com',
    name: 'Ilze',
    surname: 'Ozola',
    roleId: roleTypes.user,
    role: 'User',
  },
  {
    id: '7',
    avatar: '/assets/avatars/avatar-omar-darboe.png',
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: 'omar.darobe@devias.io',
    name: 'Omars',
    surname: 'Dobe',
    roleId: roleTypes.user,
    role: 'User',
  }
]

const useUsers = (page, rowsPerPage, data) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage)
    },
    [page, rowsPerPage, data]
  )
}

const useUserIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id)
    },
    [customers]
  )
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       data: usersData,
//     }
//   }
// }

const Page = () => {

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // const [data, setRowsPerPage] = useState(5)

  const [viewType, setViewType] = useState(viewTypes.list)
  const [user, setUser] = useState(undefined)

  // const [users, setUserArray] = useState(usersUse)

  const usersUse = useUsers(page, rowsPerPage, users)
  const usersIds = useUserIds(usersUse)
  const usersSelection = useSelection(usersIds)

  const handleAddNew = useCallback(
    (event, value) => {
      setViewType(viewTypes.form)
      setUser(undefined)
    },
    []
  )

  const handleEditView = useCallback(
    (id, value) => {
      const details = users.find(x => x.id === id)

      setViewType(viewTypes.form)
      setUser(details)
    },
    []
  )

  const handleToList = useCallback(
    (event, value) => {
      setViewType(viewTypes.list)
      setUser(undefined)
    },
    []
  )

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value)
    },
    []
  )

  const handleUserFormSave = useCallback(
    (event, value) => {
      // setPage(value)

      let newUserArray = [...users]
    },
    []
  )

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value)
    },
    []
  )

  return (
    <>
      <Banner
        title="User list"
        subtitle="Configure users"
      // content={bannerContent}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                {/* <Typography variant="h4">
                  Users
                </Typography> */}
                {/* <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack> */}
              </Stack>
            </Stack>
            {viewType === viewTypes.list &&
              <>
                <UserSearch />
                <UsersTable
                  count={users.length}
                  items={users}
                  // items={usersUse}
                  onDeselectAll={usersSelection.handleDeselectAll}
                  onDeselectOne={usersSelection.handleDeselectOne}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  onSelectAll={usersSelection.handleSelectAll}
                  onSelectOne={usersSelection.handleSelectOne}
                  onEdit={handleEditView}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  selected={usersSelection.selected}
                />
              </>
            }
            {viewType === viewTypes.form &&
              <div>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <UserFormAvatar
                      details={user}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <UserForm
                      details={user}
                      onSave={handleUserFormSave}
                    />
                  </Grid>
                </Grid>
              </div>
            }
          </Stack>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Page