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
        <title>Southern Underground | Louisiana Construction Compa</title>
        {/* <title>Directional Boring & Underground Utilities - Southern Underground of Louisiana</title> */}

        <meta
          name="description"
          content="Southern Underground provides directional boring, utility installation and civil construction services across Louisiana."
        />
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