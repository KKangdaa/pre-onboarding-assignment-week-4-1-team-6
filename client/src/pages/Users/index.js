import { getParameter } from 'utils/GetParams';
import UserInfo from './UserInfo';
import Users from './Users';

export default function UserList() {
  const { pathname, search } = getParameter();
  const params = new URLSearchParams(search);

  const page = params.get('_page');
  const limit = params.get('_limit');
  const searchName = params.get('q');

  if (!page) return <UserInfo params={search} />;

  return (
    <Users
      pathname={pathname}
      params={search}
      page={page}
      limit={limit}
      searchName={searchName}
    />
  );
}
