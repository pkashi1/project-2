import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/common/CallToAction';
import {Certifications} from '../components/home/Certifications';
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
      <div className="h-2 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600" />
      <Certifications/>
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
    </div>
  );
};

export default Home;