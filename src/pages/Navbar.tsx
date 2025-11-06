import { FiHome, FiBell, FiUser } from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-gradient-to-r from-[#0c2f4a] via-[#0e7a88] to-[#11b6a6] text-white">
      
      {/* LEFT SIDE: LOGO + Admit Card */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">LOGO</h1>

        <button className="flex items-center gap-2 bg-[#A7F3D0] text-[#0b1b37] font-medium px-4 py-2 rounded-lg hover:opacity-90 transition">
          <HiOutlineDownload className="text-lg" />
          Admit Card
        </button>
      </div>

      {/* CENTER NAV LINKS */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <button className="flex flex-col items-center gap-1 hover:opacity-80">
          <FiHome className="text-2xl" />
          <span>Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:opacity-80">
          <FiBell className="text-2xl" />
          <span>Notifications</span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:opacity-80">
          <BiRocket className="text-2xl" />
          <span>Tracking</span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:opacity-80">
          <LuCalendarDays className="text-2xl" />
          <span>Upcoming Jobs</span>
        </button>
      </div>

      {/* RIGHT SIDE: OTR Button + Profile */}
      <div className="flex items-center gap-6">
        <button className="bg-gradient-to-r from-[#edf7c8] to-[#c4e0de] text-[#0b1b37] font-semibold px-6 py-2 rounded-2xl hover:opacity-90 transition">
          OTR
        </button>

        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
          <FiUser className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
