import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-600 h-20 flex justify-between items-center p-10">
           <div className="text-white p-10  font-bold text-2xl">
            Logo</div>
            <div className="text-white font-bold text-2xl gap-10 flex">
                <Link to="/">Home</Link>
                <Link to="/banner">Banner</Link>
                </div>
                
                </div></>
  )
}

export default Navbar


