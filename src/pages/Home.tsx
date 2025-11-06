import React from "react";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-10 text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-[#002366]">
          Welcome to the Home Page!
        </h1>
        <p className="text-gray-600 mt-4">
          This is your dashboard after login.
        </p>
      </main>

     
      
    </div>
  );
};

export default Home;
