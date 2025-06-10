import React from 'react';
import { Shield, Award, Users, CheckCircle, AlertTriangle, HardHat, FileText, Clock } from 'lucide-react';
import { certifications } from '../data/mockData';

const Safety: React.FC = () => {
  const safetyStats = [
    { label: 'Safety Record', value: '99.9%', icon: Shield },
    { label: 'Work Hours Without Incident', value: '1M+', icon: Clock },
    { label: 'Certified Safety Personnel', value: '100%', icon: Users },
    { label: 'Safety Training Hours/Year', value: '2,400+', icon: HardHat }
  ];

  const safetyProtocols = [
    {
      title: 'Pre-Job Safety Planning',
      description: 'Comprehensive safety assessment and planning before every project begins',
      icon: FileText
    },
    {
      title: 'Daily Safety Briefings',
      description: 'Morning safety meetings to review hazards and safety procedures',
      icon: Users
    },
    {
      title: 'Personal Protective Equipment',
      description: 'Mandatory PPE requirements enforced on all job sites',
      icon: HardHat
    },
    {
      title: 'Hazard Identification',
      description: 'Continuous monitoring and identification of potential safety hazards',
      icon: AlertTriangle
    },
    {
      title: 'Emergency Response',
      description: 'Trained emergency response teams and procedures on every site',
      icon: Shield
    },
    {
      title: 'Safety Audits',
      description: 'Regular safety audits and inspections to maintain high standards',
      icon: CheckCircle
    }
  ];

  const trainingPrograms = [
    'OSHA 30-Hour Construction Safety',
    'Confined Space Entry',
    'Fall Protection',
    'Excavation and Trenching Safety',
    'Hazard Communication',
    'Emergency Response',
    'Equipment Operation Safety',
    'First Aid/CPR Certification'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative py-20 text-white">
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url(/images/umit-yildirim-9OB46apMbC4-unsplash.jpg)',
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
          <Shield className="w-10 h-10 text-white" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Safety <span className="text-secondary-400">First</span>, Always
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
        Our unwavering commitment to safety ensures every team member returns home safely 
        while delivering exceptional construction results
      </p>
    </div>
  </section>

      {/* Safety Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Safety Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our dedication to maintaining the highest safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-8 hover:bg-primary-50 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Safety Philosophy</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Southern Underground, safety isn't just a priority—it's our core value. We believe 
                  that every worker has the right to return home safely at the end of each day, and we 
                  make this possible through comprehensive safety programs, continuous training, and 
                  unwavering commitment to best practices.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our safety culture is built on the foundation that all incidents are preventable. 
                  Through proactive hazard identification, rigorous safety protocols, and ongoing 
                  education, we maintain one of the industry's best safety records.
                </p>
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero Incident Goal</h3>
                  <p className="text-gray-700">
                    Our ultimate goal is zero incidents. Every decision we make, every procedure we 
                    implement, and every training session we conduct is designed to achieve and 
                    maintain this standard.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/dean-bennett-aBV8pVODWiM-unsplash.jpg"
                alt="Safety equipment and construction site"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Protocols</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety measures implemented across all our projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyProtocols.map((protocol, index) => {
              const Icon = protocol.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{protocol.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{protocol.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Training Programs</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive training programs ensure every team member is equipped with the 
                knowledge and skills necessary to maintain the highest safety standards.
              </p>
              
              <div className="space-y-4">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Education</h3>
                <p className="text-gray-700 mb-4">
                  Safety training is an ongoing process. We conduct regular refresher courses, 
                  update training materials with the latest industry standards, and ensure all 
                  certifications remain current.
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">2,400+</div>
                  <div className="text-gray-700">Safety training hours annually</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Leadership</h3>
                <p className="text-gray-700 mb-4">
                  Our safety director and certified safety professionals lead by example, 
                  conducting regular site inspections and maintaining open communication 
                  channels for safety concerns.
                </p>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-secondary-500" />
                  <span className="text-gray-700">Certified Safety Professional on staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to safety is validated by industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon === 'Shield' ? Shield :
                                 cert.icon === 'Award' ? Award :
                                 cert.icon === 'Users' ? Users :
                                 CheckCircle;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Contact */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Safety Questions or Concerns?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            We encourage open communication about safety. If you have questions about our 
            safety procedures or want to report a concern, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:safety@southernunderground.com"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors"
            >
              Contact Safety Director
            </a>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors"
            >
              Emergency Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;