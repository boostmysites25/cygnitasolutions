import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/common/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import SEOHead from "../../components/SEO/SEOHead";
import { generateOrganizationSchema, generateWebSiteSchema } from "../../utils/structuredData";

const Home = () => {
  const structuredData = [
    generateOrganizationSchema(),
    generateWebSiteSchema()
  ];

  return (
    <>
      <SEOHead
        title="Digital Solutions & Technology Services"
        description="Transform your business with Cygnita Solutions' cutting-edge web development, mobile app development, and AI solutions. Expert digital transformation services in India."
        keywords="web development, mobile app development, AI solutions, digital transformation, software development, React, Node.js, Python, India"
        canonical="/"
        structuredData={structuredData}
      />
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Digital Solutions
            </div>
            <h1 className="heading-1">Welcome to <br /> Cygnita Solutions</h1>
            <p className="text-2xl">Transforming Ideas Into Digital Reality!</p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">Empowering Businesses Through Digital Innovation</h2>
              <p className="desc">
                At Cygnita Solutions, we are dedicated to transforming businesses through innovative digital solutions. Our expertise spans web development, mobile applications, and artificial intelligence, enabling us to create comprehensive solutions that drive growth and efficiency. We believe in building partnerships that extend beyond traditional client relationships, focusing on long-term success and sustainable business transformation.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#4a62ec] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Trusted Digital Partner for Your Business Growth
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At Cygnita Solutions, we understand that successful digital transformation requires more than just technical expertise. Our approach focuses on understanding your business goals and creating solutions that align with your vision. We maintain the highest standards of quality, security, and performance while delivering innovative solutions that help you stay ahead in the competitive digital landscape.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
