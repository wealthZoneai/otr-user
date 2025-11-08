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
import HomeNotification from "../pages/Notification-section/HomeNotification";
import ApplicationStatus from "../pages/Notification-section/ApplicationStatus";

// ✅ Newly added pages
import AdmitCardReleasedPage from "../pages/AdmitCardReleasedPage";
import ResultPage from "../pages/ResultPage";

const AppRoutes: React.FC = () => {
  // ✅ Auth check (temporarily disabled for testing)
  // const isAuthenticated = localStorage.getItem("token");

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
          <Route path="/home-notifications" element={<HomeNotification />} />
          <Route path="/application-status" element={<ApplicationStatus />} />

          {/* ✅ Newly added routes */}
          <Route
            path="/admit-card-released"
            element={<AdmitCardReleasedPage />}
          />
          <Route path="/result-list" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
