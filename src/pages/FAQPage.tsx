import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import faq from "../assets/faq-img.png"

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("OTR");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["Website", "Securities", "OTR", "Payments", "Delivery"];

  // ✅ Example FAQ data
  const faqData: Record<string, { question: string; answer: string }[]> = {
    OTR: [
      {
        question: "What government positions are most frequently sought after in India?",
        answer:
          "The most common government jobs in India are that of an army officer, navy officer, air force officer, clerk and probationary officer.",
      },
      {
        question: "What advantages come with working for the government?",
        answer:
          "Government jobs offer job security, pension benefits, fixed working hours, and a stable income compared to most private sector jobs.",
      },
      {
        question: "What is the process for applying to a government position in India?",
        answer:
          "Most government job applications are submitted online through official recruitment portals like UPSC, SSC, or state PSC websites.",
      },
      {
        question: "How does the interview process for government positions typically unfold?",
        answer:
          "The interview process generally includes a written test followed by an interview or skill assessment based on the job category.",
      },
      {
        question: "What steps can I take to enhance my prospects of securing a government position?",
        answer:
          "Regularly follow official notifications, prepare using previous year question papers, and practice aptitude and general awareness daily.",
      },
      {
        question: "What kind of benefits do government jobs have?",
        answer:
          "Government employees enjoy health benefits, pension plans, paid leave, and housing allowances, among others.",
      },
      {
        question: "How can I prepare for government job interviews?",
        answer:
          "Focus on communication skills, current affairs, and job-specific knowledge. Practice mock interviews to gain confidence.",
      },
    ],
    Website: [
      { question: "How can I access the OTR website?", answer: "You can access it from the official portal or through mobile browsers easily." },
      { question: "Is the website available 24/7?", answer: "Yes, the website is available at all times except during maintenance hours." },
    ],
    Securities: [
      { question: "What are securities in government exams?", answer: "They refer to exam-related documents like admit cards, score sheets, and ID proofs." },
    ],
    Payments: [
      { question: "What payment methods are supported?", answer: "You can use credit cards, debit cards, UPI, or net banking for fee payments." },
    ],
    Delivery: [
      { question: "How are government letters or notices delivered?", answer: "Notices are usually sent through email or published on official websites." },
    ],
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (<>
        <Navbar />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#001F5C]">
        Frequently Asked <span className="text-[#00b8d9]">Questions</span>
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null);
            }}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#00b8d9] text-white border-[#00b8d9]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Left: Questions */}
        <div>
          {faqData[activeCategory].map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-3 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-800 font-medium">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#00b8d9]" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 pl-5 pr-2 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <img
            src={faq}
            alt="FAQ illustration"
            className="rounded-lg w-full h-full max-w-xs md:max-w-sm object-fit shadow-md"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQPage;
