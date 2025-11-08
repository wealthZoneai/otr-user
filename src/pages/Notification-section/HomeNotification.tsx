import React, { useState } from "react";
import { Bell, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import upscLogo from "../../assets/upsc.png";
import sscLogo from "../../assets/ssc.png";

const NotificationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Applied History");
  const navigate = useNavigate();

  // ✅ Applied History + Results Notifications
  const notifications = [
    {
      id: 1,
      logo: upscLogo,
      title: "Applied UPSC Application Successfully",
      date: "2024-06-11, 16:05:35",
      link: "/application-status",
      type: "Applied History",
    },
    {
      id: 2,
      logo: sscLogo,
      title: "Applied SSC GD Application Successfully",
      date: "2024-06-11, 16:05:35",
      link: "/application-status",
      type: "Applied History",
    },
  ];

  // ✅ Admit Card dummy data
  const admitCards = [
    {
      id: 1,
      title: "SSC GD Admit Card Released - 2024",
      appliedDate: "Jan 15, 2024",
      releaseDate: "Mar 15, 2024",
      link: "#",
    },
    {
      id: 2,
      title: "DRDO Admit Card Released - 2024",
      appliedDate: "Jan 15, 2024",
      releaseDate: "Mar 15, 2024",
      link: "#",
    },
  ];

  // ✅ Result dummy data
  const results = [
    {
      id: 1,
      examName: "SSC Constable GD 2023 Tentative Answer Key",
      releaseDate: "10-04-2024",
      link: "#",
    },
    {
      id: 2,
      examName: "Assistant Foreman 2024 CBT Revised Final Answer Key",
      releaseDate: "24-05-2024",
      link: "#",
    },
    {
      id: 3,
      examName: "Group I Services 2023 Screening Test Final Key",
      releaseDate: "Coming Soon",
      link: "#",
    },
    {
      id: 4,
      examName:
        "Assistant Director, Block Agriculture Officer & Other 2024 Written Exam Revised Final Answer Key",
      releaseDate: "14-05-2024",
      link: "#",
    },
  ];

  // ✅ Header titles
  const headerTitleMap: Record<string, string> = {
    "Applied History": "All Notifications",
    "Admit Card Release": "Admit Card Released List",
    Results: "Result",
  };

  const headerTitle = headerTitleMap[activeTab] || "Notifications";

  return (
    <section className="px-3 md:px-16 py-5 bg-white min-h-screen">
      {/* ✅ Header */}
      <div className="w-full bg-[#0B0B79] flex justify-center items-center py-4 mb-4 rounded-3xl shadow-md">
        <div className="flex items-center gap-3 text-white">
          <Bell size={24} />
          <h2 className="text-2xl font-semibold underline underline-offset-4">
            {headerTitle}
          </h2>
        </div>
      </div>

      {/* ✅ Tabs */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {["Applied History", "Admit Card Release", "Results"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md border text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-[#001F5C] text-white border-[#001F5C]"
                : "bg-white border-gray-400 text-[#001F5C] hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Conditional Rendering */}
      {activeTab === "Admit Card Release" ? (
        // ====================================
        // 🎟️ ADMIT CARD RELEASE LIST PAGE
        // ====================================
        <div className="space-y-6">
          {admitCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col md:flex-row justify-between items-center border border-gray-300 rounded-2xl p-5 shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              <div className="w-full md:w-2/3">
                <h3 className="text-lg md:text-xl font-semibold text-[#001F5C] mb-2">
                  {card.title}
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">
                      Admit Card Delivery Applied Date:
                    </span>{" "}
                    {card.appliedDate}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Admit Card Released Date:
                    </span>{" "}
                    {card.releaseDate}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-[2px] bg-gray-300 mx-4"></div>

              <div className="w-full md:w-auto mt-4 md:mt-0">
                <button
                  className="bg-gradient-to-r from-[#001F5C] to-[#0038A8] text-white px-6 py-2 rounded-md font-medium shadow hover:opacity-90 transition w-full md:w-auto"
                >
                  View Admit Card
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : activeTab === "Results" ? (
        // ====================================
        // 🧾 RESULTS TABLE PAGE
        // ====================================
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#0B0B79] text-white text-sm md:text-base">
                <th className="border border-gray-300 py-2 px-3 text-left">
                  S.No
                </th>
                <th className="border border-gray-300 py-2 px-3 text-left">
                  Name of Exam
                </th>
                <th className="border border-gray-300 py-2 px-3 text-left">
                  Exam Release Date
                </th>
                <th className="border border-gray-300 py-2 px-3 text-center">
                  Get Result
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr
                  key={res.id}
                  className="text-sm md:text-base bg-white hover:bg-gray-100 transition"
                >
                  <td className="border border-gray-300 py-2 px-3 text-center font-medium">
                    {index + 1}.
                  </td>
                  <td className="border border-gray-300 py-2 px-3 text-gray-800">
                    {res.examName}
                  </td>
                  <td className="border border-gray-300 py-2 px-3 text-gray-600">
                    {res.releaseDate}
                  </td>
                  <td className="border border-gray-300 py-2 px-3 text-center">
                    <a
                      href={res.link}
                      target=""
                      rel="noopener noreferrer"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Click here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // ====================================
        // 🔔 DEFAULT (APPLIED HISTORY)
        // ====================================
        <>
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={n.logo}
                      alt="logo"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {n.title}
                      </h3>
                      <p className="text-sm text-gray-500">{n.date}</p>
                      <button
                        onClick={() => navigate(n.link)}
                        className="text-[#0047AB] text-sm font-semibold hover:underline"
                      >
                        Check Status Of Your Application
                      </button>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-red-500 transition">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No notifications available for <b>{activeTab}</b>.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default NotificationSection;
