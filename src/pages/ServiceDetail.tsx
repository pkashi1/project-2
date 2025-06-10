import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { services, projects } from '../data/mockData';
import * as Icons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-600 hover:text-primary-700">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;
  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-primary-600 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{service.name}</h1>
                  <p className="text-primary-600 font-medium text-lg">Expert Service</p>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {service.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Get Quote
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+12255550123"
                  className="inline-flex items-center border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={service.image}
                alt={service.name}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
                      {/* <p className="text-gray-600 text-sm">
                        Professional implementation with industry-leading standards and equipment.
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step}</h3>
                      {/* <p className="text-gray-600 text-sm">
                        Each step is carefully executed with attention to detail and quality control.
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Equipment & Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest technology and equipment to deliver superior results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State-of-the-Art Equipment</h3>
              <p className="text-gray-600">Modern machinery and tools for efficient, precise work</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.MapPin className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GPS Guidance Systems</h3>
              <p className="text-gray-600">Precision positioning and real-time tracking technology</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Monitoring</h3>
              <p className="text-gray-600">Advanced safety systems and real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Projects</h2>
              <p className="text-xl text-gray-600">
                See examples of our {service.name.toLowerCase()} work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      View Project Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started with {service.name}?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and detailed quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors"
            >
              Get Free Quote
              <Mail className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (225) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;