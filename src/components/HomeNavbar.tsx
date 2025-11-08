import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  FaDownload,
  FaHome,
  FaBell,
  FaRocket,
  FaCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";

const HomeNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Track current route

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ✅ Helper: determine if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-gradient-to-r from-[#002366] to-[#00b8d9] shadow-md">
      {/* LEFT SIDE — Logo & Admit Card */}
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate("/home")}
          className="text-white text-xl font-bold tracking-wide cursor-pointer"
        >
          LOGO
        </div>

        <button
          onClick={() => navigate("/admit-card-released")}
          className="flex items-center gap-2 bg-teal-300 text-black font-semibold px-4 py-1.5 rounded-md hover:bg-teal-400 transition duration-200"
        >
          <FaDownload className="text-black" />
          Admit Card
        </button>
      </div>

      {/* RIGHT SIDE — Nav Links */}
      <div className="flex items-center gap-8 text-white font-medium">
        {/* Home */}
        <Link
          to="/home"
          className={`flex items-center gap-2 transition duration-200 ${
            isActive("/home")
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          <FaHome size={18} />
          <span>Home</span>
        </Link>

        {/* Notifications */}
        <Link
          to="/home-notifications"
          className={`flex items-center gap-2 transition duration-200 ${
            isActive("/home-notifications")
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          <FaBell size={18} />
          <span>Notifications</span>
        </Link>

        {/* Tracking */}
        <Link
          to="/tracking"
          className={`flex items-center gap-2 transition duration-200 ${
            isActive("/tracking")
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          <FaRocket size={18} />
          <span>Tracking</span>
        </Link>

        {/* Upcoming Jobs */}
        <Link
          to="/upcoming-jobs"
          className={`flex items-center gap-2 transition duration-200 ${
            isActive("/upcoming-jobs")
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          <FaCalendarAlt size={18} />
          <span>Upcoming Jobs</span>
        </Link>

        {/* OTR Button */}
        <button className="bg-gradient-to-r from-yellow-200 to-yellow-300 px-6 py-1.5 rounded-full font-bold text-[#0a0a23] hover:opacity-90 transition duration-200">
          OTR
        </button>

        {/* Profile */}
        <FaUserCircle
          size={30}
          className={`cursor-pointer transition duration-200 ${
            isActive("/profile")
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
          title="Profile"
          onClick={() => navigate("/profile")}
        />
      </div>
    </nav>
  );
};

export default HomeNavbar;
