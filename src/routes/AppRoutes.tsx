import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import RegistrationForm from "../pages/RegistrationSteps/RegistrationForm";
import UserLoginForm from "../pages/LoginForm";
import SignUpForm from "../pages/SignUpForm";
import Navbar from "../pages/Navbar";

const AppRoutes: React.FC = () => {
// const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<UserLoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Navbar />} />
        

        {/* Protected route */}
        {/* <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        /> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
