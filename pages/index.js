import { Breadcrumb, Layout } from "antd";
import { Seo } from "../components";

const { Content } = Layout;

export default function Home() {
  return (
    <Content className="page-home page-wrapper">
      <Seo title="Home" />
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Home</h2>
    </Content>
  );
}
