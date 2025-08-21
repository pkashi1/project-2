import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    // {
    //   id: 1,
    //   title: 'Downtown Baton Rouge Utility Upgrade',
    //   description: 'Upgrade the whole 12-block downtown area\'s utility infrastructure, including the water, sewage, and telecommunications systems.',
    //   image: '/images/downtown-construction.png',
    //   category: 'Utility Installation',
    //   location: 'Baton Rouge, LA',
    //   completionDate: '2024-02-15',
    //   value: '$2.4M'
    // },
    {
      id: 2,
      title: 'Industrial Gas Pipeline Installation at Lake Charles',
      description: 'High-pressure gas pipeline installation for petrochemical facility with specialized safety protocols.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Directional Boring',
      location: 'Lake Charles, LA',
      completionDate: '2023-11-30',
      value: '$1.8M'
    },
    {
      id: 3,
      title: 'Residential Subdivision Development',
      description: 'Complete utility infrastructure for 200-home subdivision including water, sewer, gas, and electrical.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Civil Construction',
      location: 'Zachary, LA',
      completionDate: '2024-01-20',
      value: '$3.2M'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise through successful project completions across Louisiana and beyond
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                      <span>{projects[currentProject].location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                      <span>Completed {new Date(projects[currentProject].completionDate).toLocaleDateString()}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {projects[currentProject].value}
                    </div>
                  </div>

                  <Link
                    to={`/projects/${projects[currentProject].id}`}
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                  >
                    View Project Details
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-primary-600 dark:bg-primary-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;