import React from 'react';
import { Calendar, Users, Award, Shield, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { teamMembers, companyStats } from '../data/mockData';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
    const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const values = [
  {
    icon: Award,
    title: 'Safety',
    description:
      'We prioritize the safety of our team, partners, and the public in every phase of our work. Our commitment to strict safety standards ensures every project is completed without compromise.',
  },
  {
    icon: Shield,
    title: 'Integrity & Accountability',
    description:
      'We conduct business with honesty, transparency, and professionalism. We stand by our work and take ownership of our responsibilities—every step of the way.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Expertise',
    description:
      'We invest in specialized equipment and continued training to stay at the forefront of the industry. Our team brings the experience and technical skills needed for even the most challenging jobs.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Craftmanship',
    description:
      'We take pride in delivering dependable, high-performance results. From underground utilities to complex infrastructure, we focus on doing it right the first time.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description:
      'Our clients trust us to deliver on time, on budget, and with consistent communication. We respond quickly and effectively to meet the unique demands of each project.',
  },
];

  const milestones = [
    {
      year: '2015',
      event: 'Company Founded',
      description: 'Southern Underground established in Zachary, Louisiana',
    },
    {
      year: '2017',
      event: 'First Major Contract',
      description: 'Secured first multi-million dollar municipal project',
    },
    {
      year: '2019',
      event: 'Regional Expansion',
      description: 'Extended operations across Louisiana and Mississippi',
    },
    {
      year: '2021',
      event: 'Equipment Upgrade',
      description: 'Invested in state-of-the-art directional drilling equipment',
    },
    {
      year: '2023',
      event: 'Safety Milestone',
      description: 'Achieved 1 million work hours without lost-time incident',
    },
    {
      year: '2024',
      event: 'National Recognition',
      description: 'Received industry excellence award for project innovation',
    },
  ];

  // map string names from mockData to actual icon components
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Calendar,
    Users,
    Award,
    Shield,
    Target,
    Heart,
    Lightbulb,
    CheckCircle,
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>About | Southern Underground</title>
        <meta
          name="description"
          content="Learn about Southern Underground, our history and dedication to quality utility construction."
        />
      </Helmet>

      {/* Hero + Company Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Building Louisiana's <span className="text-primary-600 dark:text-primary-400">Future</span> Since 2015
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                At Southern Underground, we specialize in the critical infrastructure services
                that form the backbone of Louisiana's communities and industries. With expertise
                in underground utilities, site development, and civil construction, we deliver
                comprehensive solutions tailored to our region's unique demands.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Every project benefits from our team's decades of specialized experience,
                cutting-edge equipment, and unwavering commitment to quality, safety, and
                environmental stewardship.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, idx) => {
                  const IconComponent =
                    iconMap[stat.icon] || CheckCircle;
                  return (
                    <div key={idx} className="text-center">
                      <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
                alt="Construction team at work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
            {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction and utility services built on decades of Louisiana experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Service Categories */}
            <div className="space-y-6">
              {/* Underground Utilities */}
              <div 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredService('utilities')}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`border-b pb-4 transition-all duration-300 ${
                  hoveredService === 'utilities' 
                    ? 'border-primary-600 dark:border-primary-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <h3 className={`text-2xl font-semibold transition-colors duration-300 relative ${
                    hoveredService === 'utilities'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-gray-100'
                  }`}>
                    Underground Utilities
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ${
                      hoveredService === 'utilities' ? 'w-full' : 'w-0'
                    }`} />
                  </h3>
                </div>
              </div>

              {/* Site Development */}
              <div 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredService('development')}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`border-b pb-4 transition-all duration-300 ${
                  hoveredService === 'development' 
                    ? 'border-primary-600 dark:border-primary-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <h3 className={`text-2xl font-semibold transition-colors duration-300 relative ${
                    hoveredService === 'development'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-gray-100'
                  }`}>
                    Site Development
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ${
                      hoveredService === 'development' ? 'w-full' : 'w-0'
                    }`} />
                  </h3>
                </div>
              </div>

              {/* Specialized Services */}
              <div 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredService('specialized')}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`border-b pb-4 transition-all duration-300 ${
                  hoveredService === 'specialized' 
                    ? 'border-primary-600 dark:border-primary-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <h3 className={`text-2xl font-semibold transition-colors duration-300 relative ${
                    hoveredService === 'specialized'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-gray-100'
                  }`}>
                    Specialized Services
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ${
                      hoveredService === 'specialized' ? 'w-full' : 'w-0'
                    }`} />
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Expandable Content */}
            <div className="relative min-h-[400px]">
              {/* Underground Utilities Content */}
              {hoveredService === 'utilities' && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full animate-fade-in">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Underground Utilities
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Complete water, sewer, storm drainage, and gas line installation with advanced directional
                    drilling and trenchless technology.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Water & sewer infrastructure
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Storm drainage systems
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Natural gas distribution
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Telecommunications installation
                    </li>
                  </ul>
                </div>
              )}

              {/* Site Development Content */}
              {hoveredService === 'development' && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full animate-fade-in">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Site Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    From initial site preparation to final grading, we handle all aspects of civil construction and earthwork.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Site prep & excavation
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Road construction & paving
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Concrete foundations
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Environmental remediation
                    </li>
                  </ul>
                </div>
              )}

              {/* Specialized Services Content */}
              {hoveredService === 'specialized' && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full animate-fade-in">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Specialized Services
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Emergency utility repairs, industrial maintenance, and tailored solutions for unique project challenges.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Emergency repairs
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Industrial plant utilities
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Municipal upgrades
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      Flood mitigation
                    </li>
                  </ul>
                </div>
              )}

              {/* Default State */}
              {/* {!hoveredService && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Hover over a service category to view details
                  </p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Our Mission
          </h2>
          <blockquote className="text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
            "To provide exceptional construction and utility services that build stronger
            communities while maintaining the highest standards of safety, quality, and
            environmental responsibility."
          </blockquote>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Every project is an opportunity to improve the communities we serve and build infrastructure
            that stands the test of time. We're dedicated to realizing your vision with precision and care.
          </p>
        </div>
      </section>

      {/* Core Values */}
            {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every choice we make is guided by these principles
            </p>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group border-b border-gray-200 dark:border-gray-700 pb-6 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300"
                >
                  {/* Value Header - Always Visible */}
                  <div className="flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 relative">
                        {value.title}
                        {/* Underline effect */}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" />
                      </h3>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 group-hover:mt-4">
                    <div className="pl-16">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Our Associates
            </h2>

            {/* Responsive, centered, and capped size */}
            <img
              src="/images/certifications/credentials.png"
              alt="Contractor License"
              className="block mx-auto w-full h-auto object-contain max-w-[36rem] md:max-w-[44rem] lg:max-w-[52rem]"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
