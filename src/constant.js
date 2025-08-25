import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.webp";
import aboutUsBanner from "./assets/images/about-us-banner.webp";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));
const Blogs = lazy(() => import("./pages/website/Blogs"));
const BlogDetails = lazy(() => import("./pages/website/BlogDetails"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  phone: "+91-9559098634",
  whatsapp: "919559098634",
  email: "info@cygnitasolutions.com",
  address: "Aloo Thoke Sandi Road, Hardoi, UP-241001",
  companyName: "Cygnita Solutions Private Limited",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blog",
    path: "/blogs",
    component: <Blogs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What services does Cygnita Solutions offer?",
    answer:
      "Cygnita Solutions specializes in three core services: Web Development (Full Stack), Mobile App Development, and AI Development. We create comprehensive digital solutions that drive business growth and enhance user experiences.",
  },
  {
    id: 2,
    question: "How long does it take to develop a website or mobile app?",
    answer:
      "Project timelines vary based on complexity and requirements. A simple website typically takes 4-6 weeks, while complex applications may require 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We believe in building long-term partnerships with our clients.",
  },
  {
    id: 4,
    question: "Can you work with existing systems and integrate them?",
    answer:
      "Absolutely! We specialize in integrating new solutions with existing systems and databases. Our team ensures seamless compatibility and smooth data migration.",
  },
  {
    id: 5,
    question: "What technologies do you use for development?",
    answer:
      "We use modern, industry-standard technologies including React, Node.js, Python, Swift, Kotlin, and various AI/ML frameworks. Our tech stack is chosen based on project requirements and scalability needs.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Transform your business with powerful e-commerce platforms that enhance customer engagement, optimize operations, and accelerate revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Create compelling social media websites that captivate your audience, foster community engagement, and strengthen brand loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Design high-converting landing pages that capture attention and drive action. Our tailored designs showcase your brand message and maximize conversion rates.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Build bespoke websites tailored to your unique business requirements. Our solutions combine creative design with powerful functionality for exceptional user experiences.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our expert developers utilize Swift and Objective-C to create powerful and efficient iOS applications. We optimize your app for exceptional performance, speed, and user experience.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We craft custom Android applications that perfectly align with your vision and business objectives. Our expertise in Java and Kotlin enables us to build robust and scalable apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Leverage Flutter's cross-platform capabilities to build apps for both iOS and Android with a single codebase. We implement smart strategies to overcome development challenges and deliver exceptional results.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We develop feature-rich hybrid applications customized to your business requirements. Our mobile solutions work seamlessly across iOS and Android platforms, maximizing your reach.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development (Full Stack)",
    desc: "Transform your digital presence with cutting-edge web solutions that drive business growth and user engagement.",
    detailContent:
      "At Cygnita Solutions, we deliver comprehensive full-stack web development services that encompass both frontend and backend infrastructure. Our expertise lies in creating secure, scalable, and high-performance web applications that operate seamlessly across all devices and platforms. With our AI-enhanced web solutions, we ensure optimal performance, enhanced user engagement, and robust security for every project—whether it's a corporate website, e-commerce platform, or complex web application.\n\n Our development process integrates modern technologies and best practices to deliver websites that not only look stunning but also provide exceptional functionality and user experience. We focus on creating responsive designs, optimizing for search engines, and implementing features that drive conversions and business success.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Create powerful mobile applications that connect with your audience and drive business success across iOS and Android platforms.",
    detailContent:
      "Cygnita Solutions specializes in developing innovative mobile applications that leverage artificial intelligence to deliver exceptional user experiences. Our development approach combines cutting-edge technology with user-centric design principles to create apps that are both functional and engaging.\n\n Whether you need an iOS app built with Swift or an Android application developed with Kotlin, our team ensures your app performs optimally, provides intuitive navigation, and delivers value to your users. We focus on creating apps that not only meet your business objectives but also adapt to evolving user needs and market trends. Our mobile solutions are designed to enhance productivity, improve user engagement, and contribute to your business growth in the increasingly mobile-first digital landscape.",
  },
  {
    id: 3,
    title: "AI Development",
    desc: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions for your business.",
    detailContent:
      "At Cygnita Solutions, we develop cutting-edge AI solutions that transform how businesses operate and interact with their customers. Our AI development services encompass machine learning models, natural language processing, computer vision, and intelligent automation systems.\n\n We create AI-powered applications that can analyze data, predict trends, automate repetitive tasks, and provide personalized experiences. Our solutions help businesses make data-driven decisions, improve operational efficiency, and gain competitive advantages in their respective industries. From chatbots and recommendation systems to predictive analytics and process automation, our AI development expertise enables businesses to leverage the full potential of artificial intelligence for growth and innovation.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
