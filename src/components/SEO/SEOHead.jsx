import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const defaultTitle = "Cygnita Solutions - Web Development, Mobile Apps & AI Solutions";
  const defaultDescription = "Cygnita Solutions is a leading digital transformation company specializing in web development, mobile app development, and AI solutions. Transform your business with cutting-edge technology.";
  const defaultKeywords = "web development, mobile app development, AI development, digital solutions, software development, React, Node.js, Python, Swift, Kotlin, machine learning, artificial intelligence";
  const defaultOgImage = "https://cygnita.in/og-image.jpg"; // You'll need to create this image
  const baseUrl = "https://cygnita.in";

  const finalTitle = title ? `${title} | Cygnita Solutions` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Cygnita Solutions Private Limited" />
      <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Cygnita Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content="@cygnitasolutions" />
      <meta name="twitter:creator" content="@cygnitasolutions" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#019CF8" />
      <meta name="msapplication-TileColor" content="#019CF8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cygnita Solutions" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Helmet>
  );
};

export default SEOHead;
