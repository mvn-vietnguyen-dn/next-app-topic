import Link from "next/link";
import { Layout, Menu } from "antd";
import { CarOutlined, HomeOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Item: MenuItem } = Menu;

export const Sidebar = () => {
  return (
    <Sider className="page-sidebar">
      <Menu
        theme="dark"
        mode="inline"
        forceSubMenuRender
        defaultSelectedKeys={["/"]}
      >
        <MenuItem key="/" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem key="/products" icon={<CarOutlined />}>
          <Link href="/products">Products</Link>
        </MenuItem>
      </Menu>
    </Sider>
  );
};
