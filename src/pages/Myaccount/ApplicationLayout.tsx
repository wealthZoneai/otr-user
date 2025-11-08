import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
import MyAccountPQP from "./MyAccountPQP";
import Refer from "./Refer";
import Support from "./Support";
import Wallet from "./Wallet";
import HomeNavbar from "../../components/HomeNavbar";

import Jobs from "./jobs";
import OtrForm from "./OtrForm";

// Placeholder components
const OTRForm: React.FC = () => (
  <div className="p-4 text-center text-xl font-semibold">OTR Form Content</div>
);

const ApplicationLayout: React.FC = () => {
  return (
    <>
      {/* 🔝 Top Navbar */}
      <HomeNavbar />

      {/* ⚙️ Main Flex Layout */}
      <div className="flex pt-16 bg-gray-100 ">
        {/* 📂 Sidebar */}
        <div className="w-[260px] p-2 ">
          <Sidebar />
        </div>

        {/* 📄 Content Area */}
        <div className="flex-1 bg-gray-50  pl-6 p-3 ">
        

          {/* Routes */}
          <main>
            <Routes>
              {/* Default route */}
              <Route path="/" element={<Navigate to="Wallet" replace />} />

              {/* Page Routes */}
              <Route path="Wallet" element={<Wallet />} />
              <Route path="otr-form" element={<OtrForm />} />
              <Route path="MyAccountPQP" element={<MyAccountPQP />} />
              <Route path="SavedJobs" element={<Jobs />} />
              <Route path="Refer" element={<Refer />} />
              <Route path="Support" element={<Support />} />
              <Route path="Settings" element={<Settings />} />

              {/* 404 Fallback */}
              <Route
                path="*"
                element={
                  <div className="text-center p-10 text-gray-500">
                    404 – Page Not Found
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default ApplicationLayout;
