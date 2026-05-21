import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export default function SEO({
  title = "Epower Trading PLC - Industrial Machinery & Bakery Equipment in Ethiopia",
  description = "Your trusted supplier of industrial machinery, bakery equipment, agricultural machinery, and commercial cooking systems in Addis Ababa, Ethiopia.",
  keywords = "industrial machinery Ethiopia, bakery equipment, agricultural machinery, commercial cooking equipment, Epower Trading PLC",
  image = "/opengraph.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Epower Trading PLC",
  section,
}: SEOProps) {
  const siteTitle = "Epower Trading PLC";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  // Use the correct domain
  const baseUrl = "https://epower.youtopia.et";
  const currentUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : baseUrl;
  const currentImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={currentImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={currentImage} />
      
      {/* Article Specific (for blog/news pages) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}