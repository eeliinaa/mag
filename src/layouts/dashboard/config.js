import {
  BookOpenIcon,
  UserPlusIcon,
  ShoppingBagIcon,
  UsersIcon,
  XCircleIcon,
  LockClosedIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Users',
  //   path: '/users',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Diary',
    path: '/diary',
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'ppp',
  //   path: '/publication',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <BookOpenIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Users',
    path: '/users',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
    admin: true
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
    admin: true
  },
  // {
  //   title: 'Companies',
  //   path: '/companies',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ShoppingBagIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Account',
  //   path: '/account',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
    admin: true
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
    admin: true
  },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
