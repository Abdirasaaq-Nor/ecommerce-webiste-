import React, { useState } from 'react';
import productList from '../products/Product_list.json'

const Products = () => {
  const [products, setProducts] = useState(productList.products);

  // Rest of your component code

  return (
    // JSX code
    <>
    <div>
    {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}

    
    </div>
    
    </>
  );
}

export default Products;
