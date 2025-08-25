import React from "react";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
// import Testimonials from "../../componets/common/Testimonials";
import Banner from "../../componets/website/Banner";
import SEOHead from "../../components/SEO/SEOHead";
import { generateBreadcrumbSchema } from "../../utils/structuredData";

const Services = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://cygnita.in/" },
    { name: "Services", url: "https://cygnita.in/services" }
  ];

  return (
    <>
      <SEOHead
        title="Our Services - Web Development, Mobile Apps & AI Solutions"
        description="Explore our comprehensive digital solutions including web development, mobile app development, and AI development services. Transform your business with Cygnita Solutions."
        keywords="web development services, mobile app development, AI development, digital solutions, software development, React, Node.js, Python, Swift, Kotlin"
        canonical="/services"
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />
      <Banner page="Services" />
      <OurServices />
      <UnlockEfficiency />
      {/* <Testimonials /> */}
    </>
  );
};

export default Services;
