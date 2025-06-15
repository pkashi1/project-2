import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
            <span className="text-secondary-400 font-semibold">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Louisiana's Most Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
              Underground Experts
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Get a free consultation from Louisiana's leading underground construction experts. 
            We're here to bring your vision to life with precision and professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 group"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Now: (225) 555-0123
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">24/7 Emergency Service</div>
                <div className="text-gray-300">Available when you need us most</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Licensed & Insured</div>
                <div className="text-gray-300">Full protection for your project</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Free Estimates</div>
                <div className="text-gray-300">No obligation consultations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;