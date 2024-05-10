import {
  FileDoneOutlined,
  LogoutOutlined,
  SendOutlined,
  UsergroupAddOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

const USER_MENU_ITEMS = [
  {
    key: "clients",
    icon: <UsergroupAddOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/"}>Clients</Link>,
  },
  {
    key: "deposit",
    icon: <VerticalAlignTopOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/deposit"}>Deposit</Link>,
  },
  {
    key: "withdraw",
    icon: <VerticalAlignBottomOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/withdraw"}>Withdraw</Link>,
  },
  {
    key: "send-money",
    icon: <SendOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/send-money"}>Send Money</Link>,
  },
  {
    key: "get-balance",
    icon: <FileDoneOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/get-balance"}>Get Balance</Link>,
  },
  {
    key: "budget-app",
    icon: <VerticalAlignTopOutlined style={{ paddingRight: 10 }} />,
    label: <Link to={"/budget-app"}>Budget App</Link>,
  },
];

const LOGOUT = [
  {
    key: "logout",
    icon: <LogoutOutlined style={{ paddingRight: 10 }} />,
    label: "Logout",
  },
];

function Sidebar() {
  const handleLogout = () => console.log("LOG OUT!");
  return (
    <Sider>
      {/* Parent div container, space-between to keep the 2 child divs seperated. */}
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        {/* 1st child div */}
        <Flex vertical gap={16} style={{ padding: 12 }}>
          <Title style={{ color: "#fff", padding: 18 }}>DCB</Title>
          <Menu theme="dark" items={USER_MENU_ITEMS} />
        </Flex>
        {/* 2nd child div */}
        <Flex vertical style={{ padding: 12 }}>
          <Menu theme="dark" items={LOGOUT} onClick={handleLogout} />
        </Flex>
      </Flex>
    </Sider>
  );
}

export default Sidebar;
