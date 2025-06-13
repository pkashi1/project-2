import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-16">
    {/* Hero Section */}
    <section className="relative py-20 text-white">
      {/* Background Image with Overlay */}
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url(/images/christopher-burns-8KfCR12oeUM-unsplash.jpg)',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" /> {/* Changed to black with 50% opacity */}
</div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Comprehensive Construction <span className="text-secondary-400">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
          From precision directional boring to complete civil construction, we deliver 
          expert solutions for all your infrastructure needs
        </p>
      </div>
    </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              // First, define an interface for the icon props
              interface IconProps {
                className?: string;
              }

              // Then modify your mapping line to include the proper typing
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<IconProps>;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  {/* Service Header */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                        {/* <p className="text-primary-600 font-medium">Professional Service</p> */}
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process Overview */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h3>
                        <div className="space-y-2">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-primary-600 text-sm font-semibold">{idx + 1}</span>
                              </div>
                              <span className="text-gray-600">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-6 border-t border-gray-100">
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Southern Underground?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed contractor with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Clock className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Time Delivery</h3>
              <p className="text-gray-600">
                We understand deadlines matter. Our projects are completed on schedule, every time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Every project is backed by our commitment to superior quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your construction or utility project. 
            Our experts are standing by to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors"
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