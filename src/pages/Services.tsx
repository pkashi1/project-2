// src/pages/Services.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Filter, Search } from 'lucide-react';
import * as Icons from 'lucide-react';

// Local catalog aligned to client-approved services and IDs.
const services = [
  {
    id: 'directional-drilling',
    name: 'Directional Drilling',
    icon: 'Drill',
    category: 'Trenchless',
    difficulty: 'Advanced',
    timeEstimate: '2-5 days',
    shortDescription: 'Precision underground installations without surface disruption',
    detailedDescription:
      'Trenchless HDD installs conduits and pipelines beneath roads, railways, waterways, and sensitive areas—minimizing disruption while meeting strict alignment and depth tolerances.',
    features: [
      'Road/rail/waterway & wetland crossings',
      'Bore path engineering & utility locates',
      'Pilot bore, pre-reaming & sizing',
      'Pullback: HDPE, PVC, steel, multi-duct',
      'Tracer wire, warning tape & protective casing',
      'Pressure, pig/mandrel & CCTV testing',
      'Re-drills, replacements & rehabilitation',
      'Entry/exit pits & full restoration'
    ],
    process: [
      'Site assessment, utility locates & potholing',
      'Bore path planning based on soils/bend radius',
      'Pilot bore execution',
      'Pre-reaming to final hole size',
      'Pullback & product installation',
      'Testing, documentation & restoration'
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
    detailedDescription:
      'End-to-end installation for water, gas, and wastewater systems including appurtenances, testing/commissioning, and restoration.',
    features: [
      'Water: mains, services, meters, valves, hydrants',
      'Gas: mains/services, meters/regulators, cathodic protection',
      'Wastewater: gravity/force mains, manholes, lift stations',
      'Appurtenances: backflow, air release, monitoring',
      'Hydrostatic, chlorination, bacteriological & pressure tests',
      'Emergency repairs & replacements',
      'Trenching/backfill/compaction per spec',
      'Pavement/curb/sidewalk/landscape restoration'
    ],
    process: [
      'Design coordination & locates',
      'Excavation or trenchless install',
      'Set structures, valves, meters & appurtenances',
      'Main/service tie-ins',
      'Testing & commissioning',
      'Surface restoration & closeout'
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
    detailedDescription:
      'Primary/secondary conduit systems, duct banks, handholes/pull boxes, vaults and transformer pads with trenchless crossings where required.',
    features: [
      'Conduits (PVC/HDPE/steel), risers & transitions',
      'Duct banks & concrete encasement',
      'Handholes, pull boxes, vaults & manholes',
      'Transformer/equipment pads',
      'Joint trench with other utilities',
      'Warning tape, tracer wire, grounding/bonding',
      'Mandrel & pull-string installation',
      'Continuity/grounding tests & restoration'
    ],
    process: [
      'Layout & structure locations',
      'Trench or HDD/jack-and-bore crossing',
      'Set boxes/vaults & pads',
      'Install conduit & encasement',
      'Mandrel/pull string & continuity tests',
      'Backfill, compaction & surface restoration'
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
    detailedDescription:
      'Drilled shafts, piles and specialty supports for bridges, buildings and heavy structures—delivered with certified testing and QA/QC.',
    features: [
      'Drilled shafts/caissons, belled shafts, rock sockets',
      'Steel H-piles, pipe, sheet piles; precast & timber',
      'Auger cast (ACIP) & continuous flight auger piles',
      'Helical piles, micro-piles & underpinning',
      'Slurry drilling & tremie concrete placement',
      'Static/dynamic load testing, CSL & TIP',
      'Reinforcing cages & corrosion protection',
      'Repair, jacketing & site restoration'
    ],
    process: [
      'Geotech review & layout',
      'Drill/drive to design depth',
      'Rebar cage placement & concrete/tremie',
      'Verification: PDA/static, CSL/TIP',
      'Pile caps/structural integration',
      'Spoil management & restoration'
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
    detailedDescription:
      'Full-scope sitework, roads, structural concrete, drainage, and public infrastructure with strict schedule and safety control.',
    features: [
      'Clearing, demolition, excavation, grading & stabilization',
      'Roadway/pavement: subgrade, base, asphalt & concrete',
      'Structural concrete foundations, walls & flatwork',
      'Drainage/erosion control & stormwater systems',
      'Transportation & public infrastructure',
      'Industrial/marine heavy civil specialties',
      'Topsoil, fine grading, landscaping & sod',
      'Surface restoration after utility work'
    ],
    process: [
      'Precon, survey & controls',
      'Earthwork & utility coordination',
      'Concrete & paving operations',
      'Drainage/erosion control',
      'QA/QC & punchlist',
      'Final grading & landscaping'
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
    detailedDescription:
      'Storm drain mains/laterals, culverts, inlets/structures, open channels and hydrologic controls—installed, inspected and restored.',
    features: [
      'Storm mains/laterals & roadside/cross drains',
      'Culverts: concrete, HDPE, metal',
      'Catch basins, curb/drop inlets, junction boxes',
      'Ditches, swales, channels & riprap',
      'Retention/detention & outfalls',
      'Directional/jack-and-bore crossings & casing',
      'Headwalls/wingwalls, flap/check/tide gates',
      'Flow testing, cleaning & CCTV'
    ],
    process: [
      'Survey, hydrology/hydraulics review',
      'Install mains/culverts & structures',
      'Open-channel grading/lining',
      'Appurtenances & erosion control',
      'Cleaning, flow verification & CCTV',
      'Pavement/landscape restoration'
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
    detailedDescription:
      'Custom cutting, welding, fitting, coating and assembly with documentation, NDT and field support.',
    features: [
      'Cutting & beveling, surface prep',
      'MIG/TIG/SMAW/FCAW welding; orbital where required',
      'Elbows, tees, reducers & custom fittings',
      'Spool pieces, racks & modular assemblies',
      'Internal/external coatings & insulation',
      'Material handling/storage & packaging',
      'Dimensional checks, NDT (UT/X-ray) & certs',
      'Repairs, rework & field support'
    ],
    process: [
      'Material verification & WPS review',
      'Cut & prep, fit-up & weld',
      'Dimensional checks & NDT',
      'Coatings/insulation',
      'Documentation & QA signoff',
      'Delivery/field install support'
    ]
  },
  {
    id: 'jack-and-bore',
    name: 'Jack & Bore / Underground Tunneling',
    icon: 'MoveRight',
    category: 'Trenchless',
    difficulty: 'Advanced',
    timeEstimate: '3-7 days',
    shortDescription: 'Steel casing jacked beneath roads and obstructions',
    detailedDescription:
      'Steel casing jacked beneath roads/rails/obstructions with precise grade control and carrier pipe pullback.',
    features: [
      'Bore pit excavation, shoring & dewatering',
      'Hydraulic jacking of steel casing pipe',
      'Carrier pipe install (water/gas/sewer/electrical)',
      'Multi-duct installations',
      'Variable soil handling including rock',
      'Alignment/grade verification & weld/seal inspection',
      'Pressure/leak testing as applicable',
      'Backfill, compaction & surface restoration'
    ],
    process: [
      'Excavate/shore entry & receiving pits',
      'Set jacking frame & alignment',
      'Pilot & jack casing to line/grade',
      'Install/secure carrier pipe(s)',
      'Inspect/test & document',
      'Backfill/restore & demobilize'
    ]
  }
];

const categories = ['All', 'Trenchless', 'Utilities', 'Electrical', 'Foundation', 'Civil', 'Fabrication'];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300">500+</div>
                <div className="text-sm text-primary-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300">15+</div>
                <div className="text-sm text-primary-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300">24/7</div>
                <div className="text-sm text-primary-200">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300">100%</div>
                <div className="text-sm text-primary-200">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
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

            {/* Category Filter */}
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
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => {
              type IconType = React.ComponentType<{ className?: string }>;
              const DynamicIcon =
                ((Icons as unknown as Record<string, IconType>)[service.icon] as IconType) ||
                (Icons.Wrench as IconType);

              return (
                <div
                  key={service.id}
                  className={`group relative h-full flex flex-col rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-gray-800 ${
                    index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Header with gradient background */}
                  <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-300 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-300 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <DynamicIcon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {service.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(service.difficulty)}`}>
                                {service.difficulty}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {service.timeEstimate}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                    </div>
                  </div>

                  {/* Key Features - Compact Grid */}
                  <div className="p-6 bg-white dark:bg-gray-800 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 6 && (
                        <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          +{service.features.length - 6} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 dark:hover:from-primary-600 dark:hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Starting from</div>
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">Contact for Quote</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Get a free consultation and detailed quote from our construction and utility experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 group"
            >
              <Icons.Phone className="mr-2 w-5 h-5" />
              Call (225) 555-0123
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Services;

