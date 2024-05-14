import {
  FileDoneOutlined,
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

function Sidebar() {
  return (
    <Sider>
      <Flex vertical gap={16} style={{ padding: 12 }}>
        {/* Typography: https://ant.design/components/typography */}
        <Title style={{ color: "#fff", padding: 18 }}>DCB</Title>

        {/* Menu: https://ant.design/components/menu */}
        <Menu theme="dark" items={USER_MENU_ITEMS} />
      </Flex>
    </Sider>
  );
}

export default Sidebar;
