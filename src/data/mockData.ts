// import { image } from "framer-motion/client";
import { addServiceMetadata } from '../../src/utils/seoMetadata';
import type { ServiceWithMeta } from '../../src/utils/seoMetadata';

// Mock data for the website
export const services = [
  {
    id: 'directional-boring',
    name: 'Directional Boring',
    icon: 'Drill',
    image: 'https://pc-db.com/wp-content/uploads/2016/04/Example-1-300x137.jpg',
    shortDescription: 'Precision underground drilling for utility installation without surface disruption.',
    detailedDescription: 'Our directional boring services provide efficient underground utility installation with minimal surface disruption. Using state-of-the-art equipment and GPS guidance systems, we can precisely drill horizontal holes for various utilities including gas, water, sewer, telecommunications, and electrical lines.',
    features: [
      'GPS-guided precision drilling',
      'Minimal surface disruption',
      'Various pipe materials supported',
      'Real-time monitoring systems',
      'Environmental compliance',
      'Urban and rural applications'
    ],
    process: [
      'Site survey and utility marking',
      'Entry and exit pit preparation',
      'Pilot hole drilling with steering',
      'Hole enlargement and cleaning',
      'Utility installation',
      'Site restoration'
    ]
  },
  {
    id: 'utility-installation',
    name: 'Utility Installation',
    icon: 'Zap',
    image: '/images//di-F1MlxlEpaOk-unsplash.jpg',
    shortDescription: 'Complete utility infrastructure installation and maintenance services.',
    detailedDescription: 'Comprehensive utility installation services covering water, sewer, gas, electrical, and telecommunications infrastructure. Our experienced team handles everything from residential connections to major municipal projects.',
    features: [
      'Water and sewer lines',
      'Gas distribution systems',
      'Electrical infrastructure',
      'Telecommunications networks',
      'Storm drainage systems',
      'Emergency repairs'
    ],
    process: [
      'Project planning and permits',
      'Excavation and trenching',
      'Pipe and conduit installation',
      'Connection and testing',
      'Backfill and compaction',
      'Site restoration'
    ]
  },
  {
    id: 'pile-installation',
    name: 'Pile Installation',
    icon: 'Hammer',
    image: 'https://i0.wp.com/civilengineerdk.com/wp-content/uploads/2024/11/Manufacturing-technology-of-the-pile-foundation-at-the-construction-site.jpg?fit=730%2C390&ssl=1',
    shortDescription: 'Foundation pile installation for structural support and stability.',
    detailedDescription: 'Professional pile installation services for foundations, retaining walls, and structural support. We handle various pile types including steel, concrete, and composite materials for both residential and commercial applications.',
    features: [
      'Steel and concrete piles',
      'Helical and driven piles',
      'Foundation support systems',
      'Retaining wall installation',
      'Load testing services',
      'Structural assessments'
    ],
    process: [
      'Soil analysis and design',
      'Equipment mobilization',
      'Pile driving/installation',
      'Alignment verification',
      'Quality control testing',
      'Project documentation'
    ]
  },
  {
    id: 'civil-construction',
    name: 'Civil Construction',
    icon: 'Building',
    image: 'https://civilideas374921463.wordpress.com/wp-content/uploads/2021/09/3faf92b0ec8e7803f92e24068d04734e.jpg?w=1200',
    shortDescription: 'Complete civil engineering and construction solutions.',
    detailedDescription: 'Full-service civil construction including excavation, grading, concrete work, and site development. From small residential projects to large commercial developments, we deliver quality construction solutions.',
    features: [
      'Site preparation and grading',
      'Concrete and asphalt work',
      'Drainage systems',
      'Road construction',
      'Site development',
      'Environmental compliance'
    ],
    process: [
      'Site survey and planning',
      'Permit acquisition',
      'Excavation and grading',
      'Infrastructure installation',
      'Paving and finishing',
      'Final inspection'
    ]
  },
  {
    id: 'water-sewer-treatment',
    name: 'Water & Sewer Treatment',
    icon: 'Droplets',
    image: 'https://eschooltoday.com/learn/wp-content/uploads/2020/10/basic-sewage-treatment-process.jpg',
    shortDescription: 'Water and wastewater treatment facility construction and maintenance.',
    detailedDescription: 'Specialized construction and maintenance of water treatment plants, wastewater treatment facilities, and related infrastructure. Our team has extensive experience with municipal and industrial treatment systems.',
    features: [
      'Water treatment plants',
      'Wastewater facilities',
      'Pump station construction',
      'Pipeline installation',
      'Control system integration',
      'Facility maintenance'
    ],
    process: [
      'System design review',
      'Equipment procurement',
      'Facility construction',
      'System integration',
      'Testing and commissioning',
      'Ongoing maintenance'
    ]
  }
];

export const enhancedServices: ServiceWithMeta[] = addServiceMetadata(services);

export const projects = [
  {
    id: 1,
    title: 'Downtown Baton Rouge Utility Upgrade',
    description: 'Upgrade the whole 12-block downtown area\'s utility infrastructure, including the water, sewage, and telecommunications systems.',
    category: 'Utility Installation',
    image: '/images//downtown-construction.png',
    completionDate: '2024-02-15',
    clientName: 'City of Baton Rouge',
    location: 'Baton Rouge, LA',
    testimonial: 'Southern Underground delivered exceptional results on schedule and within budget. Their professionalism and expertise made this complex project seamless.',
    details: {
      duration: '8 months',
      value: '$2.4M',
      scope: 'Installation of 3.2 miles of water lines, 2.8 miles of sewer lines, and fiber optic infrastructure',
      challenges: 'Working in dense urban environment with minimal traffic disruption',
      solution: 'Utilized directional boring and night work schedules to minimize impact'
    }
  },
  {
    id: 2,
    title: 'Industrial Gas Pipeline Installation at Lake Charles',
    description: 'High-pressure gas pipeline installation for petrochemical facility with specialized safety protocols.',
    category: 'Directional Boring',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    completionDate: '2023-11-30',
    clientName: 'Gulf Coast Industries',
    location: 'Lake Charles, LA',
    testimonial: 'The team demonstrated exceptional safety standards and technical expertise throughout this critical infrastructure project.',
    details: {
      duration: '6 months',
      value: '$1.8M',
      scope: '2-mile high-pressure gas pipeline with specialized coating and cathodic protection',
      challenges: 'Environmental sensitivity and strict safety requirements',
      solution: 'Implemented enhanced safety protocols and environmental monitoring'
    }
  },
  {
    id: 3,
    title: 'Residential Subdivision Development',
    description: 'Complete utility infrastructure for 200-home subdivision including water, sewer, gas, and electrical.',
    category: 'Civil Construction',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    completionDate: '2024-01-20',
    clientName: 'Magnolia Developments',
    location: 'Zachary, LA',
    testimonial: 'Outstanding work quality and attention to detail. The project was completed ahead of schedule with zero safety incidents.',
    details: {
      duration: '10 months',
      value: '$3.2M',
      scope: 'Complete infrastructure for 200-home subdivision',
      challenges: 'Coordination with multiple contractors and tight timeline',
      solution: 'Detailed project management and phased construction approach'
    }
  },
  {
    id: 4,
    title: 'Water Treatment Plant Upgrade',
    description: 'Major upgrade to municipal water treatment facility including new filtration systems and pipeline connections.',
    category: 'Water & Sewer Treatment',
    image: '/images//waterplant.png',
    completionDate: '2023-09-15',
    clientName: 'Central Water Works',
    location: 'Central, LA',
    testimonial: 'Professional execution of a complex project. The new systems are performing excellently and serving our community well.',
    details: {
      duration: '12 months',
      value: '$4.1M',
      scope: 'Filtration system upgrade and 1.5 miles of distribution pipeline',
      challenges: 'Maintaining water service during construction',
      solution: 'Phased construction with temporary systems to maintain service'
    }
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    position: 'President & CEO',
    bio: 'Over 20 years of experience in construction and utility installation. Licensed Professional Engineer with expertise in project management and business development.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'mrodriguez@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Operations Manager',
    bio: 'Certified Project Management Professional with 15 years in construction operations. Specializes in large-scale infrastructure projects and safety management.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sjohnson@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 3,
    name: 'David Thompson',
    position: 'Lead Field Supervisor',
    bio: 'Master craftsman with 18 years of hands-on experience in directional boring and utility installation. OSHA 30-Hour certified safety leader.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'dthompson@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 4,
    name: 'Amanda Wilson',
    position: 'Safety Director',
    bio: 'Certified Safety Professional with expertise in construction safety management. Leads our zero-incident safety program and training initiatives.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'awilson@southernunderground.com',
    linkedIn: '#'
  }
];

export const jobOpenings = [
  {
    id: 1,
    title: 'Directional Boring Operator',
    department: 'Field Operations',
    location: 'Zachary, LA',
    type: 'Full-time',
    description: 'Experienced directional boring operator needed for utility installation projects. Must have experience with HDD equipment and GPS guidance systems.',
    requirements: [
      '3+ years directional boring experience',
      'Valid CDL license',
      'OSHA 10-Hour certification',
      'Ability to work in various weather conditions',
      'Strong mechanical aptitude'
    ],
    benefits: [
      'Competitive salary ($60,000 - $75,000)',
      'Health and dental insurance',
      '401(k) with company match',
      'Paid time off',
      'Professional development opportunities'
    ],
    postDate: '2024-03-01',
    isActive: true
  },
  {
    id: 2,
    title: 'Project Manager',
    department: 'Management',
    location: 'Zachary, LA',
    type: 'Full-time',
    description: 'Seeking experienced project manager to oversee construction projects from planning through completion. PMP certification preferred.',
    requirements: [
      'Bachelor\'s degree in Construction Management or related field',
      '5+ years project management experience',
      'PMP certification preferred',
      'Strong communication and leadership skills',
      'Experience with construction software'
    ],
    benefits: [
      'Competitive salary ($75,000 - $95,000)',
      'Health and dental insurance',
      '401(k) with company match',
      'Company vehicle',
      'Professional development budget'
    ],
    postDate: '2024-02-28',
    isActive: true
  },
  {
    id: 3,
    title: 'Equipment Technician',
    department: 'Maintenance',
    location: 'Zachary, LA',
    type: 'Full-time',
    description: 'Maintain and repair construction equipment including excavators, boring machines, and support vehicles.',
    requirements: [
      'Mechanical or diesel technology degree/certification',
      '3+ years heavy equipment repair experience',
      'Hydraulic systems experience',
      'Valid driver\'s license',
      'Own basic tools'
    ],
    benefits: [
      'Competitive salary ($50,000 - $65,000)',
      'Health and dental insurance',
      '401(k) with company match',
      'Tool allowance',
      'Overtime opportunities'
    ],
    postDate: '2024-02-25',
    isActive: true
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Underground Utility Installation',
    excerpt: 'Exploring new technologies and methods revolutionizing the underground utility industry.',
    content: 'The underground utility installation industry is experiencing rapid technological advancement...',
    author: 'Michael Rodriguez',
    publishDate: '2024-03-10',
    tags: ['Technology', 'Innovation', 'Utilities'],
    featuredImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 5
  },
  {
    id: 2,
    title: 'Safety First: Our Zero-Incident Approach',
    excerpt: 'How we maintain the highest safety standards across all our construction projects.',
    content: 'Safety is not just a priority at Southern Underground - it\'s our core value...',
    author: 'Amanda Wilson',
    publishDate: '2024-03-05',
    tags: ['Safety', 'Training', 'Best Practices'],
    featuredImage: '/images//dean-bennett-aBV8pVODWiM-unsplash.jpg',
    readTime: 4
  },
  {
    id: 3,
    title: 'Directional Boring vs. Traditional Trenching',
    excerpt: 'Comparing modern directional boring techniques with traditional excavation methods.',
    content: 'When it comes to installing underground utilities, there are several methods to consider...',
    author: 'David Thompson',
    publishDate: '2024-02-28',
    tags: ['Directional Boring', 'Construction Methods', 'Efficiency'],
    featuredImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 6
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Robert Mitchell',
    position: 'City Engineer',
    company: 'City of Baton Rouge',
    content: 'Southern Underground consistently delivers exceptional results. Their attention to detail and commitment to safety makes them our preferred contractor for major utility projects.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Lisa Chen',
    position: 'Development Manager',
    company: 'Magnolia Developments',
    content: 'Working with Southern Underground was a pleasure. They completed our subdivision infrastructure ahead of schedule and maintained excellent communication throughout the project.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'James Parker',
    position: 'Operations Director',
    company: 'Gulf Coast Industries',
    content: 'The professionalism and expertise demonstrated by Southern Underground on our critical pipeline project was outstanding. They exceeded our expectations in every aspect.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const companyStats = [
  { label: 'Years in Business', value: '9+', icon: 'Calendar' },
  { label: 'Projects Completed', value: '500+', icon: 'CheckCircle' },
  { label: 'Miles of Utilities Installed', value: '1,200+', icon: 'Route' },
  { label: 'Safety Record', value: '99.9%', icon: 'Shield' }
];

export const certifications = [
  {
    name: 'OSHA Compliance',
    description: 'Fully compliant with OSHA safety standards and regulations',
    icon: 'Shield'
  },
  {
    name: 'Licensed Contractor',
    description: 'Licensed construction contractor in Louisiana and surrounding states',
    icon: 'Award'
  },
  {
    name: 'NUCA Member',
    description: 'Member of National Association of Utility Contractors',
    icon: 'Users'
  },
  {
    name: 'Environmental Certified',
    description: 'Certified for environmental compliance and protection',
    icon: 'Leaf'
  }
];