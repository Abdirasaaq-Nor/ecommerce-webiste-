import { useState } from "react"
import mac from '../images/mac1.png'
import t_shirt from '../images/t_shirt.png'
import watch from '../images/watch1.png'
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
        <div className="flex justify-center">

        <div className="bg-purple-500 w-10/12  h-[500px]">
            {/* content here */}
                           
               <div className="flex justify-around" >
                        <div className="flex">
                                <div className="mt-44 mr-20 text-[30px] cursor-pointer" onClick={handlePrevious}>
                                <FaAngleLeft />
                               </div>
                                 <div className="flex flex-col">
                                 <h1 className="font-bold text-[30px] pt-10 pb-0">{carouselData[activeIndex].name}</h1>
                                    <h4 className="font-medium">{carouselData[activeIndex].sub_info}</h4>
                                    <p className="w-[400px] pt-10">{carouselData[activeIndex].description}</p>
                                    <button className="bg-green-500 text-white w-[200px] h-[50px] rounded-md mt-10">Buy now</button>
                                 </div>
                        </div>

                        {/* .img */}
                        <div className="flex mt-10">
                            <img className="bg-transparent" src={carouselData[activeIndex].image}alt="" />
                           <div className="mt-44 ml-20 text-[30px] cursor-pointer"  onClick={handleNext}>
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