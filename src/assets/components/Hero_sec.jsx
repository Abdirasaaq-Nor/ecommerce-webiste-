import { useState } from "react"
import mac from '../images/mac.png'
import t_shirt from '../images/shirt.png'
import watch from '../images/wat.png'
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const Hero_sec = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setActiveIndex((pref_index) => (pref_index + 1) % carouselData.length)
      };
      
    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
      };
      
    const carouselData = [
        {
            name: "Saacad will",
            sub_info: "waa saacad wiil oo tayo leh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam atque recusandae ipsum consequuntur ",
            image: watch
        },
        {
            name: "macBook pro laptop",
            sub_info: "waa laptop macBook pro oo tayo leh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam atque recusandae ipsum consequuntur ",
            image: mac
        },
        {
            name: "funaanad will",
            sub_info: "waa funaanad wiil oo tayo leh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam atque recusandae ipsum consequuntur ",
            image: t_shirt
        },

    ]
    return (
        <>
        <div className="flex  xl:justify-center mt-4">

        <div className="bg-green-50 w-10/12  h-[500px]">
            {/* content here */}
                           
               <div className="flex pt-10 flex-col a xl:flex-row lg:flex-col  md:flex-row md:justify-start xl:justify-around" >
                        <div className="flex justify-start mr-20">
                                <div className="mt-32 xl:mt-44 lg:mt-40 md:mt-40 xl:mr-20 lg:mr-20 md:mr-20 text-[30px] cursor-pointer" onClick={handlePrevious}>
                                <FaAngleLeft />
                               </div>
                               <div className="xl:hidden md:hidden  lg:hidden  relative  top-32 left-[130%]  xl:left-[100%] lg:bg-yellow-400 text-[30px]">
                                 <FaAngleRight />
                                 </div>
                                 <div className="flex flex-col mr-56 ">
                                 <img className="bg-transparent block xl:hidden lg:hidden md:hidden" src={carouselData[activeIndex].image}alt="" />
                                 <h1 className="font-bold text-[30px] pt-10 pb-0">{carouselData[activeIndex].name}</h1>
                                    <h4 className="font-medium">{carouselData[activeIndex].sub_info}</h4>
                                    <p className=" w-[280px] sm:w-[360px]  xl:w-[400px] lg:w-[400px] md:w-[400px] pt-10">{carouselData[activeIndex].description}</p>
                                    <button className="bg-green-600 text-white w-[200px] h-[50px] rounded-md mt-10">Buy now</button>
                                 </div>
                                
                        </div>

                        {/* .img */}
                        <div className="flex mt-10">
                            <img className="bg-transparent hidden xl:block lg:block md:block md:w-[500px]" src={carouselData[activeIndex].image}alt="" />
                           <div className="mt-44 ml-20 md:ml-16 text-[30px] cursor-pointer hidden xl:block lg:block 
                           md:block  lg:absolute lg:top-[30%] lg:left-[86%]"  onClick={handleNext}>
                            <FaAngleRight />
                           </div>
                        </div>
               </div>

        </div>
        </div>
    
        </>
    )
}


export default Hero_sec


{/* <div>

<button onClick={handlePrevious}>Previous</button>
<div>
<img src={carouselData[activeIndex].image} alt="Carousel Item" />
<p>{carouselData[activeIndex].text}</p>
</div>
<button onClick={handleNext}>Next</button>
</div> */}