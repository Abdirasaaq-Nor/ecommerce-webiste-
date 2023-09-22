import log1 from '../images/log1.svg'
import log2 from '../images/log2.svg'
import log3 from '../images/log3.svg'
import log4 from '../images/log4.svg'
import log5 from '../images/log5.svg'
const Trasted_companies = () => {

return (
    <>
<div className="main_div">
                    <h2 className="flex justify-center items-center py-10">Trasted Companies</h2>

               <div className="trasted_compnies grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5">
           
                <div className="one">
                <img className="w-[150px]" src={log1} alt="" />
                </div>
                <div className="one">
                <img className="w-[150px]" src={log2} alt="" />
                </div>
                <div className="one">
                <img className="w-[150px]" src={log3} alt="" />
                </div>
                <div className="one">
                <img className="w-[150px]" src={log4} alt="" />
                </div>
                <div className="one">
                <img className="w-[150px]" src={log5} alt="" />
                </div>
               </div>
                    </div>
</>

)

}


export default Trasted_companies