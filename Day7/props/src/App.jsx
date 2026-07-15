import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Study from './component/Study'
import Work from './component/Work'
import Name from './component/Name'



const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/student" element={<Study/>} />
    <Route path="/employee" element={<Work/>} />
    <Route path="/product" element={<Name/>} />
  </Routes>
  </>
  )
}

export default App