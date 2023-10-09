
import Home_page from "../pages/Home_page"
import Singin from "../pages/Singin"
import Singup  from "../pages/Singup"
import { Routes, Route } from "react-router-dom"
import ProductDetail from "../pages/ProductDetail";
const Routers = () => {
   return (
            <>
            <Routes>
                <Route path="/sing-up" element = {<Singup />}></Route>
                <Route path="/sign-in" element  = {<Singin />}></Route>
                <Route path="/" element = {<Home_page />}></Route>
                <Route path="/product/:id" element={<ProductDetail />} />



            
            </Routes>
            </>

   )


}


export default Routers