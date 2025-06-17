import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { enhancedServices, projects } from '../data/mockData';
import * as Icons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = enhancedServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Service Not Found
          </h1>
          <Link
            to="/services"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
  const relatedProjects = projects.filter(p =>
    p.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <Link
              to="/services"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 dark:from-gray-800 to-secondary-50 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-primary-600 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {service.name}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary-600 dark:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                >
                  Get Quote
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+12255550123"
                  className="inline-flex items-center border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors"
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
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Service Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Our Process
              </h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300">
                {service.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(project => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow transition-colors"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;
