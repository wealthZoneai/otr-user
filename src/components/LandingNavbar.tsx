import React from "react";
import { FaChevronDown } from "react-icons/fa";
import indiaMap from "../assets/ind-vector-img.png"; 
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <nav className="w-full h-16 flex items-center justify-between px-10 bg-linear-to-r from-[#002366] to-[#00b8d9] shadow-md">
      {/* Logo */}
      <div className="text-white text-xl font-bold tracking-wide">
        LOGO
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10 text-white font-medium">
        <a href="#" className="hover:text-yellow-300 transition duration-200">About Us</a>
        <a href="#" className="hover:text-yellow-300 transition duration-200">FAQ’s</a>
        <a href="#" className="hover:text-yellow-300 transition duration-200">Contact Us</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button onClick={handleClick} className="bg-linear-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full font-semibold text-black hover:opacity-90 transition duration-200">
          Login
        </button>
        <div className="flex items-center gap-1">
          <img src={indiaMap} alt="India" className="w-8 h-8 object-contain" />
          <FaChevronDown className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
