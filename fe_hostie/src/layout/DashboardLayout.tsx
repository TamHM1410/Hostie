"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
///asset
import {
  LayoutDashboard,
  Users,
  Settings,
  NotepadText,
  FolderKanban,
} from "lucide-react";
const { Header, Content, Footer, Sider } = Layout;
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const items = [
  {
    key: 0,
    icon: <LayoutDashboard />,
    label: <Link href='/dashboard'>Dash Board</Link>,
  },
  {
    key: 1,
    icon: <Users />,
    label: <Link href='/dashboard/forum'>Cộng đồng</Link>,
  },
  {
    key: 2,
    icon: <FolderKanban />,
    label: <Link href='/dashboard/service'>Quản lí dịch vụ</Link>,
  },
  {
    key: 3,
    icon: <NotepadText />,
    label: <Link href='/dashboard/booking'>Danh sách đặt phòng</Link>,
  },
  {
    key: 4,
    icon: <Settings />,
    label: <Link href='/dashboard/setting'>Cài đặt</Link>,
  },
];
const DashboardLayout = ({ children }: any) => {
  const pathname = usePathname();
  let currPage;
  switch (pathname) {
    case "/dashboard":
      currPage = 0;
      break;
    case "/dashboard/forum":
      currPage = 1;
      break;
    case "/dashboard/booking":
      currPage = 2;
      break;
    case "/dashboard/setting":
      currPage = 4;
      break;
  }

  const [currentKey, setCurrentKey] = useState(0);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='min-h-screen'>
      <Sider
        style={{ backgroundColor: "#F6F5F2" }}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='demo-logo-vertical' />
        <div>
          <h1
            className=' font-extrabold justify-center text-center'
            style={{ fontSize: "45px", fontWeight: 800 }}
          >
            HOST<span style={{ color: "#2152FF" }}>I</span>E
          </h1>
        </div>
        <Menu
          style={{ backgroundColor: "#F6F5F2", border: 0 }}
          mode='inline'
          defaultSelectedKeys={[currPage?.toString() ?? "1"]}
          items={items}
          onClick={(e) => setCurrentKey(+e?.key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
