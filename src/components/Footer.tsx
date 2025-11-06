import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import waveBg from "../assets/wave.png"; // ✅ your background image

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${waveBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <p className="text-sm text-gray-100 leading-relaxed mb-6">
            Government Jobs Are A Top Choice For Indian Youth Due To Their
            Security, Good Salaries, Perks, And The Chance To Serve The Nation.
            They Are Accessible To Candidates With Qualifications Ranging From
            8th-Grade Education To Doctoral Degrees, Providing Opportunities For
            All.
          </p>
          <div className="flex gap-3 text-xl">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-[#f5f5f5] rounded-md text-[#E4405F] hover:opacity-80 transition"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-[#f5f5f5] rounded-md text-[#0077B5] hover:opacity-80 transition"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-[#f5f5f5] rounded-md text-[#1DA1F2] hover:opacity-80 transition"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-[#f5f5f5] rounded-md text-[#FF0000] hover:opacity-80 transition"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <span className="block w-10 h-[2px] bg-yellow-300 mb-4"></span>
          <ul className="space-y-2 text-gray-100">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 FAQ’s
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Terms Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Terms</h3>
          <span className="block w-10 h-[2px] bg-yellow-300 mb-4"></span>
          <ul className="space-y-2 text-gray-100">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Terms And Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Terms Of Acceptable Usage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                 Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <span className="block w-10 h-[2px] bg-yellow-300 mb-4"></span>

          <ul className="space-y-3 text-gray-100">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-300" /> support@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-300" /> Odisha, India
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">Stay Connected</h4>
            <p className="text-sm mb-3 text-gray-100">
              Sign up for our newsletter and be the first to hear about offers,
              updates, and tips.
            </p>
            <div className="flex items-stretch bg-white rounded-md overflow-hidden max-w-sm shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-black outline-none text-sm"
              />
              <button className="bg-[#002366] px-5 flex items-center justify-center text-white hover:bg-[#0044aa] transition">
                <FaEnvelope className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto border-t border-white/40"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-white py-4">
        ©2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
