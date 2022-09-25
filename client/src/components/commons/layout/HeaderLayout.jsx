import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import PropTypes from 'prop-types';
import { getParameter } from 'utils/GetParams';
import { useRecoilState } from 'recoil';
import { allUserState, usersState } from 'recoil/user';
import { accountsState } from 'recoil/account';
import { Convert } from 'utils/ConvertData';

HeaderLayout.propTypes = {
  collapsed: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default function HeaderLayout({ collapsed, handleToggle }) {
  const { pathname, page } = getParameter();
  const [user] = useRecoilState(usersState);
  const [allUser] = useRecoilState(allUserState);
  const [account] = useRecoilState(accountsState);

  const HeaderText = () => {
    if (pathname === '/accounts' && !page && account[0])
      return `${Convert.owner(allUser.data, account[0].user_id)}님의 계좌정보`;
    if (pathname === '/accounts' && page) return '계좌목록';
    if (pathname === '/users' && !page)
      return `${user[0]?.name}님의 사용자정보`;
    if (pathname === '/users' && page) return '사용자목록';
  };

  return (
    <Header className="bg-white p-0 pl-5">
      {collapsed ? (
        <MenuUnfoldOutlined
          className="text-lg align-baseline"
          onClick={handleToggle}
        />
      ) : (
        <MenuFoldOutlined
          className="text-lg align-baseline"
          onClick={handleToggle}
        />
      )}
      <span className="ml-10">{HeaderText()}</span>
    </Header>
  );
}
