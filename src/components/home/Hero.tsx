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

  // Services data inspired by Moore USA's service categories
  const services = [
    {
      id: 'underground-utilities',
      name: 'UNDERGROUND UTILITIES',
      subtitle: 'SERVICES',
      icon: Layers,
      description: 'From Beyond the Surface to its Core, Our Infrastructure is Built to Connect and Endure',
      features: [
        'Water & Sewer Systems',
        'Gas Distribution Networks',
        'Electrical Conduit Systems'
      ],
      backgroundImage: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg',
      ctaText: 'MORE ABOUT UNDERGROUND UTILITIES',
      ctaLink: '/services/utility-installation',
      categories: [
        { name: 'Directional Drilling', number: '1' },
        { name: 'Utility Installation', number: '2' },
        { name: 'Underground Electrical', number: '3' },
        { name: 'Pipe Fabrication', number: '4' }
      ]
    },
    {
      id: 'foundation-services',
      name: 'FOUNDATION',
      subtitle: 'SERVICES',
      icon: Hammer,
      description: 'From Ground Level to Bedrock, Our Foundations are Built to Support and Sustain',
      features: [
        'Deep Foundation Systems',
        'Drilled Shafts & Piles',
        'Structural Support Solutions'
      ],
      backgroundImage: '/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
      ctaText: 'MORE ABOUT FOUNDATION SERVICES',
      ctaLink: '/services/deep-foundation',
      categories: [
        { name: 'Deep Foundation', number: '1' },
        { name: 'Drilled Shafts', number: '2' },
        { name: 'Pile Installation', number: '3' },
        { name: 'Load Testing', number: '4' }
      ]
    },
    {
      id: 'civil-construction',
      name: 'CIVIL CONSTRUCTION',
      subtitle: 'SERVICES',
      icon: Building,
      description: 'From Site Preparation to Final Grade, Our Infrastructure is Built to Last and Perform',
      features: [
        'Site Development',
        'Roadway Construction',
        'Drainage Systems'
      ],
      backgroundImage: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg',
      ctaText: 'MORE ABOUT CIVIL CONSTRUCTION',
      ctaLink: '/services/civil-construction',
      categories: [
        { name: 'Civil Construction', number: '1' },
        { name: 'Drainage', number: '2' },
        { name: 'Site Development', number: '3' },
        { name: 'Roadway Work', number: '4' }
      ]
    },
    {
      id: 'trenchless-technology',
      name: 'TRENCHLESS TECHNOLOGY',
      subtitle: 'SERVICES',
      icon: Drill,
      description: 'From Surface to Subsurface, Our Technology is Built to Minimize Disruption and Maximize Precision',
      features: [
        'Horizontal Directional Drilling',
        'Jack & Bore Operations',
        'Underground Tunneling'
      ],
      backgroundImage: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg',
      ctaText: 'MORE ABOUT TRENCHLESS TECHNOLOGY',
      ctaLink: '/services/directional-drilling',
      categories: [
        { name: 'Directional Drilling', number: '1' },
        { name: 'Jack & Bore', number: '2' },
        { name: 'Underground Tunneling', number: '3' },
        { name: 'Pipe Bursting', number: '4' }
      ]
    }
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
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url('${currentService.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
              
              {/* Left Content - Main Hero Text */}
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
                    {/* Service Name - Large Bold Text like Moore USA */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none">
                      {currentService.name}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-400 tracking-wide">
                      {currentService.subtitle}
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
                      {currentService.description}
                    </p>

                    {/* CTA Button - Moore USA Style */}
                    <div className="pt-8">
                      <Link
                        to={currentService.ctaLink}
                        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-2xl border-2 border-red-600 hover:border-red-500"
                      >
                        {currentService.ctaText}
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Content - Service Categories */}
              
              {/* <div className="lg:col-span-4 space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`categories-${currentSlide}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="space-y-4"
                  >
                    {currentService.categories.map((category, index) => (
                      <div
                        key={category.name}
                        className="group relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 hover:bg-black/60 transition-all duration-300 cursor-pointer"
                        style={{
                          borderLeft: `4px solid ${
                            index === 0 ? '#e91e63' : 
                            index === 1 ? '#00bcd4' : 
                            index === 2 ? '#e91e63' : 
                            '#9c27b0'
                          }`
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-lg group-hover:text-primary-300 transition-colors">
                              {category.name}
                            </h3>
                          </div>
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{
                              backgroundColor: index === 0 ? '#e91e63' : 
                                             index === 1 ? '#00bcd4' : 
                                             index === 2 ? '#e91e63' : 
                                             '#9c27b0'
                            }}
                          >
                            {category.number}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
               */}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Southern Underground Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhySouthernUnderground />
        </div>
      </section>

      {/* Company Values Section */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LOUISIANA GRIT. <span className="text-primary-600">NATIONWIDE CAPABILITY.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Established in 2015, Southern Underground is a trusted construction and utility partner to municipalities, 
              developers, and industrial clients across the Gulf South. Our dynamic teams of highly skilled professionals 
              and comprehensive capabilities create unique versatility that allows us to deliver custom-tailored solutions 
              for each client and project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Safety First</h3>
              <p className="text-gray-600 dark:text-gray-300">Uncompromising commitment to safety in every project phase</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">Delivering superior results that exceed industry standards</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">On-Time Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">Reliable project completion within schedule and budget</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Skilled professionals with decades of combined experience</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NATIONALLY RECOGNIZED.
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-light">
            Humbly Grounded.
          </p>
        </div>
      </section> */}

      {/* <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want More Career Options?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Southern Underground invests in our people and our processes to enhance opportunities for growth. 
            We're in this together. Come and join us!
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-xl"
          >
            See Careers
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;

