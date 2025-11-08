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
<<<<<<< HEAD
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
=======
import MyAccount from "../pages/Myaccount/MyAccount";
import ApplicationLayout from "../pages/Myaccount/ApplicationLayout"; // Import the layout

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 🌍 Public routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<UserLoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/upcoming-notifications" element={<UpcomingNotificationsPage />} />
                    <Route path="/Myaccount/*" element={<ApplicationLayout />} />
                <Route path="/my-account" element={<MyAccount />} />

                {/* 🔒 Protected/Authenticated Layout */}
                <Route element={<AppLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<RegistrationForm />} />
>>>>>>> d0ad77d95ea837c66d2acf026faf1027daaafc8b

                    {/* 🎯 PARENT ROUTE for My Account Section 
             Note: Using "/Myaccount" to match the paths defined in the sidebar 
             The trailing "/*" allows nested routes to work correctly. */}
                </Route>

<<<<<<< HEAD
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
=======
                {/* Optional: Add a route for the simple MyAccount container if needed */}
            </Routes>
        </BrowserRouter>
    );
>>>>>>> d0ad77d95ea837c66d2acf026faf1027daaafc8b
};

export default AppRoutes;