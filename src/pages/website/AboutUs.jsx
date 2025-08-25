import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";
import SEOHead from "../../components/SEO/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "../../utils/structuredData";

const AboutUs = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://cygnita.in/" },
    { name: "About Us", url: "https://cygnita.in/about-us" }
  ];

  const structuredData = [
    generateBreadcrumbSchema(breadcrumbs),
    generateLocalBusinessSchema()
  ];

  return (
    <>
      <SEOHead
        title="About Us - Leading Digital Solutions Company"
        description="Learn about Cygnita Solutions, a trusted digital transformation company in Hardoi, UP. We specialize in web development, mobile apps, and AI solutions with 15+ expert professionals."
        keywords="about Cygnita Solutions, digital transformation company, web development company, mobile app development, AI solutions, Hardoi UP, software development team"
        canonical="/about-us"
        structuredData={structuredData}
      />
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-center h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Excellence in Digital Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We start with a thorough analysis of your business needs, challenges, and objectives to deliver tailored solutions that drive real results.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Expertise in Modern Technologies
                  </h6>
                  <p className="desc mt-2">
                    Our team at Cygnita Solutions consists of highly skilled professionals, each specializing in their respective domains—including web development, mobile applications, artificial intelligence, and emerging technologies. We leverage our extensive expertise to create exceptional, customized solutions that perfectly align with your business needs and objectives.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Expertise in AI and Emerging Technologies"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    At Cygnita Solutions, we prioritize deeply understanding your unique objectives and challenges. Through our collaborative process, we actively listen at each phase and adapt to meet your specific requirements. Our commitment to working closely with you enables us to develop innovative solutions that not only meet but consistently exceed your expectations, helping your business thrive in today's competitive marketplace.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Comprehensive Digital Services
                  </h6>
                  <p className="desc mt-2">
                    Our diverse portfolio of services positions us as your complete partner for digital transformation, enabling you to streamline operations and focus on growth while we expertly manage every aspect of your technological journey. With Cygnita Solutions, you can confidently navigate the complexities of the digital landscape.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Comprehensive Digital Services"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Security and Reliability"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Security and Reliability
                  </h6>
                  <p className="desc mt-2">
                    At Cygnita Solutions, we recognize that security is essential in today's interconnected digital world. Our solutions are meticulously developed with advanced security protocols and robust safeguards to protect your data, applications, and systems from evolving cyber threats.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Quality
                  </h6>
                  <p className="desc mt-2">
                    At Cygnita Solutions, we take great pride in delivering exceptional, high-quality solutions that not only meet but exceed the highest industry standards. Our unwavering commitment to performance, reliability, and seamless integration ensures that every solution we deliver is meticulously crafted to help your business thrive in the dynamic digital marketplace.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="Commitment to Quality"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnlockEfficiency />
      <OurServices length={3} />
      {/* <Testimonials /> */}
    </>
  );
};

export default AboutUs;
