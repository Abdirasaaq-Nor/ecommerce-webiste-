import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../products/Product_list.json';
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = Products.products.find((product) => product.id === productId);
  
  console.log(product)
  const { image } = product

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <img src={image} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
