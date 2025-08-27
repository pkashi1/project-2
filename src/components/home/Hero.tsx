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
  Quote
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
    backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg',
    quote: "Trenchless crossings with precision and minimal disruption.",
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
    backgroundImage: '/images/di-F1MlxlEpaOk-unsplash.jpg',
    quote: "Reliable utility systems built to last.",
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
    backgroundImage: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg',
    quote: "Power delivered safely, efficiently, and underground.",
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
    backgroundImage: '/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
    quote: "Strength from the ground up with proven foundations.",
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
    backgroundImage: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg',
    quote: "Complete civil solutions—delivered on time, every time.",
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
    backgroundImage: '/images/fleur-dQf7RZhMOJU-unsplash.jpg',
    quote: "Smart drainage systems for resilient infrastructure.",
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
    backgroundImage: '/images/di-F1MlxlEpaOk-unsplash.jpg',
    quote: "Custom pipe solutions engineered for performance.",
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
    backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg',
    quote: "Safe, accurate tunneling beneath any challenge.",
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
      <section className="relative min-h-[80vh] overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
    style={{ backgroundImage: `url('${currentService.backgroundImage}')` }}
  />
  {/* Readability overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
  <div className="relative z-10 h-full flex items-center">
  <div className="max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
      
      {/* Left: section heading */}
      {/* <div className="flex flex-col justify-center h-full space-y-8 text-white">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white dark:text-gray-100">
            Strength Below the Surface.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Deep Solutions. Strong Foundations.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 dark:text-gray-300 leading-relaxed">
            A trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface.
          </p>
        </div>
      </div> */}

      {/* Right: text overlay */}
      <div className="flex flex-col justify-center h-full relative text-white">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight drop-shadow-2xl">
              {currentService.name}
            </h3>

            {/* Quote/tagline */}
            <div className="mt-8 relative">
              <span className="absolute -top-8 -left-4 text-primary-400/90 text-9xl leading-none select-none drop-shadow-xl">"</span>
              <span className="absolute -bottom-12 -right-6 text-primary-400/90 text-9xl leading-none select-none drop-shadow-xl">"</span>
              <p className="relative z-[1] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-medium drop-shadow-2xl">
                {currentService.quote ||
                  `Trusted ${currentService.name.toLowerCase()} you can count on.`}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                to={`/services/${currentService.id}`}
                className="inline-flex items-center bg-primary-600/90 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-[1.05] shadow-2xl backdrop-blur-sm border border-white/20"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  </div>
</div>

</section>

      {/* Services Navigation Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our comprehensive range of underground construction and foundation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-primary-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
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