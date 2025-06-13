import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br overflow-hidden">
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
  <div className="absolute inset-0 bg-black/60" />
</div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Building the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-secondary-400">
                  Foundations
                </span>{' '}
                of Tomorrow
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Offering Civil Construction, Utility Installation, and Directional Boring Services Throughout the United States.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">9+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">1,200+</div>
                <div className="text-gray-300 text-sm">Miles Installed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">99.9%</div>
                <div className="text-gray-300 text-sm">Safety Record</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Licensed & Insured</h3>
              <p className="text-gray-300">
                Fully licensed contractor with comprehensive insurance coverage for all projects.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-300">
                24-hour emergency response for important infrastructure problems.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Quality Guaranteed</h3>
              <p className="text-gray-300">
                Providing Outstanding Outcomes and Outstanding Client Contentment in Baton Rouge and Louisiana
              </p>
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

export default Hero;