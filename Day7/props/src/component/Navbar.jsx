import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-3xl font-bold text-white cursor-pointer">
            Logo
          </div>

          {/* Menu */}
          <div className="flex items-center gap-8 text-lg font-medium">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/product"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Product
            </Link>

            <Link
              to="/student"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Student
            </Link>

            <Link
              to="/employee"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Employee
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;