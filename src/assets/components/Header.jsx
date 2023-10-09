import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaTwitter, FaInstagram , FaTiktok, FaCartArrowDown} from 'react-icons/fa';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  logo from '../images/mail.png'
import  logo_com from '../images/comp_logo.png'




const Header = () => {

  // Rest of your component code

  return (
    // JSX code
    <>
    <header className=''>
        <h2>sss</h2>
        <div className=' h-full] pb-10 bg-green-500 text-white w-full'>
            {/* ....top section */}

    <div className="open_hors flex justify-between lg:mx-20 pt-4">
        <div className="div_one">
            <h5 className='font-normal text-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] pl-6 xl:pl-0  text-white  sm:pl-10 xl:pl-0'><span className='font-bold'>Opening Hours </span>10:00 am to 5:00 pm <span  className='font-bold'>(Monday-Saturday)</span></h5>
        </div>
        <div className="div_two flex">
            <h4 className='mr-4  text-white font-semibold' >+252617611425</h4>
            <span className='border-r-2 border-gray-500 mr-6'></span>
            <div className="icons flex ">
                 <span className='mx-2 hover:cursor-pointer '> <FaFacebook /></span>
                 <span className='mx-2 hover:cursor-pointer '><FaTwitter /></span>
                 <span className='mx-2 hover:cursor-pointer '><FaInstagram /></span>
                 <span className='mx-2 hover:cursor-pointer '><FaTiktok /></span>

            </div>
        </div>   
    </div>

{/* ....  logo and search */}

     <div className="search   lg:flex  md:flex sm:flex xl:flex xl:justify-between lg:justify-between md:justify-between sm:justify-between  lg:mx-20 mx-10 mt-8">
        <div className="search_ flex justify-between">

            <img className='w-[70px]' src={logo_com} alt="logo" />
            <div className=" block flex xl:hidden lg:hidden md:hidden sm:hidden  ">
            <span className='mt-4 mr-2'><FontAwesomeIcon className=' h-[50px]' icon={faCartShopping} /></span>
            <span className='bg-red-400 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white '>1</span>
        </div>
            {/* <h3>logo name</h3> */}
        </div>
        <div className="">
           
<form className="flex mt-10 xl:mt-4 lg:mt-0 md:mt-0 sm:mt-0 lg:items-center md:items-center ">   
    <label for="simple-search" class="sr-only">Search</label>
    <div className="relative w-full">
       
        <input type="text"  className="search_input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block xl:w-[600px] md:w-[400px] outline-none pl-10 p-2.5  
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500 h-[50px]" placeholder="Search branch name... " required /> 
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg
     border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
     dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[40px] w-[50px]">
        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
       
    </button>
</form>


        </div>
        <div className=" hidden xl:flex lg:flex md:flex sm:flex xl:block lg:block md:block sm:block ">
            <span className='mt-4 mr-2'><FontAwesomeIcon className=' h-[50px]' icon={faCartShopping} /></span>
            <span className='bg-red-400 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white '>1</span>
        </div>

     </div> 
   
        </div>


        {/* ........... navabr */}

        <Navbar />
    </header>
  
    
    
    
    </>
  );
}

export default Header;
