'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from 'lucide-react';
import * as Icons from 'lucide-react';

/* =========================
   Services data (unchanged)
   ========================= */
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
    services: [
      {
        title: 'Utility Conduit & Pipeline Installation',
        features: [
          'Installing water, sewer, gas, and drainage lines via directional drilling',
          'Installing underground electrical conduits and fiber optic ducts',
          'Installing multiple conduits in a single bore (multi-duct installation)',
          'Installing casing pipes for future utility use',
        ],
      },
      {
        title: 'Crossings & Specialty Bores',
        features: [
          'Road, railway, and airport runway crossings without open-cut trenching',
          'Water and wetland crossings',
          'Urban, high-traffic, or environmentally sensitive area installations',
          'Long-distance bores for transmission mains or trunk lines',
        ],
      },
      {
        title: 'Bore Path Planning & Design',
        features: [
          'Utility locates and potholing to avoid conflicts',
          'Bore path engineering based on soil conditions, depth, and bend radius',
          'Pre-reaming and sizing for bore hole installations',
          'Pullback & Product Installation',
        ],
      },
      {
        title: 'Pullback & Product Installation',
        features: [
          'Pulling in HDPE, PVC, steel, or fused pipelines',
          'Installing jointed pipe via pullback with swab cups or rollers',
          'Cable or conductor pulling through installed conduit',
        ],
      },
      {
        title: 'Support & Protection Measures',
        features: [
          'Installing tracer wire and warning tape where applicable',
          'Providing protective casing for utility crossings',
          'Using drilling fluid recycling and containment systems to protect the environment',
        ],
      },
      {
        title: 'Testing & Verification',
        features: [
          'Mandrel or pig testing for conduit clearance',
          'Pressure testing of installed pipelines',
          'CCTV inspection of installed conduits or casings',
        ],
      },
      {
        title: 'Repair, Replacement & Rehabilitation',
        features: [
          'Re-drilling or re-aligning failed bores',
          'Replacing damaged or collapsed product installed via HDD',
          'Pipe bursting or sliplining using HDD access points',
        ],
      },
    ],
    popular: true,
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
    services: [
      {
        title: 'Water System Installation',
        features: [
          'Water mains, services, meters, valves, hydrants',
          'Backflow prevention devices',
          'Air release valves and monitoring equipment',
          'Hydrostatic testing and chlorination',
        ],
      },
      {
        title: 'Gas System Installation',
        features: [
          'Gas mains and services installation',
          'Meters and regulators setup',
          'Cathodic protection systems',
          'Pressure testing and leak detection',
        ],
      },
      {
        title: 'Wastewater Systems',
        features: [
          'Gravity and force mains installation',
          'Manholes and lift stations',
          'Pump stations and controls',
          'Flow testing and CCTV inspection',
        ],
      },
    ],
    popular: true,
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
    services: [
      {
        title: 'Conduit Systems',
        features: [
          'PVC, HDPE, and steel conduits installation',
          'Risers and transitions',
          'Duct banks and concrete encasement',
          'Joint trench with other utilities',
        ],
      },
      {
        title: 'Electrical Infrastructure',
        features: [
          'Handholes, pull boxes, and vaults',
          'Electrical manholes',
          'Transformer and equipment pads',
          'Warning tape and tracer wire installation',
        ],
      },
      {
        title: 'Testing & Commissioning',
        features: [
          'Mandrel and pull-string installation',
          'Continuity and grounding tests',
          'Grounding and bonding systems',
          'Final restoration and cleanup',
        ],
      },
    ],
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
    services: [
      {
        title: 'Drilled Foundations',
        features: [
          'Drilled shafts and caissons',
          'Belled shafts and rock sockets',
          'Slurry drilling and tremie concrete placement',
          'Reinforcing cages and corrosion protection',
        ],
      },
      {
        title: 'Pile Installation',
        features: [
          'Steel H-piles, pipe, and sheet piles',
          'Precast and timber piles',
          'Auger cast (ACIP) and continuous flight auger piles',
          'Helical piles and micro-piles',
        ],
      },
      {
        title: 'Testing & Quality Control',
        features: [
          'Static and dynamic load testing',
          'Cross-hole sonic logging (CSL)',
          'Thermal integrity profiling (TIP)',
          'Pile driving analysis (PDA)',
        ],
      },
    ],
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
    services: [
      {
        title: 'Site Development',
        features: [
          'Clearing, demolition, and excavation',
          'Grading and soil stabilization',
          'Topsoil and fine grading',
          'Landscaping and sod installation',
        ],
      },
      {
        title: 'Roadway Construction',
        features: [
          'Subgrade preparation and base installation',
          'Asphalt and concrete paving',
          'Transportation infrastructure',
          'Public infrastructure development',
        ],
      },
      {
        title: 'Structural Work',
        features: [
          'Structural concrete foundations',
          'Walls and flatwork',
          'Industrial and marine heavy civil specialties',
          'Surface restoration after utility work',
        ],
      },
    ],
    popular: true,
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
    services: [
      {
        title: 'Storm Drainage Systems',
        features: [
          'Storm mains and laterals installation',
          'Roadside and cross drains',
          'Catch basins and curb inlets',
          'Drop inlets and junction boxes',
        ],
      },
      {
        title: 'Culvert Installation',
        features: [
          'Concrete, HDPE, and metal culverts',
          'Directional and jack-and-bore crossings',
          'Protective casing installation',
          'Headwalls and wingwalls',
        ],
      },
      {
        title: 'Water Management',
        features: [
          'Ditches, swales, and channels',
          'Riprap installation',
          'Retention and detention systems',
          'Outfalls and erosion control',
        ],
      },
    ],
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
    services: [
      {
        title: 'Fabrication Services',
        features: [
          'Cutting and beveling',
          'Surface preparation',
          'MIG/TIG/SMAW/FCAW welding',
          'Orbital welding where required',
        ],
      },
      {
        title: 'Custom Fittings',
        features: [
          'Elbows, tees, and reducers',
          'Custom fittings fabrication',
          'Spool pieces and racks',
          'Modular assemblies',
        ],
      },
      {
        title: 'Quality Control',
        features: [
          'Dimensional checks and NDT',
          'Ultrasonic and X-ray testing',
          'Material handling and storage',
          'Documentation and certifications',
        ],
      },
    ],
  },
  {
    id: 'underground-tunneling',
    name: 'Underground Tunneling',
    icon: 'MoveRight',
    category: 'Trenchless',
    difficulty: 'Advanced',
    timeEstimate: '3-7 days',
    shortDescription: 'Steel casing jacked beneath roads and obstructions',
    detailedDescription:
      'Steel casing jacked beneath roads/rails/obstructions with precise grade control and carrier pipe pullback.',
    services: [
      {
        title: 'Tunneling Operations',
        features: [
          'Bore pit excavation and shoring',
          'Dewatering systems',
          'Hydraulic jacking of steel casing pipe',
          'Variable soil handling including rock',
        ],
      },
      {
        title: 'Installation Services',
        features: [
          'Carrier pipe installation (water/gas/sewer/electrical)',
          'Multi-duct installations',
          'Alignment and grade verification',
          'Weld and seal inspection',
        ],
      },
      {
        title: 'Quality Assurance',
        features: [
          'Pressure and leak testing',
          'Documentation and reporting',
          'Backfill and compaction',
          'Surface restoration',
        ],
      },
    ],
  },
] as const;

/* ================================
   Utility: resolve lucide icon name
   ================================ */
type IconType = React.ComponentType<{ className?: string }>;
const getIcon = (name?: string): IconType => {
  if (!name) return Icons.Wrench as IconType;
  const maybe = (Icons as unknown as Record<string, IconType>)[name];
  return (maybe as IconType) || (Icons.Wrench as IconType);
};

/* ============================
   Page Component (Tabs layout)
   ============================ */
const Services: React.FC = () => {
  // show first service by default
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? '');
  const [expandedServiceGroups, setExpandedServiceGroups] = useState<Record<string, boolean>>({});

  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) ?? services[0],
    [activeId]
  );

  // auto-scroll tab rail on mobile so active tab stays in view
  const railRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;

    const activeIndex = services.findIndex((s) => s.id === activeId);
    if (activeIndex < 0) return;

    const perView = 3; // approximate; we’ll center-ish the selection
    const itemWidth = rail.clientWidth / perView;
    rail.scrollTo({ left: Math.max(0, activeIndex * itemWidth - itemWidth), behavior: 'smooth' });
  }, [activeId]);

  const toggleServiceGroupExpansion = (serviceId: string, groupIdx: number) => {
    const key = `${serviceId}-${groupIdx}`;
    setExpandedServiceGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero (kept consistent with your Services hero style) */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/christopher-burns-8KfCR12oeUM-unsplash.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent">
            Expert Construction <span className="text-secondary-300">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            From precision trenchless technology to comprehensive civil works—delivered safely, on time, and on budget.
          </p>
        </div>
      </section>

      {/* Tabs + panel */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tab rail */}
          <div role="tablist" aria-label="Services" className="relative">
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center pb-4 -mx-4 px-4"
            >
              {services.map((s) => {
                const Icon = getIcon(s.icon);
                const active = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`panel-${s.id}`}
                    id={`tab-${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={`group relative shrink-0 whitespace-nowrap px-3 py-2 text-base font-semibold transition-colors
                      ${active ? 'text-primary-700 dark:text-primary-300' : 'text-gray-700 dark:text-gray-200'}
                    `}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-md grid place-items-center ${
                          active ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`} />
                      </span>
                      {s.name}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active service panel */}
          {activeService && (
            <div
              role="tabpanel"
              id={`panel-${activeService.id}`}
              aria-labelledby={`tab-${activeService.id}`}
              className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Header strip */}
              <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-xl grid place-items-center shadow-lg">
                      {React.createElement(getIcon(activeService.icon), { className: 'w-8 h-8 text-white' })}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {activeService.name}
                      </h2>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-3xl">
                        {activeService.detailedDescription}
                      </p>
                      
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => (window.location.href = '/contact')}
                      className="inline-flex items-center bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

                           {/* Services Offered (accordions) */}
              {activeService.services?.length ? (
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeService.services.map((group, idx) => {
                      const key = `${activeService.id}-${idx}`;
                      const isOpen = !!expandedServiceGroups[key];
                      return (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <button
                            type="button"
                            onClick={() => setExpandedServiceGroups((p) => ({ ...p, [key]: !p[key] }))}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between text-left p-5"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{group.title}</h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5">
                              <ul className="space-y-2">
                                {group.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
        {/* Thumb strip — sits at the bottom of this section */}
<div className="mt-8">
  {/* On mobile it’s a smooth horizontal scroller; on md+ it’s a 5-up grid */}
  <div className="flex md:grid md:grid-cols-5 gap-2 overflow-x-auto no-scrollbar">
    {[
      { src: '/images/Gemini_Generated_Image_bjxysubjxysubjxy.png', alt: 'Construction project' },
      { src: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg', alt: 'Construction work' },
      { src: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg', alt: 'Industrial construction' },
      { src: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg', alt: 'Construction site' },
      { src: '/images/di-F1MlxlEpaOk-unsplash.jpg', alt: 'Construction equipment' },
    ].map((img, i) => (
      <div key={i} className="min-w-[9rem] md:min-w-0">
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-50 md:h-16 object-cover rounded-md ring-1 ring-black/5 dark:ring-white/10 hover:opacity-95 transition"
        />
      </div>
    ))}
  </div>
</div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
            Contact our experts for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = 'mailto:info@company.com?subject=General Inquiry')}
              className="inline-flex items-center bg-secondary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg "
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
