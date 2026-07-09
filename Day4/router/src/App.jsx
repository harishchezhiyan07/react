import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Help from "./component/Help"


const App = () => {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<Help />} />
    </Routes>
    
    
    
    </>
  )
}

export default App