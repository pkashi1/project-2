import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Underground Construction & Foundation Services | Southern Underground Louisiana</title>
        <meta
          name="description"
          content="Professional underground construction, utilities installation, and foundation services in Louisiana. Licensed contractors with 20+ years experience. Emergency services available."
        />
        <meta name="keywords" content="underground construction, utilities installation, foundation services, directional boring, Louisiana contractors, emergency services" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Southern Underground of Louisiana",
            "description": "Professional underground construction, utilities installation, and foundation services in Louisiana",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4922 Rankin Street",
              "addressLocality": "Zachary",
              "addressRegion": "LA",
              "postalCode": "70791",
              "addressCountry": "US"
            },
            "telephone": "+12255550123",
            "email": "info@southernunderground.com",
            "url": "https://southernunderground.com",
            "areaServed": "Louisiana",
            "serviceType": ["Underground Construction", "Utilities Installation", "Foundation Services", "Directional Boring", "Emergency Services"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Underground Utilities Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Services"
                  }
                }
              ]
            },
            "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;