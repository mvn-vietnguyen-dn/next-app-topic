/* eslint-disable @next/next/no-img-element */
import { Button, Rate } from "antd";
import Link from "next/link";

export const ProductItem = ({
  id,
  image,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <div className="product-item">
      <Link href={`/products/${id}`} passHref>
        <img className="product-image" src={image} alt={title} />
      </Link>
      <div className="product-content">
        <div className="product-content-top">
          <h5 className="product-title">{title}</h5>
          <p className="product-description">{description}</p>
          <Rate
            disabled
            className="product-rating"
            value={Math.ceil(rating?.rate || 0)}
          />
        </div>
        <div className="product-content-bottom mt-15">
          <p className="product-price">{price} $</p>
          <div className="product-actions">
            <Button type="dashed" className="btn-favourite">
              Favourite
            </Button>
            <Button type="primary" className="ml-5">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
