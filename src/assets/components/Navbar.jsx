import { Link } from 'react-router-dom';
import { FaAngleUp, FaBars } from 'react-icons/fa';
import { useState } from 'react';
// .....pages
import Pages from '../components/Routers'



const Navbar  = () => {
  const [electrons, setElectrons] = useState(false)
  const [clothes, setCLothes] = useState(false)
  const [shop, setShop] = useState(false)
  const [book, setBook] = useState(false)
  const [isopen, setIsopen] = useState(false)

  const  Electrons =  () => {
    setElectrons(!electrons)
  }
  const clothers = () => {
    setCLothes(!clothes)
  }
  const shops = () => {
    setShop(!shop)
  }
  const Books = () => {
    setBook(!book)
  }

  const toggle = () => {

       setIsopen(!isopen)
  }
  return (

    <>
       <div className="main bg-white   shadow-lg w-full h-20 py-6 flex justify-between px-10
        xl:justify-evenly lg:justify-evenly md:justify-evenly sm:justify-evenly">
           
              <span className='block xl:hidden lg:hidden md:hidden sm:hidden text-[25px] cursor-pointer'  onClick={toggle}>
                  <FaBars />
                </span>
             
            <nav className='hidden xl:block  lg:block md:block sm:block'>
                <ul className='flex'>
                <Link to="/">Home</Link>
                    <li className='px-2 xl:px-6 lg:px-4 md:px-4 sm:px-4 flex flex-col' onClick={Electrons}>
                            <span className='flex font-semibold cursor-pointer'>
                            Electrons
                          <span className='pt-[4px]'><FaAngleUp /></span>
                        
                            </span>
                                  <div className='  absolute  top-64'>
                              {electrons && (
                                <div className="py-4 pl-2 bg-red-400 w-[120px] ">
                                  <li>electrons 1</li>
                                  <li>eelectrns 2</li>
                                </div>
                              )}
                            </div>
                    </li>
                   
                    <li className='px-2 xl:px-4 lg:px-6 md:px-4 sm:px-4  flex flex-col' onClick={clothers}>
                        <span className='flex font-semibold cursor-pointer'>
                        CLothers
                        <span className='pt-[4px]'><FaAngleUp /></span>
                        </span>
                        <div className='absolute  top-64'>
                  {clothes && (
                    <div className="bg-green-400 py-4 pl-2 w-[120px]">
                      <li>cloth 1</li>
                      <li>cloth 2</li>
                    </div>
                  )}
                </div>
                    </li>
                  
                    <li className='px-2 xl:px-6 lg:px-4 md:px-4 sm:px-4  flex flex-col' onClick={Books}>
                         <span className='flex font-semibold cursor-pointer'>
                         Books
                        <span className='pt-[4px]'><FaAngleUp /></span>
                         </span>

                         <div className='absolute top-64'>
                          {book && (
                            <div className="bg-yellow-400 py-4 pl-2 w-[120px]">
                              <li>Book 1</li>
                              <li>Book 2</li>
                              <li>Book 3</li>
                            </div>
                          )}
                         </div>
                    </li>
                    <li className='px-2 xl:px-6 lg:px-4 md:px-4 sm:px-4  flex flex-col' onClick={shops}>
                         <span className='flex font-semibold cursor-pointer'>
                         Shop deals
                        <span className='pt-[4px]'><FaAngleUp /></span>
                         </span>
                        <div className='absolute top-64'>
                          {shop && (
                            <div className="bg-purple-400 ml-4 py-4 pl-2 w-[120px]">
                              <li>Phone 1</li>
                               <li>phone 2</li>
                               <li>phone 3</li>
                    
                            </div>
                          )}
                        </div>
                    </li>
                </ul>
            </nav>
          

            <div className="login">
              <ul className='flex'>
                <Link to="/sign-in" className='px-2 cursor-pointer'>Login</Link>
                <Link className='px-2 cursor-pointer' to= "/sing-up">sing-up</Link>
                
              </ul>
              <div className="toggle">
               
              </div>
            </div>

            {/* ......... d */}
        
           
       </div>
 

       {/* ............ navabar toggle */}
     
        {isopen && (
         
             <nav className='block   pl-8 pb-4 relative top-10 bg-white shadow-lg w-full h-full'>
                <ul className='flex flex-col'>
                    <li className='px-2  xl:px-4 lg:px-4 md:px-4 sm:px-4 flex flex-col' onClick={Electrons}>
                            <span className='flex font-semibold cursor-pointer' >
                            Electrons
                          <span className='pt-[4px]'><FaAngleUp /></span>
                            </span>
                                  <div className=''>
                              {electrons && (
                                <div className="">
                                  <li>electrons 1</li>
                                  <li>eelectrns 2</li>
                                </div>
                              )}
                            </div>
                    </li>
                   
                    <li className='px-2 py-2 xl:px-4 lg:px-4 md:px-4 sm:px-4  flex flex-col' onClick={clothers}>
                        <span className='flex font-semibold cursor-pointer'>
                        CLothers
                        <span className='pt-[4px]'><FaAngleUp /></span>
                        </span>
                        <div>
                  {clothes && (
                    <div className="">
                      <li>cloth 1</li>
                      <li>cloth 2</li>
                    </div>
                  )}
                </div>
                    </li>
                  
                    <li className='px-2 py-2 xl:px-4 lg:px-4 md:px-4 sm:px-4  flex flex-col' onClick={Books}>
                         <span className='flex font-semibold cursor-pointer'>
                         Books
                        <span className='pt-[4px]'><FaAngleUp /></span>
                         </span>

                         <div>
                          {book && (
                            <div className="">
                              <li>Book 1</li>
                              <li>Book 2</li>
                              <li>Book 3</li>
                            </div>
                          )}
                         </div>
                    </li>
                    <li className='px-2 py-2 xl:px-4 lg:px-4 md:px-4 sm:px-4  flex flex-col' onClick={shops}>
                         <span className='flex font-semibold cursor-pointer'>
                         Shop deals
                        <span className='pt-[4px]'><FaAngleUp /></span>
                         </span>
                        <div>
                          {shop && (
                            <div className="">
                              <li>Phone 1</li>
                               <li>phone 2</li>
                               <li>phone 3</li>
                    
                            </div>
                          )}
                        </div>
                    </li>
                </ul>
            </nav>
                
          
        
        )}

        {/* .............all pages appear here */}


  
        <Pages />
     
       
    </>
  )


}

export default Navbar