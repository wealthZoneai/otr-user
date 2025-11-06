import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff, HiOutlinePhone } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Illustration from "../../assets/signup-vector-img.png"; 

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0f2d48] flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full bg-linear-to-b from-[#0f2d48] to-[#1a3a57] rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center text-white p-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Welcome to the <br /> Sign Up Page!
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed max-w-md">
            To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
          </p>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={Illustration}
            alt="Signup Illustration"
            className="w-72 md:w-80"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#214166]/60 backdrop-blur-xl p-8 md:p-12 text-white space-y-8">

          {/* Tabs */}
          <div className="flex justify-center gap-10 text-lg font-semibold">
            {/* <span className="cursor-pointer text-gray-300 hover:text-white">Login</span> */}
            <span className=" text-2xl pb-1 text-white cursor-pointer">Sign Up</span>
          </div>

          {/* FORM */}
          <div className="space-y-5">

            {/* Name */}
            <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
              <RiUserLine className="text-xl" />
              <input type="text" placeholder="Enter Your Name" className="bg-transparent outline-none w-full text-white placeholder-gray-300" />
            </div>

            {/* Email with OTP */}
            <div className="flex gap-2">
              <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3 w-full">
                <HiOutlineMail className="text-xl" />
                <input type="email" placeholder="Enter Your Email" className="bg-transparent outline-none w-full text-white placeholder-gray-300" />
              </div>
              <button className="text-xs bg-green-500 px-3 rounded-md hover:bg-green-600">Send OTP</button>
            </div>

            <input type="text" placeholder="Enter Your Email OTP" className="w-full bg-transparent border border-gray-300/60 rounded-md px-3 py-3 text-white placeholder-gray-300" />

            {/* Mobile with OTP */}
            <div className="flex gap-2">
              <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3 w-full">
                <HiOutlinePhone className="text-xl" />
                <input type="text" placeholder="Enter Your Mobile Number" className="bg-transparent outline-none w-full text-white placeholder-gray-300" />
              </div>
              <button className="text-xs bg-green-500 px-3 rounded-md hover:bg-green-600">Send OTP</button>
            </div>

            <input type="text" placeholder="Enter Your Mobile OTP" className="w-full bg-transparent border border-gray-300/60 rounded-md px-3 py-3 text-white placeholder-gray-300" />

            {/* Qualification */}
            <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
              <FaUserGraduate className="text-xl" />
              <select className="bg-transparent outline-none w-full text-white">
                <option className="text-black">Choose your Qualification</option>
                <option className="text-black">Graduate</option>
                <option className="text-black">Post Graduate</option>
                <option className="text-black">Other</option>
              </select>
            </div>

            {/* Interest */}
            <select className="w-full bg-transparent border border-gray-300/60 rounded-md px-3 py-3 text-white outline-none">
              <option className="text-black">Choose your Interest</option>
              <option className="text-black">Software</option>
              <option className="text-black">Hardware</option>
              <option className="text-black">Management</option>
            </select>

            {/* Password */}
            <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
              <HiOutlineLockClosed className="text-xl" />
              <input type={showPassword ? "text" : "password"} placeholder="Create your Password" className="bg-transparent outline-none w-full text-white placeholder-gray-300" />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="flex items-center gap-3 border border-gray-300/60 rounded-md px-3 py-3">
              <HiOutlineLockClosed className="text-xl" />
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your Password" className="bg-transparent outline-none w-full text-white placeholder-gray-300" />
              <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="accent-green-400" /> I Agree To The User Agreement And Privacy Policy
            </label>

            {/* SIGN UP BUTTON */}
            <button onClick={() => navigate("/login")} className="w-full py-3 rounded-md font-semibold bg-green-500 hover:bg-green-600 transition">
              Sign Up
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
