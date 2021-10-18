import { useMemo, useState } from "react";
import { Breadcrumb, Col, Layout, Pagination, Row } from "antd";
import Link from "next/link";

const { Content } = Layout;

import axios from "../../core/services/api";
import { ProductItem, Seo } from "../../components";

export default function Products({ products }) {
  const [currentPage, setCurrentPage] = useState(1);

  const productsWithPaging = useMemo(
    () => products.slice((currentPage - 1) * 12, currentPage * 12),
    [products, currentPage]
  );

  return (
    <Content className="page-products page-wrapper">
      <Seo title="Products" />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Products List</h2>
      <Row gutter={[24, 24]} className="products-list">
        {productsWithPaging.map((product) => (
          <Col
            key={product?.id}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
      <Pagination
        hideOnSinglePage
        className="products-paginator"
        defaultCurrent={currentPage}
        current={currentPage}
        defaultPageSize={12}
        total={products.length}
        onChange={(page) => setCurrentPage(page)}
      />
    </Content>
  );
}

export async function getStaticProps() {
  const res = await axios.get("/products");
  const products = res.data;

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    // will be passed to the page component as props
    props: { products },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
}
