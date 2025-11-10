import React from "react";
import Navbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import Banner from "../assets/aboutus-banner.jpg";
import Img1 from "../assets/about-1.jpg"
import Img2 from "../assets/about-2.jpg"
import Img3 from "../assets/about-3.jpg"

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#F9F9F9] mt-1 text-gray-800">
        {/* Banner Section */}
        <div className="relative h-[60vh] rounded-2xl w-full overflow-hidden">
          <img
            src={Banner}
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 border-b-4 border-white">
              About Us
            </h1>
          </div>
        </div>

        {/* Company Description */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
          <p className="text-justify leading-relaxed text-[1.05rem]">
            <span className="font-semibold">Maawaabro IT Solutions Pvt Ltd</span> is a leading IT
            solution provider based in Guntur, Andhra Pradesh, India. Our
            passion for public sector job seekers shines through in our dedicated
            services. Our platform is carefully crafted to be your top
            destination for accessing government job opportunities with ease. We
            take pride in providing timely job alerts, simplifying the
            application process, and offering extensive support to our
            applicants. With in-depth knowledge of government positions, our
            team is committed to being a reliable partner for individuals seeking
            to make a meaningful impact through public service.
          </p>
        </section>

        {/* Vision Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Vision :</h2>
            <p className="text-[1.05rem] leading-relaxed mb-4">
              Maawaabro IT Solutions Pvt Ltd envisions leveraging technology to
              revolutionize job search, ensuring tailored opportunities for all
              and driving professional fulfillment and societal progress.
            </p>
            <p className="text-[1.05rem] leading-relaxed">
              Our long-term vision includes becoming a global benchmark in
              digital employment services. We aim to bridge the gap between
              technology and human potential by creating intelligent systems that
              understand the evolving needs of both candidates and organizations.
              We believe in a future where technology empowers everyone to find
              the right opportunities seamlessly and efficiently.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={Img1}
                alt="Team Work"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img2}
                alt="Collaboration"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img3}
                alt="Office Meeting"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Banner}
                alt="Creative Discussion"
                className="rounded-2xl object-cover w-48 h-48"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={Img1}
                alt="Brainstorming"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img2}
                alt="Team Meeting"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img3}
                alt="Presentation"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Banner}
                alt="Discussion"
                className="rounded-2xl object-cover w-48 h-48"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Mission :</h2>
            <p className="text-[1.05rem] leading-relaxed mb-4">
              Maawaabro IT Solutions Pvt Ltd aims to empower job seekers and
              employers by bridging talent and opportunity. Our platform offers
              insights and matches based on industry trends, salary benchmarks,
              and cultural fit. Powered by AI and analytics, we provide a
              comprehensive career ecosystem for mutual growth and success.
            </p>
            <p className="text-[1.05rem] leading-relaxed">
              Our mission extends to promoting inclusive hiring practices,
              upskilling candidates, and enabling companies to discover potential
              that aligns with their values. We strive to integrate innovation,
              human understanding, and accessibility in our services so that every
              career journey is impactful and rewarding.
            </p>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Future Goals</h2>
            <p className="text-[1.05rem] leading-relaxed mb-4">
              Maawaabro IT Solutions Pvt Ltd aims to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[1.05rem] mb-4">
              <li>
                Innovate by investing in research and development for
                cutting-edge AI technology.
              </li>
              <li>
                Expand globally in the employment services industry strategically.
              </li>
              <li>
                Educate job seekers and collaborate with institutions, industry
                leaders, and policymakers for a supportive employment landscape.
              </li>
            </ul>
            <p className="text-[1.05rem] leading-relaxed">
              Additionally, we aim to foster partnerships with global enterprises,
              educational institutions, and governments to strengthen workforce
              readiness. Our future roadmap emphasizes building sustainable tech
              ecosystems that nurture innovation, growth, and inclusivity.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={Img1}
                alt="Growth Discussion"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img2}
                alt="Innovation Team"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Img3}
                alt="Planning"
                className="rounded-2xl object-cover w-48 h-48"
              />
              <img
                src={Banner}
                alt="Strategy"
                className="rounded-2xl object-cover w-48 h-48"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
