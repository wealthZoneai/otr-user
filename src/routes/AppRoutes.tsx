import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import RegistrationForm from "../pages/RegistrationSteps/RegistrationForm";
import AppLayout from "../layouts/AppLayout";
import NotificationsPage from "../pages/Notification-section/NotificationsPage";
import UpcomingNotificationsPage from "../pages/Notification-section/UpcomingNotificationsPage";
import UserLoginForm from "../pages/auth/LoginForm";
import SignUpForm from "../pages/auth/SignUpForm";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  // ✅ Auth check temporarily disabled for testing
  // const isAuthenticated = localStorage.getItem("token");

  // Later you can re-enable it easily like this:
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<UserLoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route
          path="/upcoming-notifications"
          element={<UpcomingNotificationsPage />}
        />

        {/* 🔒 Protected routes (accessible for now) */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
