// // src/pages/serviceDetail.tsx
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, CheckCircle } from 'lucide-react';
// import { enhancedServices, projects } from '../data/mockData';
// import * as Icons from 'lucide-react';

// const ServiceDetail: React.FC = () => {
//   const { serviceId } = useParams<{ serviceId: string }>();
//   const service = enhancedServices.find(s => s.id === serviceId);

//   if (!service) {
//     return (
//       <div className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//             Service Not Found
//           </h1>
//           <Link
//             to="/services"
//             className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
//           >
//             Back to Services
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const IconComponent = Icons[service.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
//   const relatedProjects = projects.filter(p =>
//     p.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
//   );

//   // New: convenience alias (supports either subServiceGroups or legacy subServices)
//   const groups =
//     (service as any).subServiceGroups ??
//     ((service as any).subServices && Array.isArray((service as any).subServices)
//       ? (service as any).subServices
//       : []);

//   return (
//     <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
//       {/* Breadcrumb */}
//       <div className="bg-gray-50 dark:bg-gray-800 py-4 transition-colors">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center space-x-2 text-sm">
//             <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
//               Home
//             </Link>
//             <span className="text-gray-400 dark:text-gray-500">/</span>
//             <Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
//               Services
//             </Link>
//             <span className="text-gray-400 dark:text-gray-500">/</span>
//             <span className="text-gray-900 dark:text-gray-100">{service.name}</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="py-20 bg-gradient-to-br from-primary-50 dark:from-gray-800 to-secondary-50 dark:to-gray-900 transition-colors">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link to="/services" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-8 font-medium">
//             <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
//           </Link>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-20 h-20 bg-primary-600 dark:bg-primary-700 rounded-xl flex items-center justify-center">
//                   <IconComponent className="w-10 h-10 text-white" />
//                 </div>
//                 <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{service.name}</h1>
//               </div>
//               <p className="text-xl text-gray-700 dark:text-gray-300">{service.detailedDescription}</p>
//             </div>
//             <img src={service.image} alt={service.name} className="rounded-2xl shadow-xl" />
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

//         {/* Overview */}
//         {service.overview && (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.overview}</p>
//           </section>
//         )}

//         {/* NEW: Sub‑Service Table of Contents */}
//         {Array.isArray(groups) && groups.length > 0 && (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">What We Offer</h2>
//             <div className="flex flex-wrap gap-3">
//               {groups.map((g: any) => (
//                 <a
//                   key={g.id}
//                   href={`#${g.id}`}
//                   className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
//                 >
//                   {g.title ?? g}
//                 </a>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* NEW: Sub‑Service Sections */}
//         {Array.isArray(groups) && groups.length > 0 && (
//           <section className="space-y-10">
//             {groups.map((g: any, idx: number) => (
//               <div
//                 key={g.id ?? idx}
//                 id={g.id ?? `group-${idx}`}
//                 className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
//               >
//                 <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
//                   {g.title ?? g}
//                 </h3>

//                 {/* Features */}
//                 {g.features && g.features.length > 0 && (
//                   <div className="mt-4">
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Features</h4>
//                     <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
//                       {g.features.map((f: string, i: number) => (
//                         <li key={i}>{f}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Procedures */}
//                 {g.procedures && g.procedures.length > 0 && (
//                   <div className="mt-6">
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Procedures</h4>
//                     <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
//                       {g.procedures.map((p: string, i: number) => (
//                         <li key={i}>{p}</li>
//                       ))}
//                     </ol>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </section>
//         )}

//         {/* Overall Features & Process */}
//         {(service.features?.length || service.process?.length) && (
//           <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {service.features?.length ? (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overall Key Features</h2>
//                 <div className="space-y-4">
//                   {service.features.map((feat: string, idx: number) => (
//                     <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                       <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-900 dark:text-gray-100">{feat}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : null}

//             {service.process?.length ? (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overall Process</h2>
//                 <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
//                   {service.process.map((step: string, idx: number) => (
//                     <li key={idx}>{step}</li>
//                   ))}
//                 </ol>
//               </div>
//             ) : null}
//           </section>
//         )}

//         {/* Applications */}
//         {service.applications?.length ? (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Applications</h2>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
//               {service.applications.map((app: string, idx: number) => (
//                 <li key={idx}>{app}</li>
//               ))}
//             </ul>
//           </section>
//         ) : null}

//         {/* Gallery */}
//         {service.gallery?.length ? (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Gallery</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {service.gallery.map((src: string, idx: number) => (
//                 <img key={idx} src={src} alt={`${service.name} ${idx + 1}`} className="rounded-lg shadow-md" />
//               ))}
//             </div>
//           </section>
//         ) : null}

//         {/* Related Services */}
//         {service.relatedServices?.length ? (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">You May Also Be Interested In</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {service.relatedServices.map((relId: string) => {
//                 const rel = enhancedServices.find(s => s.id === relId);
//                 if (!rel) return null;
//                 const RelIcon = Icons[rel.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
//                 return (
//                   <Link
//                     key={rel.id}
//                     to={`/services/${rel.id}`}
//                     className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-colors"
//                   >
//                     <div className="flex items-center space-x-3 mb-4">
//                       <RelIcon className="w-6 h-6 text-primary-600 dark:text-primary-300" />
//                       <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{rel.name}</h3>
//                     </div>
//                     <p className="text-gray-700 dark:text-gray-300">{rel.shortDescription}</p>
//                   </Link>
//                 );
//               })}
//             </div>
//           </section>
//         ) : null}

//         {/* Related Projects */}
//         {relatedProjects.length > 0 && (
//           <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {relatedProjects.map(project => (
//                 <Link
//                   key={project.id}
//                   to={`/projects/${project.id}`}
//                   className="block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-colors"
//                 >
//                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
//                     <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;
// src/pages/serviceDetail.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Award, Users,ArrowRight, Phone, Mail } from 'lucide-react';
import { enhancedServices, projects } from '../data/mockData';
import * as Icons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = enhancedServices.find(s => s.id === serviceId);
  const [activeTab, setActiveTab] = useState('overview');

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Icons.FileText },
    { id: 'features', label: 'Features', icon: Icons.CheckCircle },
    { id: 'process', label: 'Process', icon: Icons.GitBranch },
    { id: 'gallery', label: 'Gallery', icon: Icons.Image }
  ];

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
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-8 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{service.name}</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                      <Award className="w-4 h-4 mr-1" />
                      Expert Service
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <Clock className="w-4 h-4 mr-1" />
                      Fast Delivery
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{service.detailedDescription}</p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src={service.image} alt={service.name} className="rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Overview */}
            {service.overview && (
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Service Overview</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{service.overview}</p>
                </div>
              </section>
            )}

            {/* Sub-Service Table of Contents */}
            {Array.isArray(groups) && groups.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groups.map((g: any, index: number) => (
                    <a
                      key={g.id || index}
                      href={`#${g.id || `group-${index}`}`}
                      className="group p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {g.title ?? g}
                        </h3>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Sub-Service Sections */}
            {Array.isArray(groups) && groups.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Detailed Services</h2>
                {groups.map((g: any, idx: number) => (
                  <div
                    key={g.id ?? idx}
                    id={g.id ?? `group-${idx}`}
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center mr-3">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      {g.title ?? g}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Features */}
                      {g.features && g.features.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Key Features
                          </h4>
                          <div className="space-y-3">
                            {g.features.map((f: string, i: number) => (
                              <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Procedures */}
                      {g.procedures && g.procedures.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                            <Icons.GitBranch className="w-5 h-5 text-blue-500 mr-2" />
                            Process Steps
                          </h4>
                          <div className="space-y-3">
                            {g.procedures.map((p: string, i: number) => (
                              <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                  {i + 1}
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{p}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Service Features</h2>
            {service.features?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No specific features listed for this service.</p>
            )}
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Process</h2>
            {service.process?.length ? (
              <div className="space-y-6">
                {service.process.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Step {idx + 1}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No specific process steps listed for this service.</p>
            )}
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Project Gallery</h2>
            {service.gallery?.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.gallery.map((src: string, idx: number) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={src} 
                      alt={`${service.name} ${idx + 1}`} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold">Project {idx + 1}</p>
                        <p className="text-sm opacity-90">{service.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Icons.Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Gallery coming soon for this service.</p>
              </div>
            )}
          </div>
        )}

        {/* Applications */}
        {service.applications?.length ? (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.applications.map((app: string, idx: number) => (
                <div key={idx} className="p-4 bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{app}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Related Services */}
        {service.relatedServices?.length ? (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.relatedServices.map((relId: string) => {
                const rel = enhancedServices.find(s => s.id === relId);
                if (!rel) return null;
                const RelIcon = Icons[rel.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>>;
                return (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.id}`}
                    className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <RelIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{rel.name}</h3>
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
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(project => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
            Contact our experts for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 group"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

