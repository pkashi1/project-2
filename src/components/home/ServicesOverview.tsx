import React from 'react';
import { Link } from 'react-router-dom';
import { Drill, Zap, Hammer, Building, Droplets, ArrowRight, Phone } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'directional-boring',
      name: 'Underground Utilities',
      icon: Drill,
      description: 'Water lines, sewer systems, gas lines, and electrical underground installation with precision directional boring.',
      features: ['Water & sewer lines', 'Gas distribution', 'Electrical underground', 'Telecommunications']
    },
    {
      id: 'utility-installation',
      name: 'Foundation Services',
      icon: Building,
      description: 'Residential & commercial foundations, repairs, and excavation services for all construction needs.',
      features: ['Foundation installation', 'Foundation repairs', 'Excavation services', 'Site preparation']
    },
    {
      id: 'pile-installation',
      name: 'Emergency Services',
      icon: Phone,
      description: '24/7 emergency repairs, leak detection, and emergency excavation services throughout Louisiana.',
      features: ['24/7 availability', 'Leak detection', 'Emergency repairs', 'Rapid response']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-navy-100 text-navy-900 rounded-full px-4 py-2 font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Louisiana's Underground Construction Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional underground utilities, foundation services, and emergency repairs 
            with over 20 years of Louisiana experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-navy-100 rounded-xl mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-navy-900 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-navy-900 font-semibold hover:text-navy-700 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Southern Underground?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 20 years serving Louisiana, we're your trusted local experts 
                for all underground construction needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">20+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">Licensed</div>
                  <div className="text-gray-300">& Insured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
                  <div className="text-gray-300">Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">Local</div>
                  <div className="text-gray-300">Louisiana Experts</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Drill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Equipment</h4>
                  <p className="text-gray-300">State-of-the-art directional boring and excavation equipment for precision work.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Emergency Response</h4>
                  <p className="text-gray-300">24/7 emergency services for critical infrastructure repairs and urgent projects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Local Expertise</h4>
                  <p className="text-gray-300">Deep understanding of Louisiana soil conditions and local regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              (225) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;