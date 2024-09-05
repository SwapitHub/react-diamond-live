import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const MetaTags = ({
  title,
  description,
  keywords,
  favicon,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageWidth,
  ogImageHeight
}) => {
  useEffect(() => {
    // Update the document title
    if (title) {
      document.title = title;
    }

    // Update the favicon
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      faviconLink.setAttribute('href', favicon || '');
    } else {
      const newFaviconLink = document.createElement('link');
      newFaviconLink.rel = 'icon';
      newFaviconLink.href = favicon || '';
      document.head.appendChild(newFaviconLink);
    }

    // Update the meta description tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || '');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description || '';
      document.head.appendChild(newMetaDescription);
    }

    // Update the meta keywords tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || '');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords || '';
      document.head.appendChild(newMetaKeywords);
    }

    // Update the Open Graph tags
    const updateMetaTag = (property, content) => {
      const metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content || '');
      } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('property', property);
        newMetaTag.setAttribute('content', content || '');
        document.head.appendChild(newMetaTag);
      }
    };

    updateMetaTag('og:title', ogTitle);
    updateMetaTag('og:description', ogDescription);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:image:width', ogImageWidth);
    updateMetaTag('og:image:height', ogImageHeight);

    // Cleanup function to reset meta tags
    return () => {
      if (title) {
        document.title = 'Default Title'; // Set to your default title
      }
      if (description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', ''); // Reset to default description if needed
        }
      }
      if (keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', ''); // Reset to default keywords if needed
        }
      }
      if (favicon) {
        const faviconLink = document.querySelector('link[rel="icon"]');
        if (faviconLink) {
          faviconLink.setAttribute('href', ''); // Reset to default favicon if needed
        }
      }
      ['og:title', 'og:description', 'og:image', 'og:image:width', 'og:image:height'].forEach(property => {
        const metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', ''); // Reset to default content if needed
        }
      });
    };
  }, [title, description, keywords, favicon, ogTitle, ogDescription, ogImage, ogImageWidth, ogImageHeight]);

  return null; // This component does not render anything to the DOM
};

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  favicon: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.string,
  ogImageHeight: PropTypes.string
};

export default MetaTags;
