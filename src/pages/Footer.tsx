import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white">

      {/* WAVE TOP */}
      <svg
        className="w-full h-24 -mb-1"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0c2f4a"
          d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      <div className="bg-gradient-to-b from-[#0c2f4a] to-[#0d7c89] px-8 md:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LEFT SECTION - ABOUT + SOCIAL */}
          <div className="space-y-4 max-w-sm text-sm">
            <p>
              Government Jobs Are A Top Choice For Indian Youth Due To Their 
              Security, Good Salaries, Perks, And The Chance To Serve The Nation.
              They Are Accessible To Candidates With Qualifications Ranging From 
              8th-Grade Education To Doctoral Degrees, Providing Opportunities For All.
            </p>

            <div className="flex gap-4 text-xl">
              <FaInstagram className="hover:text-[#ff8fab] cursor-pointer" />
              <FaTwitter className="hover:text-[#50b8ff] cursor-pointer" />
              <FaLinkedin className="hover:text-[#7ab3ff] cursor-pointer" />
              <FaYoutube className="hover:text-[#ff5959] cursor-pointer" />
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>FAQ’s</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* TERMS */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Terms</h3>
            <ul className="space-y-2 text-sm">
              <li>Terms And Conditions</li>
              <li>Terms of Acceptable Usage</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><FiMail /> support@example.com</li>
              <li className="flex items-center gap-3"><FiPhone /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><FiMapPin /> India</li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 max-w-lg">
          <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
          <p className="text-sm mb-4">
            Sign up for our newsletter and be the first to hear about offers, updates, and tips.
          </p>

          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 text-black outline-none"
            />
            <button className="px-6 bg-[#0d7c89] hover:bg-[#0a5560] transition">
              <FiMail className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="bg-[#09303d] py-3 text-center text-sm">
        ©2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
