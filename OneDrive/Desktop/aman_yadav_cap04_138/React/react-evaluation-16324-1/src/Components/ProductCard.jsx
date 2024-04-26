import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return <div data-testid="product-card">
    <Link to={`/product/${product.id}/view`}>
    <img src={product.images[0]} alt="" />
    <h3>{product.title}</h3>
        <p>Price: {product.price}</p>
        <p>Location: {product.location}</p>
        </Link>
  </div>;
};

export default ProductCard;
