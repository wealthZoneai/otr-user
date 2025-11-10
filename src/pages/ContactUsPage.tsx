import React from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/contact-us-img.jpg"; // ✅ Replace with your actual image
import Navbar from "../components/LandingNavbar";
import Footer from "../components/Footer";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-16 overflow-hidden bg-white">
        {/* ====== HEADING ====== */}
        <div className="text-center relative mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-[#002366] to-[#00b8d9] bg-clip-text text-transparent pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#00b8d9]">
            Contact us
          </h1>

          {/* Corner Accent (top-right) */}
          <span className="absolute top-0 right-[-25px] w-[20px] h-[20px] border-t-[3px] border-r-[3px] border-[#00b8d9] rounded-tr-md"></span>
        </div>

        {/* ====== BACKGROUND IMAGE ====== */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${contactBg})`,
            filter: "blur(1px)",
          }}
        ></div>

        {/* Transparent Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

        {/* ====== CONTACT CARD ====== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-gradient-to-r from-[#002366] to-[#00b8d9] rounded-full shadow-2xl w-[90%] max-w-3xl px-6 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
        >
          {/* Button */}
          <button className="bg-gradient-to-r from-[#002366] to-[#00b8d9] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300 w-full md:w-auto text-center">
            Contact Us
          </button>

          {/* Text */}
          <p className="text-white text-center md:text-left text-sm md:text-base leading-relaxed">
            Kindly provide information about your business; <br />
            we are ready to support you with Our solutions.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;
