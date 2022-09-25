import { getAccountData } from 'apis';
import DescriptAccount from 'components/DescriptionAccount';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { accountsState } from 'recoil/account';
import { allUserState } from 'recoil/user';

AccountInfo.propTypes = {
  params: PropTypes.string.isRequired,
};

export default function AccountInfo({ params }) {
  const [account, setAccount] = useRecoilState(accountsState);
  const [allUser] = useRecoilState(allUserState);
  const { isLoading, isError, error } = useQuery(
    ['accounts', params],
    () => getAccountData(params),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: ({ data }) => {
        setAccount([...data]);
      },
      onError: (e) => {
        throw e.message
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;
  return <DescriptAccount account={account[0]} allUser={allUser} />;
}
