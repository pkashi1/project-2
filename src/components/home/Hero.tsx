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

// Interactive component for Why Southern Underground section
const WhySouthernUnderground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'safety' | 'experience' | 'expertise'>('experience');

  const experienceContent = {
    title: "Decades of Underground Expertise",
    description: "A trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface.",
    linkText: "View Our Projects",
    linkTo: "/projects"
  };

  const safetyContent = {
    title: "Uncompromising Safety Standards",
    description: "Safety and compliance are our top priorities. We are fully licensed and insured, ensuring that all our projects meet rigorous standards and regulations. Trust in a company committed to professionalism, accountability, and quality workmanship.",
    linkText: "Learn About Safety",
    linkTo: "/safety"
  };

  const expertiseContent = {
    title: "Comprehensive Underground Solutions",
    description: "From directional drilling and utility installation to deep foundations and civil construction, our expertise spans the full spectrum of underground infrastructure. We combine cutting-edge technology with proven methodologies to deliver exceptional results.",
    linkText: "Explore Services",
    linkTo: "/services"
  };

  const expertise = {
    title: "Our Expertise",
    description: "With over 35 years of experience, Southern Underground has established itself as a trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface.",
    linkText: "Learn about Services Projects",
    linkTo: "/services"
  };

  const stats = [
    { value: "35+", label: "Years of Experience" },
    { value: "99.9%", label: "Safety Record" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "800+", label: "Projects Completed" }
  ];

  return (
    <div className="text-white">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Southern Underground</span>?
        </h1>
      </div>

      {/* Three Sections Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Tabs */}
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab('experience')}
            className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-primary-600/20 border border-primary-500 text-white'
                : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/15'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-sm opacity-80">Decades of proven expertise</p>
          </button>
          
          <button
            onClick={() => setActiveTab('safety')}
            className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
              activeTab === 'safety'
                ? 'bg-primary-600/20 border border-primary-500 text-white'
                : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/15'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">Safety</h3>
            <p className="text-sm opacity-80">Uncompromising safety standards</p>
          </button>
          
          <button
            onClick={() => setActiveTab('expertise')}
            className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
              activeTab === 'expertise'
                ? 'bg-primary-600/20 border border-primary-500 text-white'
                : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/15'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-sm opacity-80">Comprehensive underground solutions</p>
          </button>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">{experienceContent.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">{experienceContent.description}</p>
                <Link
                  to={experienceContent.linkTo}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  {experienceContent.linkText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            )}
            
            {activeTab === 'safety' && (
              <motion.div
                key="safety"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">{safetyContent.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">{safetyContent.description}</p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary-400">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={safetyContent.linkTo}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  {safetyContent.linkText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            )}
            
            {activeTab === 'expertise' && (
              <motion.div
                key="expertise"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">{expertiseContent.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">{expertiseContent.description}</p>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Directional Drilling</h4>
                    <p className="text-sm text-gray-300">Precision trenchless drilling solutions</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Utility Installation</h4>
                    <p className="text-sm text-gray-300">Complete water, gas, and sewer systems</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Deep Foundations</h4>
                    <p className="text-sm text-gray-300">Structural foundation and piling solutions</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Civil Construction</h4>
                    <p className="text-sm text-gray-300">Infrastructure and site development</p>
                  </div>
                </div>
                
                <Link
                  to={expertiseContent.linkTo}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  {expertiseContent.linkText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

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
    id: 'Underground Tunneling',
    name: 'Underground Tunneling',
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
  <div className="relative z-10 h-full flex items-center justify-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="flex flex-col justify-center items-center text-center h-full py-20">
      {/* Centered Service Content */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight drop-shadow-2xl text-white">
              {currentService.name}
            </h1>

            {/* Quote/tagline */}
            <div className="relative">
              <span className="absolute -top-6 -left-8 text-primary-400/90 text-8xl leading-none select-none drop-shadow-xl">"</span>
              <span className="absolute -bottom-8 -right-8 text-primary-400/90 text-8xl leading-none select-none drop-shadow-xl">"</span>
              <p className="relative z-[1] text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium drop-shadow-2xl text-white px-12">
                {currentService.quote ||
                  `Trusted ${currentService.name.toLowerCase()} you can count on.`}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                to={`/services/${currentService.id}`}
                className="inline-flex items-center bg-primary-600/90 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-[1.05] shadow-2xl backdrop-blur-sm border border-white/20"
              >
                More about {currentService.name}
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
           {/* Services Navigation Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-6 border-b border-gray-300 dark:border-gray-700 pb-4">
      {services.map((service, index) => (
        <Link
          key={service.id}
          to={`/services/${service.id}`}
          className="text-lg font-semibold text-gray-800 dark:text-gray-200 relative group"
        >
          {service.name}
          {/* underline effect on hover and active state */}
          <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 transition-all duration-300 ${
            index === currentSlide ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
      ))}
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
          <WhySouthernUnderground />
        </div>
      </section>
    </div>
  );
};

export default Hero;