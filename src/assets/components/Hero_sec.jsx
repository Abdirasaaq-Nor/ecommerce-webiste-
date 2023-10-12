import { useState } from "react"
import mac from '../images/mac.png'
import t_shirt from '../images/shirt.png'
import watch from '../images/wat.png'

import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import Trasted_companies from "./Trasted_companies";

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
                <div className="main">
                    <div className="second_main flex justify-between  bg-green-50 w-full h-full px-2 pb-10 mb-10 ">
                        {/* ...icon left */}
                        <div className="icon_left px-4 flex justify-center self-center items-center
                         text-gray-500 text-[30px] cursor-pointer" onClick={handlePrevious}>
                            <FaAngleLeft />
                        </div>
                        {/* ...contents */}
                      

                        <div className="content px-4 flex ">
                                <div className="content_1 ">
                                <img className="bg-transparent xl:hidden lg:hidden md:hidden sm:hidden" src={carouselData[activeIndex].image}alt="" />
                                <h1 className="font-bold text-[26px] pt-4">{carouselData[activeIndex].name}</h1>
                                <h4 className="font-medium">{carouselData[activeIndex].sub_info}</h4>
                                <p className="pt-6 xl:w-[400px] lg:w-[300px]">{carouselData[activeIndex].description}</p>
                                <button className="bg-green-600 text-white w-[200px] h-[50px] rounded-md mt-10">Buy now</button>
                          
                                </div>
                                <div className="mg">
                                <img className="bg-transparent hidden xl:block lg:block md:block sm:block" src={carouselData[activeIndex].image}alt="" />
                                </div>
                        </div>

                        {/* .....icon rght */}
                        <div className="icon_right px-4  flex justify-center 
                        self-center items-center text-gray-500 text-[30px] cursor-pointer" onClick={handleNext}>
                            <FaAngleRight />
                        </div>
                    </div>
                </div>

                {/* ..........trasted compnaies here */}

               <div>
               <Trasted_companies />
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