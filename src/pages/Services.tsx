// src/pages/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

// Local catalog aligned to client-approved services and IDs.
// Tip: If you prefer a single source of truth, move this to /data/services.ts and import it here.
const services = [
  {
    id: 'directional-drilling',
    name: 'Directional Drilling',
    icon: 'Drill',
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
    ]
  },
  {
    id: 'utility-installation',
    name: 'Utility Installation',
    icon: 'Layers',
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
    ]
  },
  {
    id: 'underground-electrical',
    name: 'Underground Electrical Conduit',
    icon: 'Zap',
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
    ]
  },
  {
    id: 'drainage',
    name: 'Drainage',
    icon: 'Droplets',
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
    icon: 'MoveRight', // Fallback handled below if unavailable
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
            From precision HDD and jack & bore to utilities, drainage, deep foundations, and civil works—delivered safely and on schedule.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              type IconType = React.ComponentType<{ className?: string }>;
              const DynamicIcon =
                ((Icons as unknown as Record<string, IconType>)[service.icon] as IconType) ||
                (Icons.Wrench as IconType); // Fallback icon if name not found

              return (
                <div
                  key={service.id}
                  className="rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-2xl bg-white dark:bg-gray-800"
                >
                  {/* Header */}
                  <div className="bg-primary-50 dark:bg-gray-800 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                        <DynamicIcon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {service.name}
                      </h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Key Features */}
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

                  {/* Process + CTA */}
                  <div className="bg-white dark:bg-gray-800 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Our Process
                    </h3>
                    <div className="space-y-2 mb-6">
                      {(service.process ?? []).map((step, idx) => (
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
              Licensed, insured, and committed to safety, quality, and on-time delivery across every scope.
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
                Full coverage and compliance for your project’s protection and peace of mind.
              </p>
            </div>
            {/* Add 2 more cards if desired */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Get a free consultation and detailed quote from our trenchless and civil experts.
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
