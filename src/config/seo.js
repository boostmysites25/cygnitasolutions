// SEO Configuration for Cygnita Solutions
// This file contains all the SEO metadata for different pages

export const seoConfig = {
  // Default SEO settings
  default: {
    title: "Cygnita Solutions - Web Development, Mobile Apps & AI Solutions",
    description: "Transform your business with Cygnita Solutions' cutting-edge web development, mobile app development, and AI solutions. Expert digital transformation services in India.",
    keywords: "web development, mobile app development, AI development, digital solutions, software development, React, Node.js, Python, Swift, Kotlin, machine learning, artificial intelligence, India",
    ogImage: "https://cygnita.in/og-image.jpg",
    canonical: "https://cygnita.in",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  // Home page
  home: {
    title: "Digital Solutions & Technology Services",
    description: "Transform your business with Cygnita Solutions' cutting-edge web development, mobile app development, and AI solutions. Expert digital transformation services in India.",
    keywords: "web development, mobile app development, AI solutions, digital transformation, software development, React, Node.js, Python, India",
    canonical: "https://cygnita.in/"
  },

  // Services page
  services: {
    title: "Our Services - Web Development, Mobile Apps & AI Solutions",
    description: "Explore our comprehensive digital solutions including web development, mobile app development, and AI development services. Transform your business with Cygnita Solutions.",
    keywords: "web development services, mobile app development, AI development, digital solutions, software development, React, Node.js, Python, Swift, Kotlin",
    canonical: "https://cygnita.in/services"
  },

  // About Us page
  about: {
    title: "About Us - Leading Digital Solutions Company",
    description: "Learn about Cygnita Solutions, a trusted digital transformation company in Hardoi, UP. We specialize in web development, mobile apps, and AI solutions with 15+ expert professionals.",
    keywords: "about Cygnita Solutions, digital transformation company, web development company, mobile app development, AI solutions, Hardoi UP, software development team",
    canonical: "https://cygnita.in/about-us"
  },

  // Contact Us page
  contact: {
    title: "Contact Us - Get in Touch with Cygnita Solutions",
    description: "Contact Cygnita Solutions for web development, mobile app development, and AI solutions. Located in Hardoi, UP. Call +91-9559098634 or email info@cygnitasolutions.com",
    keywords: "contact Cygnita Solutions, web development contact, mobile app development contact, AI solutions contact, Hardoi UP, software development company contact",
    canonical: "https://cygnita.in/contact-us"
  },

  // Blog listing page
  blogs: {
    title: "Blog - Latest Insights on Web Development, Mobile Apps & AI",
    description: "Stay updated with the latest trends in web development, mobile app development, and AI technology. Expert insights and best practices from Cygnita Solutions.",
    keywords: "web development blog, mobile app development, AI technology, software development insights, tech trends, programming tips",
    canonical: "https://cygnita.in/blogs",
    ogType: "website"
  },

  // Web Development landing page
  webDevelopment: {
    title: "Web Development Services - Custom Websites & Web Applications",
    description: "Professional web development services including custom websites, web applications, e-commerce platforms, and progressive web apps. Built with modern technologies.",
    keywords: "web development, custom websites, web applications, e-commerce, progressive web apps, React, Node.js, full-stack development",
    canonical: "https://cygnita.in/web-development"
  },

  // App Development landing page
  appDevelopment: {
    title: "Mobile App Development - iOS & Android Applications",
    description: "Expert mobile app development for iOS and Android platforms. Custom mobile applications built with native and cross-platform technologies.",
    keywords: "mobile app development, iOS development, Android development, React Native, Flutter, Swift, Kotlin, cross-platform apps",
    canonical: "https://cygnita.in/app-development"
  },

  // Individual blog posts
  blogPosts: {
    "future-web-development-trends-2024": {
      title: "The Future of Web Development: Trends to Watch in 2024",
      description: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks that are revolutionizing the digital landscape.",
      keywords: "web development trends 2024, AI in web development, progressive web apps, serverless architecture, WebAssembly",
      canonical: "https://cygnita.in/blog/future-web-development-trends-2024",
      ogType: "article"
    },
    "scalable-mobile-applications-best-practices": {
      title: "Building Scalable Mobile Applications: Best Practices",
      description: "Discover the essential best practices for creating scalable mobile applications that can grow with your business and handle increasing user demands.",
      keywords: "mobile app scalability, mobile app best practices, app architecture, performance optimization, mobile development",
      canonical: "https://cygnita.in/blog/scalable-mobile-applications-best-practices",
      ogType: "article"
    },
    "ai-modern-web-applications-guide": {
      title: "AI in Modern Web Applications: A Comprehensive Guide",
      description: "Learn how artificial intelligence is transforming web applications and how to integrate AI features to enhance user experience and functionality.",
      keywords: "AI web applications, machine learning, artificial intelligence, web development, AI integration",
      canonical: "https://cygnita.in/blog/ai-modern-web-applications-guide",
      ogType: "article"
    }
  }
};

// Company information for structured data
export const companyInfo = {
  name: "Cygnita Solutions Private Limited",
  url: "https://cygnita.in",
  logo: "https://cygnita.in/logo.png",
  description: "Leading digital transformation company specializing in web development, mobile app development, and AI solutions.",
  address: {
    streetAddress: "Aloo Thoke Sandi Road",
    addressLocality: "Hardoi",
    addressRegion: "UP",
    postalCode: "241001",
    addressCountry: "IN"
  },
  contact: {
    phone: "+91-9559098634",
    email: "info@cygnitasolutions.com",
    whatsapp: "919559098634"
  },
  social: {
    facebook: "https://www.facebook.com/cygnitasolutions",
    linkedin: "https://www.linkedin.com/company/cygnita-solutions",
    twitter: "https://twitter.com/cygnitasolutions"
  },
  foundingDate: "2022",
  numberOfEmployees: "15+",
  serviceArea: "India"
};

// Service categories for better SEO
export const serviceCategories = {
  webDevelopment: {
    name: "Web Development",
    description: "Full-stack web development services including custom websites, web applications, and e-commerce platforms.",
    keywords: ["React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL"]
  },
  mobileDevelopment: {
    name: "Mobile App Development",
    description: "Native and cross-platform mobile application development for iOS and Android platforms.",
    keywords: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Cross-platform"]
  },
  aiDevelopment: {
    name: "AI Development",
    description: "Artificial intelligence and machine learning solutions for business automation and insights.",
    keywords: ["Machine Learning", "AI", "Python", "TensorFlow", "PyTorch", "Natural Language Processing"]
  }
};
