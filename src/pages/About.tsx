import React from 'react';
import { Calendar, Users, Award, Shield, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { teamMembers, companyStats } from '../data/mockData';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in every interaction.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver superior results and efficiency.'
    },
    {
      icon: Award,
      title: 'Safety',
      description: 'Safety is our top priority, ensuring zero incidents through comprehensive training and protocols.'
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description: 'We are committed to supporting and strengthening the communities where we work and live.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Company Founded', description: 'Southern Underground established in Zachary, Louisiana' },
    { year: '2017', event: 'First Major Contract', description: 'Secured first multi-million dollar municipal project' },
    { year: '2019', event: 'Regional Expansion', description: 'Extended operations across Louisiana and Mississippi' },
    { year: '2021', event: 'Equipment Upgrade', description: 'Invested in state-of-the-art directional boring equipment' },
    { year: '2023', event: 'Safety Milestone', description: 'Achieved 1 million work hours without lost-time incident' },
    { year: '2024', event: 'National Recognition', description: 'Received industry excellence award for project innovation' }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>About | Southern Underground</title>
        <meta name="description" content="Learn about Southern Underground, our history and dedication to quality utility construction." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building Louisiana's <span className="text-primary-600">Future</span> Since 2015
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Southern Underground of Louisiana has grown from a small local contractor to a regional leader 
                  in construction and utility services, driven by our commitment to excellence and innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => {
                  const IconComponent = stat.icon === 'Calendar' ? Calendar : 
                                      stat.icon === 'CheckCircle' ? CheckCircle :
                                      stat.icon === 'Route' ? Target :
                                      Shield;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8">
              "To provide exceptional construction and utility services that build stronger communities 
              while maintaining the highest standards of safety, quality, and environmental responsibility."
            </blockquote>
            <p className="text-lg text-gray-600">
              We believe that every project is an opportunity to make a positive impact on the communities 
              we serve, creating infrastructure that will benefit generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">OSHA Compliant</h3>
              <p className="text-gray-600 text-sm">Full compliance with safety standards</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Contractor</h3>
              <p className="text-gray-600 text-sm">State-licensed construction contractor</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">NUCA Member</h3>
              <p className="text-gray-600 text-sm">National Association of Utility Contractors</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Bonded & Insured</h3>
              <p className="text-gray-600 text-sm">Comprehensive insurance coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;