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

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
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
            </div> */}

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
  );
};

export default Hero;