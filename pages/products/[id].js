/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Breadcrumb, Rate, Space, Spin } from "antd";

const { Content } = Layout;

import axios from "../../core/services/api";
import { Seo } from "../../components";

export default function Product({ product }) {
  const router = useRouter();

  return (
    <Content className="page-product-detail page-wrapper">
      <Seo title={`Products ${product?.id}`} />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/products">Products</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Product {product?.id}</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Product {product?.id}</h2>
      {!router.isFallback ? (
        <div className="product-detail">
          <div className="product-image-wrapper">
            <img
              className="product-image"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <div className="product-content">
            <h3 className="product-title">{product?.title}</h3>
            <p className="product-description">{product?.description}</p>
            <h4 className="product-price">Price: {product?.price} $</h4>
            <h4 className="product-price">
              Rating:
              <Rate
                disabled
                className="ml-10"
                value={Math.ceil(product?.rating?.rate || 0)}
              />
            </h4>
          </div>
        </div>
      ) : (
        <Space className="loading-spin">
          <Spin size="large" />
        </Space>
      )}
    </Content>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get("/products");
  const products = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios.get(`/products/${params.id}`);
  const product = res.data;

  // Pass post data to the page via props
  return { props: { product } };
}

// export async function getServerSideProps({ params }) {
//   const res = await axios.get(`/products/${params.id}`);
//   const product = res.data;

//   if (!product) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     // will be passed to the page component as props
//     props: { product },
//   };
// }
