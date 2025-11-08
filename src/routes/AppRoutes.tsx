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

                    {/* 🎯 PARENT ROUTE for My Account Section 
             Note: Using "/Myaccount" to match the paths defined in the sidebar 
             The trailing "/*" allows nested routes to work correctly. */}
                </Route>

                {/* Optional: Add a route for the simple MyAccount container if needed */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;