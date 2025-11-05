import React from "react";
import HomeNavbar from "../components/HomeNavbar";

const Home: React.FC = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
        <p className="text-gray-600 mt-4">
          This is your dashboard after login.
        </p>
      </div>
    </div>
  );
};

export default Home;
