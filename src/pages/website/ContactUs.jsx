import React, { lazy } from "react";
import Banner from "../../componets/website/Banner";
import ContactForm from "../../componets/common/ContactForm";
import SEOHead from "../../components/SEO/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "../../utils/structuredData";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://cygnita.in/" },
    { name: "Contact Us", url: "https://cygnita.in/contact-us" }
  ];

  const structuredData = [
    generateBreadcrumbSchema(breadcrumbs),
    generateLocalBusinessSchema()
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Get in Touch with Cygnita Solutions"
        description="Contact Cygnita Solutions for web development, mobile app development, and AI solutions. Located in Hardoi, UP. Call +91-9559098634 or email info@cygnitasolutions.com"
        keywords="contact Cygnita Solutions, web development contact, mobile app development contact, AI solutions contact, Hardoi UP, software development company contact"
        canonical="/contact-us"
        structuredData={structuredData}
      />
      <Banner page="Contact Us" />
      <ContactForm />
      <MapComponent />
    </>
  );
};

export default ContactUs;
