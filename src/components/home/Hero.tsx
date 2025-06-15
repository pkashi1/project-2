import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Award, Clock, CheckCircle } from 'lucide-react';

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
        <div className="absolute inset-0 bg-navy-900/75 dark:bg-black/80 transition-colors duration-300" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-navy-500/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-secondary-400 font-semibold text-lg">Louisiana's Underground Construction Experts</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Professional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
                  Underground Utilities
                </span>{' '}
                & Foundation Services
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Serving Louisiana communities for over 20 years with licensed, insured professionals. 
                Complete underground construction solutions you can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+12255550123"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 group animate-pulse"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                24/7 Emergency Call
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-2xl font-bold text-white">Licensed</div>
                <div className="text-gray-300 text-sm">& Insured</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex justify-center mb-2">
                  <Phone className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-300 text-sm">Emergency</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-2xl font-bold text-white">Local</div>
                <div className="text-gray-300 text-sm">Louisiana Experts</div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Underground Utilities</h3>
                  <p className="text-gray-300">
                    Water lines, sewer systems, gas lines, and electrical underground installation with precision directional boring.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Foundation Services</h3>
                  <p className="text-gray-300">
                    Residential & commercial foundations, repairs, and excavation services for all construction needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Emergency Services</h3>
                  <p className="text-gray-300">
                    24/7 emergency repairs, leak detection, emergency excavation, and storm damage response.
                  </p>
                </div>
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

export default Hero;