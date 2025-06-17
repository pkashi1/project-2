import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/christopher-burns-8KfCR12oeUM-unsplash.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Construction <span className="text-secondary-400 dark:text-secondary-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 dark:text-primary-200 max-w-4xl mx-auto leading-relaxed">
            From precision directional boring to complete civil construction, we deliver expert solutions for all your infrastructure needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              interface IconProps { className?: string }
              const IconComponent =
                Icons[service.icon as keyof typeof Icons] as React.ComponentType<IconProps>;

              return (
                <div
                  key={service.id}
                  className="rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-2xl bg-white dark:bg-gray-800"
                >
                  {/* Header */}
                  <div className="bg-primary-50 dark:bg-gray-800 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {service.name}
                      </h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Key Features (same cream background) */}
                  <div className="bg-primary-50 dark:bg-gray-800 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-500" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process + CTA (white background) */}
                  <div className="bg-white dark:bg-gray-800 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Our Process
                    </h3>
                    <div className="space-y-2 mb-6">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                            <span className="text-primary-600 dark:text-primary-300 text-sm font-semibold">
                              {idx + 1}
                            </span>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center bg-primary-600 dark:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Southern Underground?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the construction industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center transition-colors">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600 dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Licensed &amp; Insured
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully licensed contractor with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            {/* …other three Why-Choose-Us cards… */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your construction or utility project. Our experts are standing by to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 dark:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white dark:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <Icons.Phone className="mr-2 w-5 h-5" />
              Call (225) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
