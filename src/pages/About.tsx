import React from 'react';
import { Calendar, Users, Award, Shield, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { teamMembers, companyStats } from '../data/mockData';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
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
      description: 'Invested in state-of-the-art directional boring equipment',
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
                Building Louisiana’s <span className="text-primary-600 dark:text-primary-400">Future</span> Since 2015
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                At Southern Underground, we specialize in the critical infrastructure services
                that form the backbone of Louisiana’s communities and industries. With expertise
                in underground utilities, site development, and civil construction, we deliver
                comprehensive solutions tailored to our region’s unique demands.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Every project benefits from our team’s decades of specialized experience,
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
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction and utility services built on decades of Louisiana experience
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Underground Utilities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete water, sewer, storm drainage, and gas line installation with advanced directional
                boring and trenchless technology.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Water & sewer infrastructure</li>
                <li>• Storm drainage systems</li>
                <li>• Natural gas distribution</li>
                <li>• Telecommunications installation</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Site Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From initial site preparation to final grading, we handle all aspects of civil construction and earthwork.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Site prep & excavation</li>
                <li>• Road construction & paving</li>
                <li>• Concrete foundations</li>
                <li>• Environmental remediation</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Specialized Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Emergency utility repairs, industrial maintenance, and tailored solutions for unique project challenges.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Emergency repairs</li>
                <li>• Industrial plant utilities</li>
                <li>• Municipal upgrades</li>
                <li>• Flood mitigation</li>
              </ul>
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
            “To provide exceptional construction and utility services that build stronger
            communities while maintaining the highest standards of safety, quality, and
            environmental responsibility.”
          </blockquote>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Every project is an opportunity to improve the communities we serve and build infrastructure
            that stands the test of time. We’re dedicated to realizing your vision with precision and care.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every choice we make is guided by these principles
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our company’s growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-700"></div>
            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transition-colors">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {m.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {m.event}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{m.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary-600 dark:bg-primary-700 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Meet Our Team
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
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
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors text-center">
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              OSHA Compliant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Full compliance with safety standards
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors text-center">
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Licensed Contractor
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              State-licensed construction contractor
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors text-center">
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              NUCA Member
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              National Association of Utility Contractors
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors text-center">
            <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Bonded & Insured
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Comprehensive insurance coverage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
