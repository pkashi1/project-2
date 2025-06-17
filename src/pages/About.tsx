import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      number: '9+',
      label: 'Years of Experience',
      icon: Clock
    },
    {
      number: '500+',
      label: 'Projects Completed',
      icon: CheckCircle
    },
    {
      number: '1,200+',
      label: 'Miles Installed',
      icon: Target
    },
    {
      number: '99.9%',
      label: 'Safety Record',
      icon: Shield
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of our workers, clients, and communities in every project we undertake.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality ensures that every project meets the highest industry standards and exceeds client expectations.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'We believe in the power of teamwork and maintain strong partnerships with clients, subcontractors, and communities.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'We are dedicated to making a positive impact in the communities we serve through responsible construction practices.'
    }
  ];

  const team = [
    {
      name: 'John Davis',
      position: 'Founder & CEO',
      description: 'With over 15 years in civil construction, John leads our company with vision and expertise.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Operations Director',
      description: 'Sarah ensures seamless project execution and maintains our high standards of quality.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mike Rodriguez',
      position: 'Safety Manager',
      description: 'Mike oversees all safety protocols and maintains our excellent safety record.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-primary-600 dark:text-primary-400">Southern Underground</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Building Louisiana's infrastructure with precision, safety, and unwavering commitment to excellence since 2015.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2015 in the heart of Louisiana, Southern Underground began with a simple mission: 
                  to provide exceptional civil construction and utility installation services that build the 
                  foundation for thriving communities.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small team of dedicated professionals has grown into one of Louisiana's 
                  most trusted construction companies. We've successfully completed over 500 projects across 
                  the state, from small residential developments to major municipal infrastructure upgrades.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expertise spans directional boring, utility installation, pile installation, and 
                  comprehensive civil construction services. Every project we undertake reflects our 
                  commitment to safety, quality, and client satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we complete
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            To build the infrastructure that connects communities, powers economic growth, and 
            enhances quality of life throughout Louisiana and beyond. We are committed to delivering 
            projects that stand the test of time while maintaining the highest standards of safety 
            and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your infrastructure project to life with 
            our expertise and commitment to excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;