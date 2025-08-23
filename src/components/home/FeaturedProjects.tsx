import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
  {
    id: 101,
    title: 'Town of Oberlin – Sanitary Sewer System Improvements',
    description:
      'Citywide sanitary sewer assessment and rehabilitation to reduce inflow and infiltration (I&I).',
    category: 'Wastewater/Sewer',
    image: '/images/Gemini_Generated_Image_bjxysubjxysubjxy.png',
    completionDate: '2024-12-15',
    clientName: 'Town of Oberlin',
    location: 'Oberlin, LA',
    testimonial:
      'Southern Underground executed our system rehab with professionalism and clear communication from start to finish.',
    details: {
      duration: 'Ongoing Program',
      value: '$2.4M',
      scope: [
        'Smoke testing of ~100,000 LF of sanitary sewer mains and 322 manholes',
        'CCTV inspection of ~100,000 LF of sanitary sewer mains',
        'Targeted rehabilitation of mains and manholes to reduce inflow & infiltration (I&I)'
      ],
      challenges: 'Wide system coverage and coordination across many segments of the collection network',
      solution: 'Sequenced testing and CCTV, then prioritized rehab for the highest I&I reduction impact'
    }
  },
  {
    id: 102,
    title: 'Iberville Parish Council – Sewer System Improvements',
    description:
      'Investigation and rehabilitation to reduce I&I within the South Plaquemine Sewer Collection System.',
    category: 'Wastewater/Sewer',
    image: '/images/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg',
    completionDate: '2024-10-30',
    clientName: 'Iberville Parish Council',
    location: 'Plaquemine, LA',
    testimonial:
      'Exceptional field execution and documentation. The team’s approach accelerated decision‑making for rehab work.',
    details: {
      duration: 'Program Phase',
      value: '$2.0M',
      scope: [
        'Smoke testing of ~37,000 LF of sanitary sewer mains and 121 manholes',
        'CCTV inspection of ~37,000 LF of sanitary sewer mains',
        'Rehabilitation of mains/manholes to reduce I&I in South Plaquemine'
      ],
      challenges: 'Maintaining service and access in active neighborhoods',
      solution: 'Block‑by‑block coordination, traffic control, and staged testing to limit disruption'
    }
  },
  {
    id: 103,
    title: 'Baker Water and Gas Distribution System Improvements',
    description:
      'Water and gas distribution improvements including high‑pressure gas pipeline work with enhanced safety protocols.',
    category: 'Water / Gas Distribution',
    image: '/images/fleur-dQf7RZhMOJU-unsplash.jpg',
    completionDate: '2024-08-15',
    clientName: 'City of Baker',
    location: 'Baker, LA',
    testimonial:
      'Safety and quality were clearly the priority. The crews delivered a strong result on a complex scope.',
    details: {
      duration: '6 months',
      value: '$1.9M',
      scope: [
        'High‑pressure gas pipeline installation for critical distribution',
        'Implementation of specialized safety protocols and inspections'
      ],
      challenges: 'Coordinating shutdown windows and maintaining community safety around work zones',
      solution: 'Phased tie‑ins, enhanced safety monitoring, and stakeholder communication'
    }
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
            <div className="relative min-h-[350px] max-h-[500px] h-[400px]">
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none"
                style={{ objectPosition: 'center' }}
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
                      {projects[currentProject].details.value}
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