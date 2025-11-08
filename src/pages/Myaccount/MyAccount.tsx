import React from "react";
import Sidebar from "./Sidebar";
import HomeNavbar from "../../components/HomeNavbar";

const MyAccount: React.FC = () => {
  return (
    <>
    <HomeNavbar/>
    <div className="  flex pt-16">
      
      {/* Sidebar on left */}
      <div className=" p-2 ">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="  w-full p-2 rounded-xl roun">
      
      </div>
    </div>
    </>
  );
};

export default MyAccount;
