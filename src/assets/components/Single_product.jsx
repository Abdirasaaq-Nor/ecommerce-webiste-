import { Link } from 'react-router-dom';

import Products from '../products/Product_list.json'

const Single_product = () => {



    return(

        //    <Link to={`/product/${product.id}`}>{product.name}</Link>
        <>
                 
                 <h2 className='text-center mt-20 font-mono'>Sidoo kale waxaad kaheli kartaa</h2>
                    <section className='flex ml-6 lg:justify-center mb-20 mt-6 sm:ml-20'>
             
                        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-2 gap-y-4 ">

                        {Products.products.map((product) => (
                          <div className=" bg-gray-100 w-[160px]">
                              <div key={product.id} className=''>
                                 <div className="isType bg-gray-50 w-[80px] h-[40px] pt-[2px] shadow-sm py-10">
                                    <p className='text-gray-600 pl-2'>{product.type}</p>
                                 </div>
                                <Link to ={`/product/${product.id}`} ><img className='w-[150px]' src={product.image} alt="" /></Link>
                              <div className="flex justify-between px-2 pt-2">
                                
                              <Link className='pl-2 text-[16px] font-mono' to={`/product/${product.id}`}>{product.name}</Link>

                            <h4 className='pl-2 text-[14px] text-gray-400'>${product.price}</h4>
                              </div>

                              <p className='text-[10px] w-[100px] py-2 pl-4 font-serif'>{product.discount}</p>
                                
                            </div>
                          </div>
                        ))}
                        </div>
                     
                    </section>

                    {/* <Router>
     

        <Route path="/product/:id" component={ProductDetail} />
      
    </Router> */}
        </>
    )
}

export default Single_product;