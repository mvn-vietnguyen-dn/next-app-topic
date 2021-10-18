import { Layout } from "antd";
import { Provider } from 'react-redux'

import "../styles/styles.scss";
import "antd/dist/antd.css";
import { Footer, Header, Sidebar } from "../components";
import store from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
