import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drill,
  Zap,
  Hammer,
  Building,
  Droplets,
  Layers,
  Wrench,
  MoveRight,
  ArrowRight
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  // Match these IDs with your detail routes: /services/:id
  const services = [
    {
      id: 'directional-drilling',
      name: 'Directional Drilling',
      icon: Drill,
      description:
        'Trenchless HDD for conduits and pipelines with minimal surface disruption.',
      features: [
        'Road/rail/waterway crossings',
        'Bore path engineering',
        'Multi-duct installations'
      ]
    },
    {
      id: 'utility-installation',
      name: 'Utility Installation',
      icon: Layers,
      description:
        'End-to-end water, gas, and sewer installations with testing and restoration.',
      features: [
        'Water & service connections',
        'Gas mains & regulators',
        'Sewer mains, manholes, lift stations'
      ]
    },
    {
      id: 'underground-electrical',
      name: 'Underground Electrical Conduit',
      icon: Zap,
      description:
        'Primary/secondary conduits, duct banks, vaults, and trenchless crossings.',
      features: [
        'Duct banks & risers',
        'Handholes, pull boxes, vaults',
        'Mandrel & pull-string testing'
      ]
    },
    {
      id: 'deep-foundation',
      name: 'Deep Foundation',
      icon: Hammer,
      description:
        'Drilled shafts, piles, and specialty supports for heavy structures.',
      features: [
        'Drilled shafts & rock sockets',
        'Helical & micro-piles, underpinning',
        'Static/dynamic load testing (CSL/TIP)'
      ]
    },
    {
      id: 'civil-construction',
      name: 'Civil Construction',
      icon: Building,
      description:
        'Full-scope sitework, roadway, structural concrete, and public infrastructure.',
      features: [
        'Site prep & earthwork',
        'Roadway & pavement',
        'Drainage & erosion control'
      ]
    },
    {
      id: 'drainage',
      name: 'Drainage',
      icon: Droplets,
      description:
        'Storm drains, culverts, inlets, open-channel works, and restoration.',
      features: [
        'Culverts & storm mains',
        'Catch basins & junction boxes',
        'Cleaning, inspection, CCTV'
      ]
    },
    {
      id: 'pipe-fabrication',
      name: 'Pipe Fabrication',
      icon: Wrench,
      description:
        'Custom cutting, welding, coating, and spool assemblies with QC/NDT.',
      features: [
        'Cutting & beveling',
        'MIG/TIG/SMAW + NDT',
        'Coatings & insulation'
      ]
    },
    {
      id: 'jack-and-bore',
      name: 'Jack & Bore / Underground Tunneling',
      icon: MoveRight,
      description:
        'Steel casing jacked under roads/rails with carrier pipe pullback.',
      features: [
        'Bore pits & shoring',
        'Alignment & grade control',
        'Carrier pipe installation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary-600 dark:text-primary-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trenchless drilling, utilities, deep foundations, civil works, and more—delivered with precision and safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              // <div
              //   key={service.id}
              //   // className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              //   className='bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100 dark:border-gray-700 transform rotate-45 w-48 h-48 '
              //   style={{ animationDelay: `${index * 100}ms` }}
              // >
              //   {/* <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg mb-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 transition-colors duration-300">
              //     <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
              //   </div> */}

              //   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              //     {service.name}
              //   </h3>

              //   {/* <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              //     {service.description}
              //   </p> */}

              //   {/* <ul className="space-y-2 mb-6">
              //     {service.features.map((feature, idx) => (
              //       <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              //         <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3" />
              //         {feature}
              //       </li>
              //     ))}
              //   </ul> */}

              //   <Link
              //     to={`/services/${service.id}`}
              //     className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1"
              //   >
              //     Learn More
              //     <ArrowRight className="ml-2 w-4 h-4" />
              //   </Link>
              // </div>
              <div
  key={service.id}
  className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
  style={{ animationDelay: `${index * 100}ms` }}
>
  {/* Decorative rotated background */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-40 h-40 bg-primary-100 dark:bg-primary-900 opacity-20 rounded-xl transform rotate-45"></div>
  </div>

  {/* Main content stays upright */}
  <div className="relative z-10">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      {service.name}
    </h3>
    <Link
      to={`/services/${service.id}`}
      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1"
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </div>
</div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
