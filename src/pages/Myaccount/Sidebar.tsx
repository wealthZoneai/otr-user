import React from "react";
import { NavLink } from "react-router-dom";
import {
    Wallet,
    Heart,
    HelpCircle,
    Share2,
    ClipboardList,
    CreditCard, // Used for PQP / FaIdCard
    Settings,
    LogOut,
} from "lucide-react";

// --- Data Structures ---

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    // IMPORTANT: Path must be absolute to work correctly with parent routes
    path: string;
}

// Define the menu items using the Lucide icons
const menuItems: MenuItem[] = [
    { icon: <Wallet size={20} />, label: "Wallet", path: "/Myaccount/Wallet" },
    { icon: <ClipboardList size={20} />, label: "OTR Form", path: "/Myaccount/otr-form" },
    { icon: <Heart size={20} />, label: "SavedJobs", path: "/Myaccount/SavedJobs" },
    { icon: <CreditCard size={20} />, label: "PQP", path: "/Myaccount/MyAccountPQP" },
    { icon: <Share2 size={20} />, label: "Refer & Earn", path: "/Myaccount/Refer" },
    { icon: <HelpCircle size={20} />, label: "Help & Support", path: "/Myaccount/Support" },
    { icon: <Settings size={20} />, label: "Settings", path: "/Myaccount/Settings" },
];

// --- Sub-Component: Sidebar Item (Using NavLink) ---

interface SidebarItemProps extends MenuItem { }

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, path }) => {

    return (
        <NavLink
            to={path}
            // NavLink automatically checks if the path matches the current URL
            className={({ isActive }) => `
 group flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all duration-300
${isActive
                    ? "bg-gradient-to-r from-cyan-400 to-teal-500 text-white shadow-lg"
                    : "text-gray-100 hover:bg-gradient-to-r hover:from-cyan-400/80 hover:to-teal-500/80 hover:shadow-xl"
                }
 `}
        >
            <span className="text-lg transition-transform duration-300">
                {icon}
            </span>
            <span className="text-sm font-medium transition-all duration-300">
                {label}
            </span>
        </NavLink>
    );
};

// --- Main Component: Sidebar ---

const Sidebar: React.FC = () => {

    const handleLogout = () => {
        console.log("Logout clicked");
        // Add actual logout logic/redirection here
    };

    return (
        <div
            className={`
w-[270px] min-w-[260px] 
 bg-gradient-to-b from-[#016A70] to-[#003366] text-white 
 flex flex-col items-center shadow-2xl rounded-xl fixed 

 `}
            style={{ fontFamily: 'Inter, sans-serif' }}
        >

            {/* 1. "My Account" Header Button */}
           

            {/* 2. 🧍 Profile Section */}
            <div className="flex flex-col items-center text-center w-full p-4 border-b border-white/20">
                <div className="relative">
                    <img
                        src="https://placehold.co/100x100/ffffff/003366?text=V"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <span className="absolute bottom-1 right-2 bg-white text-teal-700 p-1.5 rounded-full shadow-lg cursor-pointer transform transition-transform hover:scale-110">
                        <CreditCard size={14} />
                    </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold">Vanshita</h2>
                <p className="text-sm text-gray-200">SPN ID: API25XXXXX</p>
            </div>

            {/* 3. 📋 Menu Section */}
            <div className="mt-8 flex flex-col gap-4 w-[90%]">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        icon={item.icon}
                        label={item.label}
                        path={item.path}
                    />
                ))}
            </div>

            {/* 4. 🚪 Logout Button - Placed at the bottom */}
            <div className="mt-auto w-[90%] pt-6 mb-2">
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-[#FF5C5C] hover:bg-red-600 text-white font-semibold py-2.5 rounded-full w-full transition-all shadow-xl transform hover:scale-[1.02]"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;