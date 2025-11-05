import React from "react";
import LandingNavbar from "../components/LandingNavbar";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Benjour Grocery & Alcohol</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Your one-stop shop for groceries and beverages, delivered fresh and fast.
        </p>
      </div>
    </div>
  );
};

export default Landing;
