import React from 'react';
import { Link } from 'react-router-dom';
import { Drill, Zap, Hammer, Building, Droplets, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'directional-boring',
      name: 'Directional Boring',
      icon: Drill,
      description: 'Precision underground drilling for utility installation without surface disruption.',
      features: ['GPS-guided drilling', 'Minimal disruption', 'Various pipe materials']
    },
    {
      id: 'utility-installation',
      name: 'Utility Installation',
      icon: Zap,
      description: 'Complete utility infrastructure installation and maintenance services.',
      features: ['Water & sewer lines', 'Gas distribution', 'Electrical infrastructure']
    },
    {
      id: 'pile-installation',
      name: 'Pile Installation',
      icon: Hammer,
      description: 'Foundation pile installation for structural support and stability.',
      features: ['Steel & concrete piles', 'Foundation support', 'Load testing']
    },
    {
      id: 'civil-construction',
      name: 'Civil Construction',
      icon: Building,
      description: 'Complete civil engineering and construction solutions.',
      features: ['Site preparation', 'Concrete work', 'Road construction']
    },
    {
      id: 'water-sewer-treatment',
      name: 'Water & Sewer Treatment',
      icon: Droplets,
      description: 'Water treatment facility construction and maintenance.',
      features: ['Treatment plants', 'Pump stations', 'System integration']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions backed by years of experience and cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;