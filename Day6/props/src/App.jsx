import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Product from "./component/Product"
import Cart from "./component/Cart"


const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Product />} />
    <Route path="/banner" element={<Cart />} />
   </Routes>

   
   </>
  )
}

export default App