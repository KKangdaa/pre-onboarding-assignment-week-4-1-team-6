import { getParameter } from 'utils/GetParams';
import AccountInfo from './AccountInfo';
import Accounts from './Accounts';

export default function AccountList() {
  const { pathname, search } = getParameter();
  const params = new URLSearchParams(search);

  const page = params.get('_page');
  const limit = params.get('_limit');
  const searchName = params.get('q');

  if (!page) return <AccountInfo params={search} />;

  return (
    <Accounts
      pathname={pathname}
      params={search}
      page={page}
      limit={limit}
      searchName={searchName}
    />
  );
}
