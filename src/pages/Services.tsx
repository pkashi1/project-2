'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from 'lucide-react';
import * as Icons from 'lucide-react';
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
          'Installing underground electrical conduits and telecom/fiber optic ducts',
          'Installing multiple conduits in a single bore (multi-duct installation)',
          'Installing casing pipes for future utility use',
        ],
      },
      {
        title: 'Crossings & Specialty Bores',
        features: [
          'Road, railway, and airport runway crossings without open-cut trenching',
          'Waterway and wetland crossings',
          'Urban, high-traffic, or environmentally sensitive area installations',
          'Long-distance bores for transmission mains or trunk lines',
        ],
      },
      {
        title: 'Bore Path Planning & Design',
        features: [
          'Utility locates and potholing to avoid conflicts',
          'Bore path engineering based on soil conditions, depth, and bend radius',
          'Pre-reaming and sizing of bore holes for large-diameter installations',
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
      {
        title: 'Site Work & Restoration',
        features: [
          'Entry and exit pit excavation',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscape restoration',
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
          'Installing new potable, raw, and reclaimed water mains',
          'Tapping water mains for new service lines',
          'Installing individual water service laterals from main to meter',
          'Setting water meters (residential, commercial, industrial)',
          'Installing curb stops, corporation stops, and meter yokes',
          'Installing control valves, air release valves, and pressure reducing valves',
          'Installing fire hydrants and hydrant laterals',
          'Fire service lines for sprinkler systems',
          'Thrust blocks and joint restraints',
          'Backflow prevention devices',
          'Hydrostatic pressure testing and chlorination',
          'Bacteriological testing prior to service',
        ],
      },
      {
        title: 'Gas System Installation',
        features: [
          'Installing new underground or aboveground natural gas mains',
          'Installing gas service laterals from main to meter or building connection',
          'Tapping existing gas mains for new services',
          'Installing cathodic protection for steel pipelines',
          'Setting gas meters for residential, commercial, and industrial customers',
          'Installing pressure regulators to adjust delivery pressure',
          'Installing meter manifolds for multi-unit development',
          'Installing risers and transition fittings for above/below ground connections',
          'Installing excess flow valves (EFVs) and shut-off valves',
          'Pressure/leak testing to code requirements',
          'Purging lines of air before service start-up',
        ],
      },
      {
        title: 'Wastewater/Sewer Systems',
        features: [
          'Installing sanitary sewer mains (gravity or force mains)',
          'Installing storm sewer mains and drainage systems',
          'Installing low-pressure sewer lines',
          'Connecting building sewer laterals from structure to main',
          'Constructing and setting precast or cast-in-place manholes',
          'Installing cleanouts, lamp holes, and inspection ports',
          'Installing wastewater lift stations and force mains',
          'Installing grinder pumps for low-pressure systems',
          'Installing drop connections, wyes, tees, and reducers',
          'Air testing or vacuum testing sewer mains and manholes',
          'CCTV inspection of installed lines',
        ],
      },
      {
        title: 'Wastewater Collection & Lift Systems',
        features: [
          'Installing gravity and force main sewer pipelines connected to lift stations',
          'Integrating manholes, cleanouts, and service laterals for maintenance access',
          'Coordinating collection system design with lift station capacity and hydraulics',
          'Installing backup power generators for continuous lift station operation',
          'Integrating automatic transfer switches for seamless power transition',
          'Testing and commissioning generators to meet capacity requirements',
        ],
      },
      {
        title: 'Pipe Rehabilitation Services',
        features: [
          'Installing cured-in-place pipe (CIPP) liners to rehabilitate existing sewer lines',
          'Installing sectional liners for spot repairs without replacing entire runs',
          'Breaking and displacing existing pipes while installing new pipe',
          'Increasing pipe diameter to improve capacity where required',
          'Addressing cracks, root intrusion, or minor structural defects',
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
        title: 'Main & Service Conduit Installation',
        features: [
          'Installing primary and secondary electrical conduits (PVC, HDPE, steel)',
          'Installing service laterals from main feeder to buildings, transformers, or panels',
          'Installing duct banks for multi-conduit runs',
          'Installing risers and transitions for above- to below-ground connections',
        ],
      },
      {
        title: 'Structures, Boxes & Access Points',
        features: [
          'Installing handholes, pull boxes, vaults, and manholes for electrical systems',
          'Setting transformer pads and electrical equipment pads',
          'Installing conduit terminations in structures',
        ],
      },
      {
        title: 'Specialty Installation Methods',
        features: [
          'Directional boring, jack-and-bore, or trenchless conduit installation',
          'Installing casing pipes and carrier conduits for protected crossings',
          'Conduit encasement in concrete for added protection',
          'Installation in joint trench configurations with other utilities',
        ],
      },
      {
        title: 'Cable Protection & Appurtenances',
        features: [
          'Installing warning tape and tracer wire above conduit runs',
          'Installing grounding and bonding systems',
          'Sealing conduit ends for moisture and pest prevention',
        ],
      },
      {
        title: 'Testing & Verification',
        features: [
          'Mandrel testing to verify conduit clearance',
          'Pull string installation for cable pulling',
          'Conduit continuity and grounding tests',
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
        title: 'Drilled Shaft / Caisson Installation',
        features: [
          'Drilling and installing concrete drilled shafts for bridges, buildings, and heavy structures',
          'Installing belled shafts for increased bearing capacity',
          'Temporary or permanent casing installation for shaft stability',
          'Rock socket drilling for hard strata conditions',
        ],
      },
      {
        title: 'Pile Installation',
        features: [
          'Driving steel H-piles, pipe piles, or sheet piles',
          'Installing precast concrete piles',
          'Installing timber piles for marine or light-load structures',
          'Installing auger cast piles (ACIP) or continuous flight auger piles',
        ],
      },
      {
        title: 'Foundation Support Systems',
        features: [
          'Installing helical piles or screw anchors for foundation stabilization',
          'Installing micro-piles for restricted-access or retrofit work',
          'Underpinning existing foundations for load support or settlement correction',
        ],
      },
      {
        title: 'Specialty Excavation & Drilling',
        features: [
          'Core drilling through rock or obstructions',
          'Slurry drilling and tremie concrete placement in wet conditions',
          'Drilling in limited access or low-headroom environments',
        ],
      },
      {
        title: 'Load Testing & Verification',
        features: [
          'Static load testing for piles or shafts',
          'Dynamic pile testing (PDA – Pile Driving Analyzer)',
          'Cross-hole sonic logging (CSL) for shaft integrity',
          'Thermal integrity profiling (TIP)',
        ],
      },
      {
        title: 'Foundation Protection & Reinforcement',
        features: [
          'Installing reinforcing cages and structural steel within deep foundations',
          'Applying corrosion protection measures for steel piles',
          'Installing base grouting or tip grouting for load enhancement',
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
        title: 'Site Preparation & Earthwork',
        features: [
          'Land clearing, grubbing, and demolition of existing structures',
          'Excavation, grading, and site leveling',
          'Soil stabilization and compaction',
          'Importing and exporting fill material',
        ],
      },
      {
        title: 'Roadway & Pavement Construction',
        features: [
          'Subgrade preparation and aggregate base installation',
          'Asphalt paving and concrete paving',
          'Curb, gutter, and sidewalk installation',
          'Driveway and parking lot construction',
        ],
      },
      {
        title: 'Structural Concrete & Foundations',
        features: [
          'Building and bridge foundations',
          'Retaining walls and headwalls',
          'Deep foundation systems (drilled shafts, piles, caissons)',
          'Slabs, pads, and structural flatwork',
        ],
      },
      {
        title: 'Drainage & Erosion Control',
        features: [
          'Culverts, swales, and stormwater management systems',
          'Retention and detention ponds',
          'Erosion control matting, riprap, and slope stabilization',
          'Outfall structures and energy dissipators',
        ],
      },
      {
        title: 'Transportation & Public Infrastructure',
        features: [
          'Road, highway, and intersection improvements',
          'Sidewalks, bike paths, and pedestrian facilities',
          'Bridge approaches and abutments',
          'Traffic control devices and striping',
        ],
      },
      {
        title: 'Specialty Civil Works',
        features: [
          'Site concrete for utilities, equipment pads, and bollards',
          'Concrete channels, ditches, and spillways',
          'Industrial site development and heavy civil projects',
          'Marine and waterfront civil structures',
        ],
      },
      {
        title: 'Site Restoration & Finishing',
        features: [
          'Topsoil placement and fine grading',
          'Landscaping and sod installation',
          'Pavement, curb, and surface restoration after utility work',
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
        title: 'Main & Lateral Line Installation',
        features: [
          'Installing storm drain mains and laterals',
          'Installing culverts (concrete, HDPE, metal) for roadways and site drainage',
          'Installing roadside and cross-drain pipes',
          'Installing roof drain or area drain connections to storm systems',
        ],
      },
      {
        title: 'Inlets, Structures & Access Points',
        features: [
          'Installing catch basins, drop inlets, and curb inlets',
          'Installing junction boxes and manholes for storm systems',
          'Adjusting inlet and manhole frames and grates to grade',
        ],
      },
      {
        title: 'Open Channel & Surface Drainage',
        features: [
          'Grading and shaping ditches, swales, and channels',
          'Installing riprap or erosion control lining',
          'Constructing retention/detention ponds and outfall structures',
        ],
      },
      {
        title: 'Specialty Installation Methods',
        features: [
          'Directional boring or jack-and-bore under roads, railways, or waterways',
          'Installing casing pipes for protected crossings',
          'Trenchless rehabilitation (lining, pipe bursting, or sliplining)',
        ],
      },
      {
        title: 'Appurtenances & Fittings',
        features: [
          'Installing headwalls, wingwalls, and end sections',
          'Installing flap gates, check valves, or tide gates',
          'Installing energy dissipators or stilling basins at outfalls',
        ],
      },
      {
        title: 'Testing & Commissioning',
        features: [
          'Flow testing and verification',
          'Cleaning and inspection of drainage systems prior to service',
          'CCTV inspection of installed systems',
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
        title: 'Specialized Gas Services',
        features: [
          'Metering Stations',
          'Purchase Point Stations',
          'Hot Taps on Steel and Poly',
          'Regulator Stations',
          'Line Stops',
        ],
      },
      {
        title: 'Pipe Cutting & Preparation',
        features: [
          'Cutting pipe to specified lengths using saws, torches, or automated cutters',
          'Beveling pipe ends for welding or joint preparation',
          'Cleaning and surface preparation (grinding, sandblasting)',
        ],
      },
      {
        title: 'Welding & Joining',
        features: [
          'Butt welding of pipe sections (MIG, TIG, SMAW, FCAW)',
          'Socket welding, flange welding, and attachment of fittings',
          'Specialty welding such as orbital welding for stainless steel or critical piping',
          'Weld inspection and non-destructive testing (NDT) such as X-ray or ultrasonic testing',
        ],
      },
      {
        title: 'Fabrication of Fittings & Assemblies',
        features: [
          'Bending pipe to specified radii and angles',
          'Fabricating elbows, tees, reducers, and custom fittings',
          'Assembly of spool pieces and pipe racks',
          'Prefabricating piping assemblies for modular installation',
        ],
      },
      {
        title: 'Coating & Protection',
        features: [
          'Applying internal and external pipe coatings (epoxy, fusion bonded epoxy, polyethylene)',
          'Insulation installation and jacketing',
          'Corrosion protection and cathodic protection application',
        ],
      },
      {
        title: 'Quality Control & Documentation',
        features: [
          'Dimensional checks and verification of pipe assemblies',
          'Documentation of weld procedures, inspection reports, and material certifications',
          'Compliance with project specifications and industry standards (ASME, ASTM, API)',
        ],
      },
    ],
  },
  {
    id: 'Underground Tunneling',
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
        title: 'Bore Pit Excavation & Preparation',
        features: [
          'Excavating entry and receiving pits to specified dimensions',
          'Shoring and bracing pits for safety and stability',
          'Dewatering and site preparation for bore operations',
        ],
      },
      {
        title: 'Jacking Pipe Installation',
        features: [
          'Installing steel casing pipes under roads, railways, and other obstructions',
          'Pushing or "jacking" casing pipes through soil using hydraulic jacks',
          'Ensuring precise alignment and grade control during jacking operations',
        ],
      },
      {
        title: 'Product Installation (Carrier Pipe Pullback)',
        features: [
          'Pulling in water, sewer, gas, or electrical carrier pipes inside the jacked casing',
          'Installing multiple carrier pipes in a single casing (multi-duct installations)',
          'Joining and sealing carrier pipes within casing',
        ],
      },
      {
        title: 'Specialty Jack and Bore Techniques',
        features: [
          'Handling variable soil conditions including rock, clay, and sand',
          'Using pipe bursting or sliplining in conjunction with jack and bore for rehabilitation',
          'Installing casing pipes with reinforced or composite materials as required',
        ],
      },
      {
        title: 'Site & Equipment Management',
        features: [
          'Mobilizing and operating jacking rigs, drilling equipment, and support machinery',
          'Monitoring and controlling hydraulic jacks and bore alignment systems',
          'Managing drill mud and spoil removal',
        ],
      },
      {
        title: 'Testing & Quality Control',
        features: [
          'Verifying pipe alignment, grade, and structural integrity',
          'Inspecting welds and seals on casing and carrier pipes',
          'Conducting pressure or leak testing where applicable',
        ],
      },
      {
        title: 'Site Restoration & Cleanup',
        features: [
          'Backfilling and compacting bore pits after installation',
          'Restoring pavement, sidewalks, and landscaping to original condition',
          'Removing all equipment and debris from the site',
        ],
      },
    ],
  },
] as const;


// export default Services;
type IconType = React.ComponentType<{ className?: string }>;
const getIcon = (name?: string): IconType => {
  if (!name) return Icons.Wrench as IconType;
  const maybe = (Icons as unknown as Record<string, IconType>)[name];
  return (maybe as IconType) || (Icons.Wrench as IconType);
};

const groupKey = (serviceId: string, title: string) =>
  `${serviceId}__${title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

/* ============================
   Page Component (Tabs layout)
   ============================ */
const Services: React.FC = () => {
  // show first service by default
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? '');
  // NEW imports


// inside your component:
const location = useLocation();
const navigate = useNavigate();

// keep the URL in sync when the user clicks a tab
useEffect(() => {
  // replace, so back button isn't spammy
  navigate(`/services?service=${activeId}`, { replace: true });
}, [activeId, navigate]);

// allow deep-linking: read ?service=... and ?group=...
useEffect(() => {
  const params = new URLSearchParams(location.search);

  // support hash (#id) as well, but prefer ?service=
  const fromHash = location.hash ? location.hash.replace('#', '') : '';
  const targetService = params.get('service') || fromHash;

  if (targetService) {
    const match = services.find(s => s.id === targetService);
    if (match) {
      setActiveId(match.id);
      // optional: scroll the tab rail into view
      document.getElementById(`tab-${match.id}`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });

      // optional: open a particular accordion card (desktop opens the whole row)
      const groupParam = params.get('group'); // you pass the slug we generate below
      if (groupParam && match.services?.length) {
        const idx = match.services.findIndex(g => groupKey(match.id, g.title) === groupParam);
        if (idx >= 0) {
          if (window.matchMedia('(min-width: 768px)').matches) {
            setOpenRow(Math.floor(idx / 2));     // open both cards in that row on md+
            setOpenCardKey(null);
          } else {
            setOpenCardKey(groupKey(match.id, match.services[idx].title)); // open single card on mobile
            setOpenRow(null);
          }
        }
      }
    }
  }
}, [location.search, location.hash]); // re-run when URL changes

  // Image carousel state
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Row/card expansion state
  const [openRow, setOpenRow] = useState<number | null>(null);          // md+ : which row is open (both cards)
  const [openCardKey, setOpenCardKey] = useState<string | null>(null);  // <md : which single card is open
  const [isMdUp, setIsMdUp] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );

  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) ?? services[0],
    [activeId]
  );

  // when switching tabs, close anything open
  useEffect(() => {
    setOpenRow(null);
    setOpenCardKey(null);
  }, [activeId]);

  // keep responsive state in sync
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => setIsMdUp(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Infinite scroll for images
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const itemWidth = 256; // 16rem width + gap
        const resetPoint = -(itemWidth * 5); // Reset after 5 images
        if (prev <= resetPoint) {
          return 0; // Reset to start for seamless loop
        }
        return prev - 0.5; // Move 0.5px per frame for smooth motion
      });
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, [isHovered]);

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
                </div>
              </div>

              {/* Services Offered (accordions) */}
              {activeService.services?.length ? (
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {activeService.services.map((group, idx) => {
                      const k = groupKey(activeService.id, group.title);
                      const rowIdx = Math.floor(idx / 2); // 2 columns per row on md+
                      const isOpen = isMdUp ? openRow === rowIdx : openCardKey === k;

                      const handleClick = () => {
                        if (isMdUp) {
                          setOpenRow((prev) => (prev === rowIdx ? null : rowIdx)); // open/close both cards in row
                          setOpenCardKey(null);
                        } else {
                          setOpenCardKey((prev) => (prev === k ? null : k)); // mobile: single card
                          setOpenRow(null);
                        }
                      };

                      return (
                        <div key={k} className="bg-gray-50 dark:bg-gray-700 rounded-xl h-full flex flex-col">
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={handleClick}
                            className="w-full flex items-center justify-between text-left p-5"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 min-h-[28px]">
                              {group.title}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 flex-1">
                              <ul className="space-y-2">
                                {group.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                      {feature}
                                    </span>
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

        {/* Infinite Scrolling Thumb Strip */}
        <div className="mt-8 overflow-hidden">
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Continuous scrolling container */}
            <div 
              className="flex gap-4 transition-none"
              style={{
                transform: `translateX(${scrollPosition}px)`,
                width: 'max-content'
              }}
            >
              {/* Create multiple copies for seamless infinite scroll */}
              {Array.from({ length: 6 }, (_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {[
                    { src: '/images/Gemini_Generated_Image_bjxysubjxysubjxy.png', alt: 'Construction project' },
                    { src: '/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg', alt: 'Construction work' },
                    { src: '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg', alt: 'Industrial construction' },
                    { src: '/images/dean-bennett-aBV8pVODWiM-unsplash.jpg', alt: 'Construction site' },
                    { src: '/images/di-F1MlxlEpaOk-unsplash.jpg', alt: 'Construction equipment' },
                  ].map((img, i) => {
                    const resetPosition = -(5 * (16 * 5 + 4 * 4)); // Reset after one complete set
                    const currentPosition = scrollPosition % resetPosition;
                    
                    return (
                      <div key={`${setIndex}-${i}`} className="min-w-[12rem] md:min-w-[16rem] group flex-shrink-0">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-32 md:h-32 lg:h-40 object-cover rounded-lg ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300 group-hover:scale-[1.02] shadow-sm hover:shadow-md"
                        />
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>
          
          {/* Pause indicator when hovered */}
          {isHovered && (
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Hover to pause • Move away to resume
              </span>
            </div>
          )}
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
              onClick={() => (window.location.href = '/contact')}
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
