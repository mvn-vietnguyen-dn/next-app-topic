import { Layout } from "antd";
import { LogoutOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

import logo from "../../logo.svg";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader className="page-header">
      <Link href="/" passHref>
        <h1 className="app-title">
          <Image width={50} height={50} src={logo} alt="App logo" />
          React Training 2021
        </h1>
      </Link>
      <div>
        <span className="favourite-icon">
          <HeartFilled className="header-icon" />
        </span>
        <span className="ml-15 logout-icon">
          <span>Logout</span>
          <LogoutOutlined className="header-icon ml-5" />
        </span>
      </div>
    </AntdHeader>
  );
};
