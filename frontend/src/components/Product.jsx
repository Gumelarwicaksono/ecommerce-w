import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  return (
    <div className="product card" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.slug}`}>
          <div className="card-title">{product.name}</div>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="card-text">$ {product.price}</div>
        <Link className="btn btn-primary" to={'/'}>
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
