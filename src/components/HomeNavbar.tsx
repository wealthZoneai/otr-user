import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDownload,
  FaHome,
  FaBell,
  FaRocket,
  FaCalendarAlt,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const HomeNavbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-gradient-to-r from-[#002366] to-[#00b8d9] shadow-md fixed top-0 left-0 z-50">
      {/* LEFT SIDE — Logo & Admit Card */}
      <div className="flex items-center gap-4">
        <div
          className="text-white text-xl font-bold tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          LOGO
        </div>

        <button className="flex items-center gap-2 bg-teal-300 text-black font-semibold px-4 py-1.5 rounded-md hover:bg-teal-400 transition duration-200">
          <FaDownload className="text-black" />
          Admit Card
        </button>
      </div>

      {/* RIGHT SIDE — Navigation Links */}
      <div className="flex items-center gap-8 text-white font-medium">
        <a
          href="/home"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-200"
        >
          <FaHome size={18} />
          <span>Home</span>
        </a>

        <a
          href="/home-notifications"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-200"
        >
          <FaBell size={18} />
          <span>Notifications</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-200"
        >
          <FaRocket size={18} />
          <span>Tracking</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-200"
        >
          <FaCalendarAlt size={18} />
          <span>Upcoming Jobs</span>
        </a>

        {/* OTR Button */}
        <button
          onClick={() => navigate("/otr")}
          className="bg-gradient-to-r from-yellow-200 to-yellow-300 px-6 py-1.5 rounded-full font-bold text-[#0a0a23] hover:opacity-90 transition duration-200"
        >
          OTR
        </button>

        {/* Profile Icon */}
        <FaUserCircle
          size={30}
          onClick={() => navigate('/my-account')}
          className="cursor-pointer hover:text-yellow-300 transition duration-200"
          title="Profile"
        />
      </div>
    </nav>
  );
};

export default HomeNavbar;
