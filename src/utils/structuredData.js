// Structured Data (JSON-LD) generators for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cygnita Solutions Private Limited",
  "url": "https://cygnita.in",
  "logo": "https://cygnita.in/logo.png",
  "description": "Leading digital transformation company specializing in web development, mobile app development, and AI solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aloo Thoke Sandi Road",
    "addressLocality": "Hardoi",
    "addressRegion": "UP",
    "postalCode": "241001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9559098634",
    "contactType": "customer service",
    "email": "info@cygnitasolutions.com"
  },
  "sameAs": [
    "https://www.facebook.com/cygnitasolutions",
    "https://www.linkedin.com/company/cygnita-solutions",
    "https://twitter.com/cygnitasolutions"
  ],
  "foundingDate": "2022",
  "numberOfEmployees": "15+",
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  }
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cygnita Solutions",
  "url": "https://cygnita.in",
  "description": "Professional web development, mobile app development, and AI solutions company",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cygnita.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Cygnita Solutions Private Limited"
  },
  "serviceType": "Digital Solutions",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
});

export const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.image,
  "author": {
    "@type": "Organization",
    "name": "Cygnita Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cygnita Solutions Private Limited",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cygnita.in/logo.png"
    }
  },
  "datePublished": article.date,
  "dateModified": article.date,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://cygnita.in/blog/${article.slug}`
  },
  "articleSection": article.category,
  "keywords": article.tags?.join(", ") || ""
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cygnita Solutions Private Limited",
  "description": "Professional web development, mobile app development, and AI solutions company in Hardoi, UP",
  "url": "https://cygnita.in",
  "telephone": "+91-9559098634",
  "email": "info@cygnitasolutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aloo Thoke Sandi Road",
    "addressLocality": "Hardoi",
    "addressRegion": "UP",
    "postalCode": "241001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.4167",
    "longitude": "80.1167"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  }
});
