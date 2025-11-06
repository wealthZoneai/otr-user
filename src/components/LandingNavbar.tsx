import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import indiaMap from "../assets/ind-vector-img.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // ✅ For now, directly navigate to home (simulate login success)
    navigate("/login");
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-10 bg-gradient-to-r from-[#002366] to-[#00b8d9] shadow-md">
      {/* Left: Logo */}
      <Link
        to="/"
        className="text-white text-xl font-bold tracking-wide hover:text-yellow-300 transition duration-200"
      >
        LOGO
      </Link>

      {/* Right: Nav links, Login button, India map & dropdown */}
      <div className="flex items-center gap-8 text-white font-medium">
        {/* Nav Links */}
        <Link
          to="/about"
          className="hover:text-yellow-300 transition duration-200"
        >
          About Us
        </Link>
        <Link
          to="/faq"
          className="hover:text-yellow-300 transition duration-200"
        >
          FAQ’s
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-300 transition duration-200"
        >
          Contact Us
        </Link>

        {/* Login Button */}
        <button
          onClick={handleLoginClick}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full font-semibold text-black hover:scale-105 hover:opacity-90 transition duration-200"
        >
          Login
        </button>

        {/* India Map + Dropdown */}
        <div className="flex items-center gap-3">
          <img src={indiaMap} alt="India" className="w-12 h-12 object-contain" />
          <FaChevronDown className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
