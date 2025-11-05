import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-10 bg-gray-900 text-white shadow-md">
      <div className="text-xl font-bold">Benjour Dashboard</div>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-yellow-300">Dashboard</a>
        <a href="#" className="hover:text-yellow-300">Orders</a>
        <a href="#" className="hover:text-yellow-300">Profile</a>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
