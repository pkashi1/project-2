import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Drill,
  Zap,
  Hammer,
  Building,
  Droplets,
  Layers,
  Wrench,
  MoveRight,
  Quote,
  Shield,
  Award,
  Clock,
  Users
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



const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // refs to control the horizontal scroll on mobile
const tabsWrapRef = React.useRef<HTMLDivElement | null>(null);

// helper: scroll the tab rail so the active item is visible on mobile
const scrollTabsToActive = React.useCallback((index: number) => {
  const rail = tabsWrapRef.current;
  if (!rail) return;

  // only do this below md breakpoint
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (!isMobile) return;

  // each item is 50% width on mobile, so compute scrollLeft
  const perView = 2; // two tabs visible
  const itemWidth = rail.clientWidth / perView;
  rail.scrollTo({
    left: Math.max(0, index * itemWidth),
    behavior: 'smooth',
  });
}, []);

// keep the rail synced when currentSlide changes
useEffect(() => {
  scrollTabsToActive(currentSlide);
}, [currentSlide, scrollTabsToActive]);

  // Services data inspired by Moore USA's service categories
  const services = [
    {
    id: 'drilling',
    name: 'DRILLING SERVICES',
    subtitle: 'SERVICES',
    icon: Drill,
    description:
      'Minimize disruption, maximize precision—HDD, jack & bore, and tunneling.',
    backgroundImage: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg',
    ctaText: 'MORE ABOUT DRILLING SERVICES',
    ctaLink: '/services/directional-drilling',
  },
  {
    id: 'deep-foundations',
    name: 'DEEP FOUNDATIONS',
    subtitle: 'SERVICES',
    icon: Hammer,
    description:
      'Drilled shafts, piles, and specialty supports for long-term stability.',
    backgroundImage: '/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
    ctaText: 'MORE ABOUT DEEP FOUNDATIONS',
    ctaLink: '/services/deep-foundation',
  },
  {
    id: 'civil-construction',
    name: 'CIVIL CONSTRUCTION',
    subtitle: 'SERVICES',
    icon: Building,
    description:
      'From site prep to final grade—roads, concrete, drainage, and public works.',
    backgroundImage: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg',
    ctaText: 'MORE ABOUT CIVIL CONSTRUCTION',
    ctaLink: '/services/civil-construction',
  },
  {
    id: 'utility-services',
    name: 'UTILITY SERVICES',
    subtitle: 'SERVICES',
    icon: Layers,
    description:
      'Water, sewer, gas, and electrical conduit systems installed and commissioned.',
    backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg',
    ctaText: 'MORE ABOUT UTILITY SERVICES',
    ctaLink: '/services/utility-installation',
  },
  {
    id: 'pipe-fabrication',
    name: 'PIPE FABRICATION SERVICES',
    subtitle: 'SERVICES',
    icon: Wrench,
    description:
      'Custom cutting, welding, coatings, and certified assemblies—ready for field install.',
    // Replace with your shop image if you have one
    backgroundImage: '/images/di-F1MlxlEpaOk-unsplash.jpg',
    ctaText: 'MORE ABOUT PIPE FABRICATION',
    ctaLink: '/services/pipe-fabrication',
  },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <div>
      {/* Main Hero Section - Inspired by Moore USA */}
           {/* Main Hero Section - Inspired by Moore USA */}
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
              {/* Service Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none">
                {currentService.name}
              </h1>

              {/* Description */}
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

  {/* Service Tabs (underline style, like Moore) */}
  {/* Service Tabs (mobile: 2-per-view slider; desktop: inline tabs) */}
<div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Mobile rail (≤ md): horizontal slider, 2 items per view */}
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

    {/* Desktop rail (≥ md): centered inline tabs, no scrolling */}
    <div className="hidden md:flex flex-wrap justify-center gap-8 py-4">
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
    style={{ backgroundImage: `url('/images/pexels-ywanphoto-188679.jpg')` }}
  />

  {/* Gradient Overlay: bottom (dark) → top (lighter dark) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/90 to-gray-800/70" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <WhySouthernUnderground />
  </div>
</section>


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

export default Hero;

