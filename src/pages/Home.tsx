import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Southern Underground | Louisiana Construction Company</title>
        <meta
          name="description"
          content="Southern Underground provides directional drilling, utility installation and civil construction services across Louisiana."
        />
      </Helmet>
      <Hero />
      <FeaturedProjects />
      {/* <Testimonials /> */}
      <CallToAction />
    </div>
  );
};

export default Home;