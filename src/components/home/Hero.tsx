import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Drill,
  Hammer,
  Building,
  Layers,
  Wrench,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Interactive component for Why Southern Underground section
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

const WhySouthernUnderground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"safety" | "experience" | "expertise">("safety");

  const CONTENT: Record<
    "safety" | "experience" | "expertise",
    { title: string; body: string; cta: string; to: string }
  > = {
    safety: {
      title: "Safety",
      body:
        "Southern Underground is dedicated to the health and safety of our clients, employees, and surrounding communities. Our best-in-class program spans pre-task planning, JHAs, daily toolbox talks, and ongoing training and compliance.",
      cta: "About Safety",
      to: "/safety",
    },
    experience: {
      title: "Experience",
      body:
        "Decades delivering complex civil, utility, and deep foundation work. From HDD crossings and duct banks to drilled shafts and municipal infrastructure, our field-tested teams bring predictable, on-schedule outcomes.",
      cta: "See Project Experience",
      to: "/projects",
    },
    expertise: {
      title: "Versatility",
      body:
        "Full-spectrum underground solutions: directional drilling, utility installation, electrical duct banks, drainage, civil construction, and pipe fabrication—integrated planning, proven methods, and the right equipment for every scope.",
      cta: "Explore Services",
      to: "/services",
    },
  };

  const tabs: Array<"safety" | "experience" | "expertise"> = ["safety", "experience", "expertise"];
  const active = CONTENT[activeTab];

  return (
    <div className="relative min-h-[50vh] overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
        Why Southern Underground?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[50vh] py-12">
        {/* Left: Big text tabs (no cards) */}
        <nav className="lg:col-span-5">
          <ul className="space-y-6">
            {tabs.map((key) => {
              const isActive = key === activeTab;
              return (
                <li key={key} className="flex items-center">
                  <span
                    className={`mr-4 hidden md:inline-block transition-all ${
                      isActive ? "text-secondary-500" : "text-transparent"
                    }`}
                    aria-hidden
                  >
                    ▶
                  </span>

                  <button
                    onClick={() => setActiveTab(key)}
                    className={`text-left font-extrabold tracking-tight leading-none uppercase transition-colors
                      ${isActive ? "text-secondary-500" : "text-white/90 hover:text-white"}
                      text-4xl md:text-5xl`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {CONTENT[key].title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="lg:col-span-1 hidden lg:flex justify-center items-stretch">
          <div className="w-px bg-white/50 h-64" />
        </div>

        {/* Right: Description + CTA */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-gray-200/95 leading-relaxed">
                {active.body}
              </p>

              {/* underline CTA (no button box) */}
              <div className="mt-8">
                <Link
                  to={active.to}
                  className="group inline-flex items-center font-semibold text-secondary-500"
                >
                  <span className="underline underline-offset-4 decoration-secondary-500/30 group-hover:decoration-secondary-500 transition">
                    {active.cta}
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};



// New Hero Section Component
const NewHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage: 'url(/Deep%20Foundation/thumbnail_image002.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> 
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              {/* <h1 className="text-4xl font-bold text-gray-900">
                Building the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-secondary-400">
                  Foundations
                </span>{' '}
                of Tomorrow
              </h1> */}

              <div className="flex items-center mb-6">
                <img 
                  src="/Logos/Logo-black.png" 
                  alt="Southern Underground Badge Logo" 
                  className="h-16 md:h-24 w-auto object-contain -mt-6 md:-mt-20"
                />
                {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Building the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Foundations
                  </span>{' '}
                  of Tomorrow
                </h1> */}
              </div>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                A trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface. 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-500 text-white px-4 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
             
            </div>

            {/* Stats */}
            
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Licensed & Insured</h3>
              <p className="text-gray-300">
                Safety and compliance are our top priorities. We are fully licensed and insured, ensuring that all our projects meet rigorous standards and regulations. Trust in a company committed to professionalism, accountability, and quality workmanship.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Quality Guaranteed</h3>
              <p className="text-gray-300">
                We stand behind the quality of our work and take pride in delivering dependable, high-quality work on every project. Our team is committed to precision, safety, and lasting results—guaranteed.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">35+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">800+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">99.9%</div>
                <div className="text-gray-300 text-sm">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">98%</div>
                <div className="text-gray-300 text-sm">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Services Hero Section Component
const ServicesHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tabsWrapRef = React.useRef<HTMLDivElement | null>(null);

  const scrollTabsToActive = React.useCallback((index: number) => {
    const rail = tabsWrapRef.current;
    if (!rail) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;
    const perView = 2;
    const itemWidth = rail.clientWidth / perView;
    rail.scrollTo({ left: Math.max(0, index * itemWidth), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollTabsToActive(currentSlide);
  }, [currentSlide, scrollTabsToActive]);

  // UPDATED: CTA links now point to /services#<service-id>
  const services = [
    {
      id: 'drilling',
      name: 'DRILLING SERVICES',
      subtitle: 'SERVICES',
      icon: Drill,
      description:
        'Minimize disruption, maximize precision—HDD, jack & bore, and tunneling.',
      backgroundImage: '/Directional%20Drilling/down-net_http20250912-127-gh773e.jpg',
      ctaText: 'MORE ABOUT DRILLING SERVICES',
      ctaLink: '/services#directional-drilling', // ← updated
    },
    {
      id: 'deep-foundations',
      name: 'DEEP FOUNDATIONS',
      subtitle: 'SERVICES',
      icon: Hammer,
      description:
        'Drilled shafts, piles, and specialty supports for long-term stability.',
      backgroundImage: '/Deep%20Foundation/IMG_0415.jpg',
      ctaText: 'MORE ABOUT DEEP FOUNDATIONS',
      ctaLink: '/services#deep-foundation', // ← updated
    },
    {
      id: 'civil-construction',
      name: 'CIVIL CONSTRUCTION',
      subtitle: 'SERVICES',
      icon: Building,
      description:
        'From site prep to final grade—roads, concrete, drainage, and public works.',
      backgroundImage: '/Civil%20Construction/down-net_http20250911-109-uhtwxe.jpg',
      ctaText: 'MORE ABOUT CIVIL CONSTRUCTION',
      ctaLink: '/services#civil-construction', // ← updated
    },
    {
      id: 'utility-services',
      name: 'UTILITY SERVICES',
      subtitle: 'SERVICES',
      icon: Layers,
      description:
        'Water, sewer, gas, and electrical conduit systems installed and commissioned.',
      backgroundImage: '/Utilites/Water%20System%20Installation/down-net_http20250911-125-y4rprp.jpg',
      ctaText: 'MORE ABOUT UTILITY SERVICES',
      ctaLink: '/services#utility-installation', // ← updated
    },
    {
      id: 'drainage',
      name: 'DRAINAGE SERVICES',
      subtitle: 'SERVICES',
      icon: Wrench,
      description:
        'Comprehensive drainage solutions for municipal and commercial projects.',
      backgroundImage: '/Drainage/down-net_http20250911-137-o2qt0c.jpg',
      ctaText: 'MORE ABOUT DRAINAGE',
      ctaLink: '/services#drainage', // ← updated
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <div>
      {/* Services Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url('${currentService.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh] py-12">
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6"
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none">
                      {currentService.name}
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
                      {currentService.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        to={currentService.ctaLink}
                        className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {currentService.ctaText}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Service Tabs (mobile & desktop) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile rail */}
            <div
              ref={tabsWrapRef}
              className="md:hidden flex gap-0 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 -mx-4 px-4"
            >
              {services.map((service, index) => {
                const active = index === currentSlide;
                return (
                  <button
                    key={service.id}
                    onClick={() => setCurrentSlide(index)}
                    className="shrink-0 basis-1/2 snap-start pr-6 text-left"
                  >
                    <span
                      className={`relative text-lg font-semibold whitespace-nowrap ${
                        active ? 'text-primary-400' : 'text-gray-200'
                      }`}
                    >
                      {service.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 ${
                          active ? 'w-full' : 'w-0'
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop rail */}
            <div className="hidden md:flex flex-wrap justify-left gap-8 py-4">
              {services.map((service, index) => {
                const active = index === currentSlide;
                return (
                  <button
                    key={service.id}
                    onClick={() => setCurrentSlide(index)}
                    className="relative text-lg font-semibold whitespace-nowrap group"
                  >
                    <span className={active ? 'text-primary-400' : 'text-gray-200'}>
                      {service.name}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ right: 0 }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Southern Underground Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 filter grayscale"
          style={{ backgroundImage: `url('/Civil%20Construction/down-net_http20250911-122-4kanyl.jpg')` }}
        />

        {/* Gradient Overlay: bottom (dark) → top (lighter dark) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/90 to-gray-800/70" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhySouthernUnderground />
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Accelerate Your Career, Join a Winning Team
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Southern Underground invests in our people and our processes to enhance opportunities for growth.
            We're in this together. Come and join us!
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            See Careers
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Main Hero Component that combines both sections
const Hero: React.FC = () => {
  return (
    <div>
      {/* New Hero Section */}
      <NewHero />
      
      {/* Services Hero Section */}
      <ServicesHero />
    </div>
  );
};

export default Hero;

