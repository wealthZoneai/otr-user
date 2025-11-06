import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import RegistrationForm from "../pages/RegistrationSteps/RegistrationForm";
import AppLayout from "../layouts/AppLayout";
import NotificationsPage from "../pages/NotificationsPage";
import UpcomingNotificationsPage from "../pages/UpcomingNotificationsPage";

const AppRoutes: React.FC = () => {
  // Temporarily disable token check for testing
  const isAuthenticated = true; // ✅ always true for now

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/upcoming-notifications" element={<UpcomingNotificationsPage />} />

        {/* Protected routes (now always accessible) */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
