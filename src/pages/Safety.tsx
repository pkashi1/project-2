import React from 'react';
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  AlertTriangle,
  HardHat,
  FileText,
  Clock,
} from 'lucide-react';
import { certifications } from '../data/mockData';

const Safety: React.FC = () => {
  const safetyStats = [
    { label: 'Safety Record', value: '99.9%', icon: Shield },
    { label: 'Work Hours Without Incident', value: '1M+', icon: Clock },
    { label: 'Certified Safety Personnel', value: '100%', icon: Users },
    { label: 'Safety Training Hours/Year', value: '3,000+', icon: HardHat },
  ];

  const safetyProtocols = [
    {
      title: 'Pre-Job Safety Planning',
      description: 'Comprehensive safety assessment and planning before every project begins',
      icon: FileText,
    },
    {
      title: 'Daily Safety Briefings',
      description: 'Morning safety meetings to review hazards and safety procedures',
      icon: Users,
    },
    {
      title: 'Personal Protective Equipment',
      description: 'Mandatory PPE requirements enforced on all job sites',
      icon: HardHat,
    },
    {
      title: 'Hazard Identification',
      description: 'Continuous monitoring and identification of potential safety hazards',
      icon: AlertTriangle,
    },
    {
      title: 'Emergency Response',
      description: 'Trained emergency response teams and procedures on every site',
      icon: Shield,
    },
    {
      title: 'Safety Audits',
      description: 'Regular safety audits and inspections to maintain high standards',
      icon: CheckCircle,
    },
  ];

  const trainingPrograms = [
    'OSHA 30-Hour Construction Safety',
    'Confined Space Entry',
    'Fall Protection',
    'Excavation and Trenching Safety',
    'Hazard Communication',
    'Emergency Response',
    'Equipment Operation Safety',
    'First Aid/CPR Certification',
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/umit-yildirim-9OB46apMbC4-unsplash.jpg)' }}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent leading-tight pb-2">
              Safety <span className="text-secondary-300">First</span>, Always
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Our unwavering commitment to safety ensures every team member returns home safely while delivering exceptional construction results
            </p>
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Safety Record</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our dedication to maintaining the highest safety standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Safety Philosophy</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Southern Underground, safety isn't just a priority—it's our core value. We believe that every worker has the right to return home safely at the end of each day, and we make this possible through comprehensive safety programs, continuous training, and unwavering commitment to best practices.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our safety culture is built on the foundation that all incidents are preventable. Through proactive hazard identification, rigorous safety protocols, and ongoing education, we maintain one of the industry's best safety records.
                </p>
                {/* <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-6 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Zero Incident Goal</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our ultimate goal is zero incidents. Every decision we make, every procedure we implement, and every training session we conduct is designed to achieve and maintain this standard.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/downtown-construction.png"
                alt="Safety equipment and construction site"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Training Programs */}

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Safety Training Programs</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive training programs ensure every team member is equipped with the knowledge and skills necessary to maintain the highest safety standards.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - First 4 programs */}
            <div className="space-y-4">
              {trainingPrograms.slice(0, 4).map((prog, i2) => (
                <div
                  key={i2}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{prog}</span>
                </div>
              ))}
            </div>
            
            {/* Right Column - Last 4 programs */}
            <div className="space-y-4">
              {trainingPrograms.slice(4, 8).map((prog, i2) => (
                <div
                  key={i2 + 4}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Certifications */}
     <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Safety Certifications
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our commitment to safety is validated by industry-leading certifications
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {/* Drug Free Workplace */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
        <img
          src="/images/safety/drug free.jpg"
          alt="Drug Free Workplace Certification"
          className="2-40 h-24 object-contain mb-4 rounded-lg shadow"
        />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Drug Free Workplace
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
          Certified Drug Free Workplace for enhanced safety and compliance.
        </p>
      </div>

      {/* General Safety Certification */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
        <img
          src="/images/certifications/alliance-logo.webp"
          alt="General Safety Certification"
          className="2-40 h-24 object-contain mb-4 rounded-lg shadow"
        />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          General Safety Certification
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
          Recognized for maintaining the highest safety standards in the industry.
        </p>
      </div>

      {/* Licensed, Bonded & Insured */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
        <img
          src="/images/certifications/licensed-bonded-insured-vector-icon-business-86546455-removebg-preview.png"
          alt="Licensed Bonded Insured"
          className="2-40 h-24 object-contain mb-4 rounded-lg shadow"
        />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Licensed, Bonded & Insured
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
          Fully licensed, bonded, and insured for your protection and confidence.
        </p>
      </div>

      {/* OSHA / Industry Compliance */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
        <img
          src="/images/certifications/OIP.webp"
          alt="Industry Safety Compliance"
          className="w-50 h-24 object-contain mb-4 rounded-lg shadow"
        />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Industry Safety Compliance
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
          Compliant with OSHA and industry safety regulations to ensure safe operations.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Safety;
