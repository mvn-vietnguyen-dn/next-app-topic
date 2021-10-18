import { Layout } from "antd";
import "../styles/styles.scss";
import "antd/dist/antd.css";
import { Footer, Header, Sidebar } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={{ height: "100%" }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="layout-content">
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MyApp;
