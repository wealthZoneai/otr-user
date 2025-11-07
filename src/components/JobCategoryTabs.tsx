import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const JobCategoryTabs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    "All India Govt. Jobs",
    "State Govt. Jobs",
    "Bank Jobs",
    "Teaching Jobs",
    "Engineering Jobs",
    "Railway Jobs",
    "Police Jobs",
    "Defence Jobs",
    "PSU Jobs",
    "Clerk Jobs",
  ];

  // 🔹 Scroll function — 3 categories at a time
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth / 3;
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-4">
      {/* 🔹 Top Category Tabs with Scroll */}
      <div className="flex items-center justify-between relative">
        {/* Left Scroll Button (Rectangular) */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 h-full px-2 bg-[#001F5C] text-white hover:bg-[#003399] transition duration-200 hidden md:flex items-center justify-center"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Scrollable Category Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-2 mx-8 scroll-smooth"
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md flex-shrink-0 ${
                cat === "State Govt. Jobs"
                  ? "bg-[#008080] text-white"
                  : "bg-[#001F5C] text-white hover:bg-[#003399]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Scroll Button (Rectangular) */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute rounded-xl right-0 z-10 h-full  px-2 bg-[#001F5C] text-white hover:bg-[#003399] transition duration-200 hidden md:flex items-center justify-center"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* 🔹 Bottom Sub Tabs */}
      <div className="flex justify-center gap-10 text-sm font-medium text-gray-800">
        <span className="cursor-pointer hover:text-[#001F5C] font-semibold underline underline-offset-4">
          Syllabus
        </span>
        <span className="cursor-pointer hover:text-[#001F5C]">PQP</span>
        <span className="cursor-pointer hover:text-[#001F5C]">Answer Key</span>
        <span className="cursor-pointer hover:text-[#001F5C]">Results</span>
        <span className="cursor-pointer hover:text-[#001F5C]">Cut-Off</span>
      </div>
    </div>
  );
};

export default JobCategoryTabs;
