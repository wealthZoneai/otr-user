import React, { useRef } from "react";
import { motion } from "framer-motion";

interface JobCategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSubTab: string;
  setActiveSubTab: (tab: string) => void;
}

const JobCategoryTabs: React.FC<JobCategoryTabsProps> = ({
  activeCategory,
  setActiveCategory,
  activeSubTab,
  setActiveSubTab,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    "All India Jobs",
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

  const subTabs = ["Syllabus", "PQP", "Answer Key", "Results", "Cut-Off"];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#1a237e]">
        Job Categories
      </h2>

      {/* 🔹 Scrollable Category Tabs */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-3 pb-2"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileTap={{ scale: 0.95 }}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-[#1a237e] text-white border-[#1a237e]"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="border-t border-gray-200 my-5"></div>

      {/* 🔹 Sub Tabs */}
      <div className="flex justify-center flex-wrap gap-8 mb-2">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`relative text-sm font-medium transition ${
              activeSubTab === tab
                ? "text-[#1a237e] font-semibold"
                : "text-gray-600 hover:text-[#1a237e]"
            }`}
          >
            {tab}
            {activeSubTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#1a237e] rounded-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryTabs;
