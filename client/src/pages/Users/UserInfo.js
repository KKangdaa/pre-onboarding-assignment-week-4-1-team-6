import { getUserData } from 'apis';
import DescriptAccount from 'components/DescriptionAccount';
import DescriptUser from 'components/DescriptionUser';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allAccountState } from 'recoil/account';
import { allUserState, usersState } from 'recoil/user';
import { userSettingState } from 'recoil/userSetting';
import { Convert } from 'utils/ConvertData';

UserInfo.propTypes = {
  params: PropTypes.string.isRequired,
};

export default function UserInfo({ params }) {
  const [user, setUser] = useRecoilState(usersState);
  const [allUser] = useRecoilState(allUserState);
  const [allAccount] = useRecoilState(allAccountState);
  const [userSetting] = useRecoilState(userSettingState);
  const { filterData } = Convert.accountData(allAccount.data, user[0]?.id);
  const param = useParams();

  const { isLoading, isError, error } = useQuery(
    ['users', params],
    () => getUserData(param.id),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: ({ data }) => {
        setUser([{ ...data }]);
      },
      onError: (e) => {
        throw e.message
      },
    }
  );

  if (isLoading) return <div>loading..</div>;

  if (isError) return <div>{error}</div>;

  return (
    <>
      <DescriptUser
        user={user[0]}
        allAccount={allAccount}
        userSetting={userSetting}
      />

      {filterData.map((data, i) => (
        <DescriptAccount key={i} account={data} allUser={allUser} />
      ))}
    </>
  );
}
