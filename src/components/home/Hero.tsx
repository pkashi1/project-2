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
  MoveRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Services data
  const services = [
    {
      id: 'directional-drilling',
      name: 'Directional Drilling',
      icon: Drill,
      description: 'Trenchless HDD for conduits and pipelines with minimal surface disruption.',
      features: [
        'Road/rail/waterway crossings',
        'Bore path engineering',
        'Multi-duct installations'
      ],
      backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
    },
    {
      id: 'utility-installation',
      name: 'Utility Installation',
      icon: Layers,
      description: 'End-to-end water, gas, and sewer installations with testing and restoration.',
      features: [
        'Water & service connections',
        'Gas mains & regulators',
        'Sewer mains, manholes, lift stations'
      ],
      backgroundImage: '/images/di-F1MlxlEpaOk-unsplash.jpg'
    },
    {
      id: 'underground-electrical',
      name: 'Underground Electrical Conduit',
      icon: Zap,
      description: 'Primary/secondary conduits, duct banks, vaults, and trenchless crossings.',
      features: [
        'Duct banks & risers',
        'Handholes, pull boxes, vaults',
        'Mandrel & pull-string testing'
      ],
      backgroundImage: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'
    },
    {
      id: 'deep-foundation',
      name: 'Deep Foundation',
      icon: Hammer,
      description: 'Drilled shafts, piles, and specialty supports for heavy structures.',
      features: [
        'Drilled shafts & rock sockets',
        'Helical & micro-piles, underpinning',
        'Static/dynamic load testing (CSL/TIP)'
      ],
      backgroundImage: '/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg'
    },
    {
      id: 'civil-construction',
      name: 'Civil Construction',
      icon: Building,
      description: 'Full-scope sitework, roadway, structural concrete, and public infrastructure.',
      features: [
        'Site prep & earthwork',
        'Roadway & pavement',
        'Drainage & erosion control'
      ],
      backgroundImage: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg'
    },
    {
      id: 'drainage',
      name: 'Drainage',
      icon: Droplets,
      description: 'Storm drains, culverts, inlets, open-channel works, and restoration.',
      features: [
        'Culverts & storm mains',
        'Catch basins & junction boxes',
        'Cleaning, inspection, CCTV'
      ],
      backgroundImage: '/images/fleur-dQf7RZhMOJU-unsplash.jpg'
    },
    {
      id: 'pipe-fabrication',
      name: 'Pipe Fabrication',
      icon: Wrench,
      description: 'Custom cutting, welding, coating, and spool assemblies with QC/NDT.',
      features: [
        'Cutting & beveling',
        'MIG/TIG/SMAW + NDT',
        'Coatings & insulation'
      ],
      backgroundImage: '/images/di-F1MlxlEpaOk-unsplash.jpg'
    },
    {
      id: 'jack-and-bore',
      name: 'Jack & Bore / Underground Tunneling',
      icon: MoveRight,
      description: 'Steel casing jacked under roads/rails with carrier pipe pullback.',
      features: [
        'Bore pits & shoring',
        'Alignment & grade control',
        'Carrier pipe installation'
      ],
      backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentSlide];
  const IconComponent = currentService.icon;

  return (
    <div>
      {/* Services Slideshow Section - Top */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Full Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('${currentService.backgroundImage}')`
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Header */}
              <div className="text-left flex flex-col justify-center min-h-[400px] pl-4">
                <motion.h2 
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8"
                >
                  Our <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-primary-400"
                  >Services</motion.span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg"
                >
                  Trenchless drilling, utilities, deep foundations, civil works, and more—delivered with precision and safety.
                </motion.p>
              </div>

              {/* Right Side - Services Content */}
              <div className="relative">
                {/* Main Content Display */}
                <div className="relative mb-6">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="relative"
                    >
                      {/* Content Container */}
                      <div className="text-white space-y-6 bg-black/20 backdrop-blur-sm rounded-xl p-10 border border-white/20">
                        <div className="space-y-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-center">{currentService.name}</h3>
                        </div>
                        
                        <p className="text-lg text-white/95 text-center leading-relaxed">
                          {currentService.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white/95 text-center">Key Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {currentService.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="flex items-center text-sm text-white/90 px-2 py-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 shadow-sm flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center mt-8">
                          <Link
                            to={`/services/${currentService.id}`}
                            className="inline-flex items-center bg-primary-600/80 hover:bg-primary-600 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group border border-primary-500/30 shadow-lg"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section - Bottom */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br overflow-hidden mt-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/images/road-construction.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-secondary-500/10 dark:bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white dark:text-gray-100">
                  Strength Below the Surface. {' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Deep Solutions. Strong Foundations.
                  </span>{' '}
                  
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 dark:text-gray-300 leading-relaxed max-w-2xl">
                  A trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">35+</div>
                  <div className="text-gray-300 dark:text-gray-400 text-sm">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">99.9%</div>
                  <div className="text-gray-300 dark:text-gray-400 text-sm">Safety Record</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">98%</div>
                  <div className="text-gray-300 dark:text-gray-400 text-sm">Client Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">800+</div>
                  <div className="text-gray-300 dark:text-gray-400 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Licensed & Insured</h3>
                <p className="text-gray-300 dark:text-gray-400">
                  Safety and compliance are our top priorities. We are fully licensed and insured, ensuring that all our projects meet rigorous standards and regulations. Trust in a company committed to professionalism, accountability, and quality workmanship.
                </p>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Emergency Service</h3>
                <p className="text-gray-300 dark:text-gray-400">
                  Trusted 24/7 Response for select municipal emergency services
                </p>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Quality Guaranteed</h3>
                <p className="text-gray-300 dark:text-gray-400">
                  We stand behind the quality of our work and take pride in delivering dependable, high-quality work on every project. Our team is committed to precision, safety, and lasting results—guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 dark:border-gray-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 dark:bg-gray-300/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;