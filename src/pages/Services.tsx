// src/pages/Services.tsx
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Filter, Search, ChevronDown, ChevronUp, Clock, Award } from 'lucide-react';
import * as Icons from 'lucide-react';

// Service data with detailed content from the text file
const services = [
  {
    id: 'directional-drilling',
    name: 'Directional Drilling',
    icon: 'Drill',
    category: 'Trenchless',
    difficulty: 'Advanced',
    timeEstimate: '2-5 days',
    shortDescription: 'Precision underground installations without surface disruption',
    detailedDescription: 'Trenchless HDD installs conduits and pipelines beneath roads, railways, waterways, and sensitive areas—minimizing disruption while meeting strict alignment and depth tolerances.',
    services: [
      {
        title: 'Utility Conduit & Pipeline Installation',
        features: [
          'Installing water, sewer, gas, and drainage lines via directional drilling',
          'Installing underground electrical conduits and fiber optic ducts',
          'Installing multiple conduits in a single bore (multi-duct installation)',
          'Installing casing pipes for future utility use'
        ]
      },
      {
        title: 'Crossings & Specialty Bores',
        features: [
          'Road, railway, and airport runway crossings without open-cut trenching',
          'Water and wetland crossings',
          'Urban, high-traffic, or environmentally sensitive area installations',
          'Long-distance bores for transmission mains or trunk lines'
        ]
      },
      {
        title: 'Bore Path Planning & Design',
        features: [
          'Utility locates and potholing to avoid conflicts',
          'Bore path engineering based on soil conditions, depth, and bend radius',
          'Pre-reaming and sizing for bore hole installations',
          'Pullback & Product Installation'
        ]
      },
      {
        title: 'Pullback & Product Installation',
        features: [
          'Pulling in HDPE, PVC, steel, or fused pipelines',
          'Installing jointed pipe via pullback with swab cups or rollers',
          'Cable or conductor pulling through installed conduit'
        ]
      },
      {
        title: 'Support & Protection Measures',
        features: [
          'Installing tracer wire and warning tape where applicable',
          'Providing protective casing for utility crossings',
          'Using drilling fluid recycling and containment systems to protect the environment'
        ]
      },
      {
        title: 'Testing & Verification',
        features: [
          'Mandrel or pig testing for conduit clearance',
          'Pressure testing of installed pipelines',
          'CCTV inspection of installed conduits or casings'
        ]
      },
      {
        title: 'Repair, Replacement & Rehabilitation',
        features: [
          'Re-drilling or re-aligning failed bores',
          'Replacing damaged or collapsed product installed via HDD',
          'Pipe bursting or sliplining using HDD access points'
        ]
      }
    ],
    popular: true
  },
  {
    id: 'utility-installation',
    name: 'Utility Installation',
    icon: 'Layers',
    category: 'Utilities',
    difficulty: 'Standard',
    timeEstimate: '1-3 days',
    shortDescription: 'Complete water, gas, and wastewater system installations',
    detailedDescription: 'End-to-end installation for water, gas, and wastewater systems including appurtenances, testing/commissioning, and restoration.',
    services: [
      {
        title: 'Water System Installation',
        features: [
          'Water mains, services, meters, valves, hydrants',
          'Backflow prevention devices',
          'Air release valves and monitoring equipment',
          'Hydrostatic testing and chlorination'
        ]
      },
      {
        title: 'Gas System Installation',
        features: [
          'Gas mains and services installation',
          'Meters and regulators setup',
          'Cathodic protection systems',
          'Pressure testing and leak detection'
        ]
      },
      {
        title: 'Wastewater Systems',
        features: [
          'Gravity and force mains installation',
          'Manholes and lift stations',
          'Pump stations and controls',
          'Flow testing and CCTV inspection'
        ]
      }
    ],
    popular: true
  },
  {
    id: 'underground-electrical',
    name: 'Underground Electrical Conduit',
    icon: 'Zap',
    category: 'Electrical',
    difficulty: 'Standard',
    timeEstimate: '1-4 days',
    shortDescription: 'Primary/secondary conduit systems and electrical infrastructure',
    detailedDescription: 'Primary/secondary conduit systems, duct banks, handholes/pull boxes, vaults and transformer pads with trenchless crossings where required.',
    services: [
      {
        title: 'Conduit Systems',
        features: [
          'PVC, HDPE, and steel conduits installation',
          'Risers and transitions',
          'Duct banks and concrete encasement',
          'Joint trench with other utilities'
        ]
      },
      {
        title: 'Electrical Infrastructure',
        features: [
          'Handholes, pull boxes, and vaults',
          'Electrical manholes',
          'Transformer and equipment pads',
          'Warning tape and tracer wire installation'
        ]
      },
      {
        title: 'Testing & Commissioning',
        features: [
          'Mandrel and pull-string installation',
          'Continuity and grounding tests',
          'Grounding and bonding systems',
          'Final restoration and cleanup'
        ]
      }
    ]
  },
  {
    id: 'deep-foundation',
    name: 'Deep Foundation',
    icon: 'Hammer',
    category: 'Foundation',
    difficulty: 'Advanced',
    timeEstimate: '3-10 days',
    shortDescription: 'Drilled shafts, piles and specialty supports for heavy structures',
    detailedDescription: 'Drilled shafts, piles and specialty supports for bridges, buildings and heavy structures—delivered with certified testing and QA/QC.',
    services: [
      {
        title: 'Drilled Foundations',
        features: [
          'Drilled shafts and caissons',
          'Belled shafts and rock sockets',
          'Slurry drilling and tremie concrete placement',
          'Reinforcing cages and corrosion protection'
        ]
      },
      {
        title: 'Pile Installation',
        features: [
          'Steel H-piles, pipe, and sheet piles',
          'Precast and timber piles',
          'Auger cast (ACIP) and continuous flight auger piles',
          'Helical piles and micro-piles'
        ]
      },
      {
        title: 'Testing & Quality Control',
        features: [
          'Static and dynamic load testing',
          'Cross-hole sonic logging (CSL)',
          'Thermal integrity profiling (TIP)',
          'Pile driving analysis (PDA)'
        ]
      }
    ]
  },
  {
    id: 'civil-construction',
    name: 'Civil Construction',
    icon: 'Building',
    category: 'Civil',
    difficulty: 'Standard',
    timeEstimate: '5-20 days',
    shortDescription: 'Full-scope sitework, roads, and structural concrete',
    detailedDescription: 'Full-scope sitework, roads, structural concrete, drainage, and public infrastructure with strict schedule and safety control.',
    services: [
      {
        title: 'Site Development',
        features: [
          'Clearing, demolition, and excavation',
          'Grading and soil stabilization',
          'Topsoil and fine grading',
          'Landscaping and sod installation'
        ]
      },
      {
        title: 'Roadway Construction',
        features: [
          'Subgrade preparation and base installation',
          'Asphalt and concrete paving',
          'Transportation infrastructure',
          'Public infrastructure development'
        ]
      },
      {
        title: 'Structural Work',
        features: [
          'Structural concrete foundations',
          'Walls and flatwork',
          'Industrial and marine heavy civil specialties',
          'Surface restoration after utility work'
        ]
      }
    ],
    popular: true
  },
  {
    id: 'drainage',
    name: 'Drainage',
    icon: 'Droplets',
    category: 'Utilities',
    difficulty: 'Standard',
    timeEstimate: '2-7 days',
    shortDescription: 'Storm drain systems and water management solutions',
    detailedDescription: 'Storm drain mains/laterals, culverts, inlets/structures, open channels and hydrologic controls—installed, inspected and restored.',
    services: [
      {
        title: 'Storm Drainage Systems',
        features: [
          'Storm mains and laterals installation',
          'Roadside and cross drains',
          'Catch basins and curb inlets',
          'Drop inlets and junction boxes'
        ]
      },
      {
        title: 'Culvert Installation',
        features: [
          'Concrete, HDPE, and metal culverts',
          'Directional and jack-and-bore crossings',
          'Protective casing installation',
          'Headwalls and wingwalls'
        ]
      },
      {
        title: 'Water Management',
        features: [
          'Ditches, swales, and channels',
          'Riprap installation',
          'Retention and detention systems',
          'Outfalls and erosion control'
        ]
      }
    ]
  },
  {
    id: 'pipe-fabrication',
    name: 'Pipe Fabrication',
    icon: 'Wrench',
    category: 'Fabrication',
    difficulty: 'Advanced',
    timeEstimate: '1-5 days',
    shortDescription: 'Custom cutting, welding, fitting, and coating services',
    detailedDescription: 'Custom cutting, welding, fitting, coating and assembly with documentation, NDT and field support.',
    services: [
      {
        title: 'Fabrication Services',
        features: [
          'Cutting and beveling',
          'Surface preparation',
          'MIG/TIG/SMAW/FCAW welding',
          'Orbital welding where required'
        ]
      },
      {
        title: 'Custom Fittings',
        features: [
          'Elbows, tees, and reducers',
          'Custom fittings fabrication',
          'Spool pieces and racks',
          'Modular assemblies'
        ]
      },
      {
        title: 'Quality Control',
        features: [
          'Dimensional checks and NDT',
          'Ultrasonic and X-ray testing',
          'Material handling and storage',
          'Documentation and certifications'
        ]
      }
    ]
  },
  {
    id: 'underground-tunneling',
    name: 'Underground Tunneling',
    icon: 'MoveRight',
    category: 'Trenchless',
    difficulty: 'Advanced',
    timeEstimate: '3-7 days',
    shortDescription: 'Steel casing jacked beneath roads and obstructions',
    detailedDescription: 'Steel casing jacked beneath roads/rails/obstructions with precise grade control and carrier pipe pullback.',
    services: [
      {
        title: 'Tunneling Operations',
        features: [
          'Bore pit excavation and shoring',
          'Dewatering systems',
          'Hydraulic jacking of steel casing pipe',
          'Variable soil handling including rock'
        ]
      },
      {
        title: 'Installation Services',
        features: [
          'Carrier pipe installation (water/gas/sewer/electrical)',
          'Multi-duct installations',
          'Alignment and grade verification',
          'Weld and seal inspection'
        ]
      },
      {
        title: 'Quality Assurance',
        features: [
          'Pressure and leak testing',
          'Documentation and reporting',
          'Backfill and compaction',
          'Surface restoration'
        ]
      }
    ]
  }
];

const categories = ['All', 'Trenchless', 'Utilities', 'Electrical', 'Foundation', 'Civil', 'Fabrication'];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedServiceGroups, setExpandedServiceGroups] = useState<{ [key: string]: boolean }>({});
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Standard': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  const toggleServiceGroupExpansion = (serviceId: string, groupIdx: number) => {
    const key = `${serviceId}-${groupIdx}`;
    setExpandedServiceGroups(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/christopher-burns-8KfCR12oeUM-unsplash.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent">
              Expert Construction <span className="text-secondary-300">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              From precision trenchless technology to comprehensive civil works—delivered safely, on time, and on budget.
            </p>
            
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      {/* <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>


            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-gray-500 w-5 h-5" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              type IconType = React.ComponentType<{ className?: string }>;
              const DynamicIcon =
                ((Icons as unknown as Record<string, IconType>)[service.icon] as IconType) ||
                (Icons.Wrench as IconType);

              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className={`group relative flex flex-col rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-2xl bg-white dark:bg-gray-800 ${
                    isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  {/* Service Card Header */}
                  <div 
                    className="bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 p-8 cursor-pointer aspect-rectangle flex flex-col justify-center"
                    onClick={() => toggleServiceExpansion(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <DynamicIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {service.name}
                          </h3>
                          
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {service.shortDescription}
                    </p> */}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="p-6 border-t border-gray-200 dark:border-gray-600">
                      <div className="mb-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* Services Offered */}
                      <div className="space-y-6">
                        {/* <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          Services Offered
                        </h4> */}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.services?.map((serviceGroup, idx) => {
                            const groupKey = `${service.id}-${idx}`;
                            const isGroupExpanded = expandedServiceGroups[groupKey];
                            
                            return (
                              <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                                <div 
                                  className="flex items-center justify-between cursor-pointer"
                                  onClick={() => toggleServiceGroupExpansion(service.id, idx)}
                                >
                                  <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {serviceGroup.title}
                                  </h5>
                                  {isGroupExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                {isGroupExpanded && (
                                  <ul className="space-y-2 mt-4">
                                    {serviceGroup.features.map((feature, featureIdx) => (
                                      <li key={featureIdx} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                                          {feature}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = '/contact';
                            }}
                            className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                          >
                            Get Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Collapsed Footer */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
            Contact our experts for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = 'mailto:info@company.com?subject=General Inquiry'}
              className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'tel:+12255550123'}
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 group"
            >
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

