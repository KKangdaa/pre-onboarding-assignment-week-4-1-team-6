import { getAccounts, getUsers, getUserSetting } from 'apis';
import { useQueries } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { allAccountState } from 'recoil/account';
import { allUserState } from 'recoil/user';
import { userSettingState } from 'recoil/userSetting';
import { removeToken } from 'utils/Storage';

export default function useGetAllData() {
  const navigate = useNavigate();
  const setAllUser = useSetRecoilState(allUserState);
  const setAllAccount = useSetRecoilState(allAccountState);
  const setUserSetting = useSetRecoilState(userSettingState);
  useQueries([
    {
      queryKey: ['all_users'],
      queryFn: () => getUsers(),
      retry: 1,
      onSuccess: ({ data }) => {
        const filterData = data.filter((user) => user.name !== undefined);
        setAllUser({
          total: filterData.length,
          data: filterData,
        });
      },
      onError: (e) => {
        if (e.response.status === 401) {
          alert('재로그인을 해주세요.');
          removeToken();
          navigate('/');
        };
      },
    },

    {
      queryKey: ['all_accounts'],
      queryFn: () => getAccounts(),
      retry: 1,
      onSuccess: ({ data }) => {
        const filterData = data.filter((account) => account.uuid !== undefined);
        setAllAccount({
          total: filterData.length,
          data: filterData,
        });
      },
      onError: (error) => {
        throw ('From Get Accounts => ', error);
      },
    },
    {
      queryKey: ['user_setting'],
      queryFn: () => getUserSetting(),
      staleTime: 100000,
      onSuccess: ({ data }) => {
        setUserSetting([...data]);
      },
      onError: (error) => {
        throw ('From Get UserSetting => ', error);
      },
    },
  ]);
}
