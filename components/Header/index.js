import { Layout } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import logo from "../../logo.svg";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const favouriteCount = useSelector(
    (state) => state.favourite.favouriteIds.length
  );

  return (
    <AntdHeader className="page-header">
      <Link href="/" passHref>
        <h1 className="app-title">
          <Image width={50} height={50} src={logo} alt="App logo" />
          Next.JS
        </h1>
      </Link>
      <div>
        <span className="favourite-icon">
          <HeartFilled className="header-icon" />
          {!!favouriteCount && (
            <span className="favourite-count">{favouriteCount}</span>
          )}
        </span>
      </div>
    </AntdHeader>
  );
};
