import { LogoutOutlined, BankOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { removeToken } from 'utils/Storage';
import PropTypes from 'prop-types';
import { getParameter } from 'utils/GetParams';
import { useGetAllData } from 'hooks';
import LOGO from 'assets/logo.png';

SiderLayout.propTypes = {
  collapsed: PropTypes.bool,
};

export default function SiderLayout({ collapsed }) {
  const { pathname } = getParameter();
  const split_pathname = pathname.split('/');
  useGetAllData();

  const logout = () => {
    removeToken();
  };

  const items = [
    {
      key: '/accounts',
      label: (
        <Link to={'/accounts?_order=desc&_sort=id&_page=1&_limit=10&q='}>
          <span>계좌 목록</span>
        </Link>
      ),
      icon: <BankOutlined />,
    },
    {
      key: '/users',
      label: (
        <Link to={'/users?_order=desc&_sort=id&_page=1&_limit=10&q='}>
          <span>사용자 목록</span>
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: (
        <Link to={'/'} onClick={logout}>
          <span>로그아웃</span>
        </Link>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Sider collapsed={collapsed} width={'15%'}>
      <img src={LOGO} className="w-20 h-20 mx-auto" />
      <Menu
        className="p-0"
        theme="dark"
        items={items}
        selectedKeys={['/' + split_pathname[1]]}
      />
    </Sider>
  );
}
