import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Illustration from "../../assets/login-vector-img.png";
import { loginUser } from "../../services/apiHelpers";
import { setUserData } from "../../store/slice/userData";

// ----------------------
// ✅ Type Definitions
// ----------------------
interface LoginFormValues {
  email: string;
  password: string;
  role: string;
}

// ----------------------
// ✅ Component
// ----------------------
const UserLoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ----------------------
  // ✅ Validation Schema
  // ----------------------
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  // ----------------------
  // ✅ Formik Setup
  // ----------------------
  const formik = useFormik<LoginFormValues>({
    initialValues: { email: "", password: "", role: "Admin" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      navigate("/home");
      try {
        const response = await loginUser({
          email: values.email,
          password: values.password,
        });

        if (response?.data?.jwtToken) {
          localStorage.setItem("token", response.data.jwtToken);

          dispatch(
            setUserData({
              token: response.data.jwtToken,
              userId: response.data.userId,
              userName: response.data.userName,
            })
          );

          toast.success("Login successful!");
          navigate("/home");
        } else {
          toast.error("Login failed. Token not received.");
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            "Login failed. Please check your credentials."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleClick = () => {
    navigate("/signup");
  };

  // ----------------------
  // ✅ JSX
  // ----------------------
  return (
    <div className="min-h-screen w-full bg-[#0f2d48] flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full bg-gradient-to-b from-[#0f2d48] to-[#1a3a57] rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center items-center text-white py-10 px-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
          >
            Welcome to the Login Page!
          </motion.h2>

          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={Illustration}
            alt="Login Illustration"
            className="w-72 md:w-80"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#214166] bg-opacity-50 backdrop-blur-xl flex flex-col p-8 md:p-12 text-white">
          {/* Tabs */}
          <div className="flex space-x-10 mb-8 text-lg font-semibold justify-center">
            <span className="border-white text-2xl font-bold pb-1 cursor-pointer">
              Login
            </span>
          </div>

          {/* FORM */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
                <HiOutlineMail className="text-xl text-gray-200" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email or Phone Number"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-400 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
                <HiOutlineLockClosed className="text-xl text-gray-200" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <HiOutlineEyeOff className="text-gray-200" />
                  ) : (
                    <HiOutlineEye className="text-gray-200" />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-400 text-sm">{formik.errors.password}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-400" />
                Remember
              </label>
              <span className="cursor-pointer text-gray-300 hover:text-white">
                Forgot Password?
              </span>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-[#3568a8] to-[#49c1a9] hover:opacity-90 transition"
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-sm text-center text-gray-300">
              Don’t have an account?{" "}
              <span
                onClick={handleClick}
                className="text-green-300 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
