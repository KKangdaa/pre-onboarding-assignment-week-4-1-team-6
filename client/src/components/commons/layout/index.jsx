import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';
import SiderLayout from './SiderLayout';
import { useRecoilState } from 'recoil';
import { allUserState } from 'recoil/user';
import { allAccountState } from 'recoil/account';
import { userSettingState } from 'recoil/userSetting';

const { Content } = Layout;

export default function LayoutContainer() {
  const [allUser] = useRecoilState(allUserState);
  const [allAccount] = useRecoilState(allAccountState);
  const [userSetting] = useRecoilState(userSettingState);
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <Layout className="min-h-screen flex flex-row">
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} handleToggle={toggleCollapse} />
        <Content className="mx-auto">
          <Breadcrumb className="my-2" />
          {allUser.data === [] && <div>Loading...</div>}
          {allAccount.data === [] && <div>Loading...</div>}
          {userSetting === [] && <div>Loading...</div>}
          {userSetting !== [] && (
            <div className="p-4 bg-white overflow-auto lg:max-w-5xl md:max-w-3xl">
              <Outlet />
            </div>
          )}
          <Breadcrumb className="my-2" />
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}
