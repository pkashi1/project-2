import React from 'react';
import { Link } from 'react-router-dom';
import { Drill, Building, Phone, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'directional-boring',
      name: 'Underground Utilities',
      icon: Drill,
      description: 'Water lines, sewer systems, gas lines, and electrical underground installation with precision directional boring.',
      features: ['Water & sewer lines', 'Gas distribution', 'Electrical underground', 'Telecommunications'],
      highlight: 'Advanced Equipment'
    },
    {
      id: 'utility-installation',
      name: 'Foundation Services',
      icon: Building,
      description: 'Residential & commercial foundations, repairs, and excavation services for all construction needs.',
      features: ['Foundation installation', 'Foundation repairs', 'Excavation services', 'Site preparation'],
      highlight: 'Expert Craftsmanship'
    },
    {
      id: 'pile-installation',
      name: 'Emergency Services',
      icon: Phone,
      description: '24/7 emergency repairs, leak detection, and emergency excavation services throughout Louisiana.',
      features: ['24/7 availability', 'Leak detection', 'Emergency repairs', 'Rapid response'],
      highlight: 'Immediate Response'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-navy-300 rounded-full px-6 py-3 font-semibold mb-6 transition-colors duration-300">
            Our Construction Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6 transition-colors duration-300">
            Complete Underground Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-accent-500">
              Louisiana
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Professional underground utilities, foundation services, and emergency repairs 
            with over 20 years of Louisiana experience and state-of-the-art equipment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-3 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-construction-pattern opacity-5 transform rotate-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-xl mb-6 group-hover:bg-navy-900 dark:group-hover:bg-navy-600 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-navy-900 dark:text-navy-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-medium mb-3 transition-colors duration-300">
                      {service.highlight}
                    </span>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-navy-700 dark:group-hover:text-navy-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-navy-900 dark:text-navy-300 font-semibold hover:text-navy-700 dark:hover:text-navy-400 transition-all duration-300 group-hover:translate-x-2"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-navy-900 dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden transition-colors duration-300">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Why Louisiana Trusts{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
                  Southern Underground
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 20 years serving Louisiana communities, we combine local expertise 
                with advanced technology to deliver exceptional underground construction solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">20+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">Licensed</div>
                  <div className="text-gray-300">& Insured</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
                  <div className="text-gray-300">Emergency</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Drill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Equipment</h4>
                  <p className="text-gray-300">State-of-the-art directional boring and excavation equipment for precision work.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Emergency Response</h4>
                  <p className="text-gray-300">24/7 emergency services for critical infrastructure repairs and urgent projects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
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
              className="inline-flex items-center bg-navy-900 dark:bg-navy-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 dark:hover:bg-navy-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-navy-900 dark:border-navy-700 text-navy-900 dark:text-navy-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-900 dark:hover:bg-navy-700 hover:text-white transition-all duration-300"
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