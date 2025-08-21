// src/pages/serviceDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { enhancedServices, projects } from '../data/mockData';
import * as Icons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = enhancedServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Service Not Found
          </h1>
          <Link
            to="/services"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
  const relatedProjects = projects.filter(p =>
    p.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
  );

  // New: convenience alias (supports either subServiceGroups or legacy subServices)
  const groups =
    (service as any).subServiceGroups ??
    ((service as any).subServices && Array.isArray((service as any).subServices)
      ? (service as any).subServices
      : []);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              Home
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              Services
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 dark:from-gray-800 to-secondary-50 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-primary-600 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{service.name}</h1>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300">{service.detailedDescription}</p>
            </div>
            <img src={service.image} alt={service.name} className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Overview */}
        {service.overview && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.overview}</p>
          </section>
        )}

        {/* NEW: Sub‑Service Table of Contents */}
        {Array.isArray(groups) && groups.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">What We Offer</h2>
            <div className="flex flex-wrap gap-3">
              {groups.map((g: any) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  {g.title ?? g}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* NEW: Sub‑Service Sections */}
        {Array.isArray(groups) && groups.length > 0 && (
          <section className="space-y-10">
            {groups.map((g: any, idx: number) => (
              <div
                key={g.id ?? idx}
                id={g.id ?? `group-${idx}`}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {g.title ?? g}
                </h3>

                {/* Features */}
                {g.features && g.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {g.features.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Procedures */}
                {g.procedures && g.procedures.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Procedures</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {g.procedures.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Overall Features & Process */}
        {(service.features?.length || service.process?.length) && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {service.features?.length ? (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overall Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 dark:text-gray-100">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {service.process?.length ? (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overall Process</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {service.process.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            ) : null}
          </section>
        )}

        {/* Applications */}
        {service.applications?.length ? (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Applications</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {service.applications.map((app: string, idx: number) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Gallery */}
        {service.gallery?.length ? (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((src: string, idx: number) => (
                <img key={idx} src={src} alt={`${service.name} ${idx + 1}`} className="rounded-lg shadow-md" />
              ))}
            </div>
          </section>
        ) : null}

        {/* Related Services */}
        {service.relatedServices?.length ? (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">You May Also Be Interested In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.relatedServices.map((relId: string) => {
                const rel = enhancedServices.find(s => s.id === relId);
                if (!rel) return null;
                const RelIcon = Icons[rel.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
                return (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.id}`}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <RelIcon className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{rel.name}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{rel.shortDescription}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(project => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-colors"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
