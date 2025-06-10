import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === parseInt(projectId || '0'));
  
  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary-600 hover:text-primary-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(p => 
    p.id !== project.id && p.category === project.category
  ).slice(0, 3);

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/projects" className="text-gray-500 hover:text-gray-700">Projects</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">{project.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Completed</div>
                    <div className="text-gray-600">{new Date(project.completionDate).toLocaleDateString()}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <User className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Client</div>
                    <div className="text-gray-600">{project.clientName}</div>
                  </div>
                </div>

                {project.details?.value && (
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <DollarSign className="w-6 h-6 text-primary-600" />
                    <div>
                      <div className="font-medium text-gray-900">Project Value</div>
                      <div className="text-gray-600">{project.details.value}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              {project.details && (
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Highlights</h3>
                  <div className="space-y-3">
                    {project.details.duration && (
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span className="text-gray-700">Duration: {project.details.duration}</span>
                      </div>
                    )}
                    {project.details.scope && (
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                        <span className="text-gray-700">{project.details.scope}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      {project.details && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Challenges</h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.details.challenges}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.details.solution}
                  </p>
                </div>
              </div>

              {/* Client Testimonial */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Feedback</h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="border-t pt-6">
                    <div className="font-semibold text-gray-900">{project.clientName}</div>
                    <div className="text-primary-600">{project.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Projects</h2>
              <p className="text-xl text-gray-600">
                More examples of our {project.category.toLowerCase()} work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{relatedProject.location}</span>
                      <Link
                        to={`/projects/${relatedProject.id}`}
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Interested in a Similar Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us to discuss how we can bring the same level of expertise 
            and quality to your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;