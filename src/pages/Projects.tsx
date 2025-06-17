import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const years = ['All', ...Array.from(new Set(projects.map(p => new Date(p.completionDate).getFullYear().toString()))).sort().reverse()];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || new Date(project.completionDate).getFullYear().toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/di-F1MlxlEpaOk-unsplash.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-secondary-400 dark:text-secondary-300">Project Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our successful project completions across Louisiana and beyond, showcasing our expertise in construction and utility services
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-gray-100">Filter Projects:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                        <span>Completed {new Date(project.completionDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {project.details?.value || 'Contact for Details'}
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                      >
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '$50M+', label: 'Total Project Value' },
              { value: '1,200+', label: 'Miles Installed' },
              { value: '99.9%', label: 'Safety Record' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Join our satisfied clients and let us bring your construction vision to life with the same quality and professionalism showcased in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 dark:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white dark:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
