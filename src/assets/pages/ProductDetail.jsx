import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../products/Product_list.json';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = Products.products.find((product) => product.id === productId);
  
  console.log(product)
  const [count, setCount] = useState(0)
  const [Total, setTotal] = useState(0)
  const incremnt = () => {
          setCount(count + 1)
          setTotal(Total + product.price)
        }
        const decrement = () => {
          
          if (count > 0){
            setCount(count - 1)
            setTotal(Total - product.price)
          }
}


  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <>
    
    <div className="main">
      <div className="image flex justify-center">
          <img src={product.image} alt="sorry, internet problem!" />
      </div>
      <div className="content pl-10">
                  <h4 className='text-yellow-400'>Category: {product.category}</h4>
                  <h3 className='font-[100] pt-2'>{product.name}</h3>
                  <h5 className='font-bold'>{product.description}</h5>
                  <h6 className='pt-2 font-sans space-y-3 text-gray-600'>{product.Long_description}</h6>
                  <h3 className='font-bold text-[30px] pt-2'>${product.price}</h3>
                  <p className='text-yellow-400'>{product.discount}</p>

                  <div className="cart">
                    <div className="incremtbtn">
                           <div className="flex mt-4">
                           <div className="flex bg-green-100 text-black h-[40px] items-center w-[180px] justify-between px-6">
                              <h4 className='font-bold cursor-pointer' onClick={decrement}>-</h4>
                              <p>{count}</p>
                              <h4 className='font-bold cursor-pointer' onClick={incremnt}>+</h4>

                            </div>
                            <div className="totl">
                       <h5 className='pl-4 font-bold'>Total: {Total} </h5>

                            </div>
                           </div>
                    </div>
                    <div className="btn">
                  
                      <button className='bg-green-500 text-white w-[245px] h-[40px] cursor-pointer mt-4 mb-10'>
                      <span><faCartShopping /></span>
                        Add to cart
                        </button>
                    </div>
                  </div>
      </div>
    </div>
    </>
  );
};
{/* <h3>{product.name}</h3>
<p>Price: ${product.price}</p>
<p>Description: {product.description}</p>
<img src={product.image} alt={product.name} /> */}
export default ProductDetail;
