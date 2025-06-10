import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/common/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;