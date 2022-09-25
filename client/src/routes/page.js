import { UserList, AccountList } from 'pages';

const pages = [
  {
    pathname: '/accounts',
    element: <AccountList />,
    isPublic: false,
  },
  { pathname: '/users', element: <UserList />, isPublic: false },
  {
    pathname: '/users/:id',
    element: <UserList />,
    isPublic: false,
  },
];

export default pages;
