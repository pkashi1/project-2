// 'use client';

// import React, { useState, useRef } from 'react';
// import {
//   MapPin,
//   Clock,
//   DollarSign,
//   Users,
//   Award,
//   Heart,
//   CheckCircle,
//   Send,
// } from 'lucide-react';
// import { jobOpenings } from '../data/mockData';
// import { useLanguage } from '../contexts/LanguageContext';

// const TRANSLATIONS = {
//   en: {
//     joinTeam: "Join Our Team",
//     joinTeamDesc: "Build your career with Louisiana's leading construction company. We offer competitive benefits, professional growth, and a commitment to safety.",
//     whyWork: "Why Work With Us?",
//     culturePara1: "At Southern Underground, we believe our employees are our greatest asset. We foster a culture of safety, innovation, and professional growth where every team member can thrive and advance their career.",
//     culturePara2: "Join a company that values integrity, promotes from within, and provides the tools and training you need to succeed in the construction industry.",
//     ourPromise: "Our Promise",
//     promiseDesc: "We're committed to providing a safe, supportive work environment where you can build a rewarding career while making a positive impact on communities across Louisiana and beyond.",
//     employeeBenefits: "Employee Benefits",
//     employeeBenefitsDesc: "We offer comprehensive benefits to support you and your family",
//     b1: "Competitive Salary", b1d: "Industry-leading compensation packages with performance bonuses",
//     b2: "Health & Wellness", b2d: "Comprehensive health, dental, and vision insurance coverage",
//     b3: "401(k) Plan", b3d: "Retirement savings plan with generous company matching",
//     b4: "Paid Time Off", b4d: "Generous vacation, sick leave, and holiday pay policies",
//     b5: "Professional Development", b5d: "Training opportunities and career advancement programs",
//     b6: "Job Security", b6d: "Stable employment with a growing, established company",
//     currentOpenings: "Current Openings",
//     currentOpeningsDesc: "Explore exciting career opportunities with our growing team",
//     viewDetails: "View Details", closeDetails: "Close Details", posted: "Posted",
//     requirements: "Requirements", benefits: "Benefits",
//     applyFor: "Apply for This Position", applyPosition: "Apply for Position", applyingFor: "Applying for:",
//     fullName: "Full Name *", email: "Email Address *", phone: "Phone Number *",
//     exp: "Years of Experience", selectExp: "Select experience level",
//     exp1: "0-2 years", exp2: "3-5 years", exp3: "6-10 years", exp4: "10+ years",
//     resume: "Resume/CV *", resumeFormats: "Accepted formats: PDF, DOC, DOCX (Max 5MB)",
//     coverLetter: "Cover Letter / Additional Information",
//     coverLetterPH: "Tell us why you're interested in this position and what makes you a great fit...",
//     submitting: "Submitting...", submit: "Submit Application", cancel: "Cancel",
//     appSuccess: "Application submitted successfully! 🎉",
//     appFailed: "Submission failed. Please try again.",
//     serverError: "Server error. Please try again later.",
//     equal: "Equal Opportunity Employer",
//     equalDesc: "Southern Underground is an equal opportunity employer committed to diversity and inclusion. We welcome applications from all qualified candidates regardless of race, gender, age, religion, sexual orientation, or disability status.",
//     contactHR: "Contact HR Department", call: "Call (225) 555-0123",
//     english: "English", spanish: "Español",
//   },
//   es: {
//     joinTeam: "Únete a Nuestro Equipo",
//     joinTeamDesc: "Construye tu carrera con la principal empresa de construcción de Louisiana. Ofrecemos beneficios competitivos, crecimiento profesional y un compromiso con la seguridad.",
//     whyWork: "¿Por qué Trabajar con Nosotros?",
//     culturePara1: "En Southern Underground, creemos que nuestros empleados son nuestro mayor activo. Fomentamos una cultura de seguridad, innovación y crecimiento profesional donde cada miembro del equipo puede prosperar y avanzar en su carrera.",
//     culturePara2: "Únete a una empresa que valora la integridad, promueve desde dentro y proporciona las herramientas y la formación necesarias para triunfar en la industria de la construcción.",
//     ourPromise: "Nuestra Promesa",
//     promiseDesc: "Nos comprometemos a proporcionar un entorno de trabajo seguro y de apoyo donde puedas desarrollar una carrera gratificante y tener un impacto positivo en las comunidades de Louisiana y más allá.",
//     employeeBenefits: "Beneficios para Empleados",
//     employeeBenefitsDesc: "Ofrecemos beneficios integrales para apoyarte a ti y a tu familia",
//     b1: "Salario Competitivo", b1d: "Paquetes de compensación líderes en la industria con bonificaciones por desempeño",
//     b2: "Salud y Bienestar", b2d: "Cobertura integral de salud, dental y visión",
//     b3: "Plan 401(k)", b3d: "Plan de ahorro para el retiro con generosas aportaciones de la empresa",
//     b4: "Tiempo Libre Pagado", b4d: "Generosas políticas de vacaciones, licencia por enfermedad y días festivos",
//     b5: "Desarrollo Profesional", b5d: "Oportunidades de capacitación y programas de avance profesional",
//     b6: "Estabilidad Laboral", b6d: "Empleo estable en una empresa consolidada y en crecimiento",
//     currentOpenings: "Vacantes Actuales",
//     currentOpeningsDesc: "Descubre emocionantes oportunidades de carrera con nuestro equipo en crecimiento",
//     viewDetails: "Ver Detalles", closeDetails: "Cerrar Detalles", posted: "Publicado",
//     requirements: "Requisitos", benefits: "Beneficios",
//     applyFor: "Aplicar para este Puesto", applyPosition: "Aplicar para el Puesto", applyingFor: "Aplicando para:",
//     fullName: "Nombre Completo *", email: "Correo Electrónico *", phone: "Número de Teléfono *",
//     exp: "Años de Experiencia", selectExp: "Seleccione nivel de experiencia",
//     exp1: "0-2 años", exp2: "3-5 años", exp3: "6-10 años", exp4: "10+ años",
//     resume: "Currículum *", resumeFormats: "Formatos aceptados: PDF, DOC, DOCX (Máx 5MB)",
//     coverLetter: "Carta de Presentación / Información Adicional",
//     coverLetterPH: "Cuéntanos por qué te interesa este puesto y qué te hace un gran candidato...",
//     submitting: "Enviando...", submit: "Enviar Solicitud", cancel: "Cancelar",
//     appSuccess: "¡Solicitud enviada con éxito! 🎉",
//     appFailed: "Error al enviar. Por favor inténtalo de nuevo.",
//     serverError: "Error del servidor. Por favor inténtalo más tarde.",
//     equal: "Empleador de Igualdad de Oportunidades",
//     equalDesc: "Southern Underground es un empleador de igualdad de oportunidades comprometido con la diversidad y la inclusión. Aceptamos solicitudes de todos los candidatos calificados sin importar raza, género, edad, religión, orientación sexual o discapacidad.",
//     contactHR: "Contactar RRHH", call: "Llama al (225) 555-0123",
//     english: "Inglés", spanish: "Español",
//   },
// };

// // Helper function to pick the correct language value with fallback to English
// function pick(val: any, locale: 'en' | 'es'): string {
//   if (typeof val === 'string') return val;
//   if (typeof val === 'object' && val !== null) {
//     return val[locale] ?? val.en ?? '';
//   }
//   return '';
// }

// // Helper function for arrays with bilingual content
// function pickArray(val: any, locale: 'en' | 'es'): string[] {
//   if (Array.isArray(val)) return val;
//   if (typeof val === 'object' && val !== null) {
//     return val[locale] ?? val.en ?? [];
//   }
//   return [];
// }

// const Careers: React.FC = () => {
//   const { lang, toggleLang } = useLanguage();
//   const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || key;
  
//   const applicationFormRef = useRef<HTMLDivElement>(null);
//   const [selectedJob, setSelectedJob] = useState<number | null>(null);
//   const [applicationData, setApplicationData] = useState({
//     name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null as File | null,
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [formMsg, setFormMsg] = useState('');

//   const benefits = [
//     { icon: DollarSign, title: t('b1'), description: t('b1d') },
//     { icon: Heart, title: t('b2'), description: t('b2d') },
//     { icon: Award, title: t('b3'), description: t('b3d') },
//     { icon: Clock, title: t('b4'), description: t('b4d') },
//     { icon: Users, title: t('b5'), description: t('b5d') },
//     { icon: CheckCircle, title: t('b6'), description: t('b6d') },
//   ];

//   const handleApplicationSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormMsg(''); setSubmitting(true);
//     try {
//       const payload = new FormData();
//       Object.entries(applicationData).forEach(([k, v]) => {
//         if (k === 'resume') return; payload.append(k, v as string);
//       });
//       if (applicationData.resume) payload.append('resume', applicationData.resume);
//       const res = await fetch('http://localhost:5050/api/job/apply', { method: 'POST', body: payload });
//       const data = await res.json();
//       if (res.ok) {
//         setFormMsg(t('appSuccess'));
//         setTimeout(() => {
//           setFormMsg(''); setSelectedJob(null);
//           setApplicationData({ name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null });
//         }, 3000);
//       } else setFormMsg(data.msg || t('appFailed'));
//     } catch { setFormMsg(t('serverError')); }
//     setSubmitting(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setApplicationData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setApplicationData((prev) => ({ ...prev, resume: file }));
//   };

//   return (
//     <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
//       {/* Language toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button onClick={toggleLang} className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700 transition-colors">
//           {lang === 'en' ? t('spanish') : t('english')}
//         </button>
//       </div>

//       {/* Hero */}
//       <section className="relative py-20 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Gemini_Generated_Image_bjxysubjxysubjxy.png)' }}>
//           <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" />
//         </div>
        
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="animate-fade-in-up">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent leading-tight pb-2">{t('joinTeam')}</h1>
//             <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">{t('joinTeamDesc')}</p>
//           </div>
//         </div>
//       </section>
//       {/* Company Culture */}
//       <section className="py-20 bg-white dark:bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('whyWork')}</h2>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('culturePara1')}</p>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t('culturePara2')}</p>
//             <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('ourPromise')}</h3>
//               <p className="text-gray-700 dark:text-gray-300">{t('promiseDesc')}</p>
//             </div>
//           </div>
//           <div className="relative">
//             <img src="/images/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg" alt="Construction team at work" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-20 bg-gray-50 dark:bg-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('employeeBenefits')}</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('employeeBenefitsDesc')}</p>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((b, i) => {
//             const Icon = b.icon;
//             return (
//               <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
//                 <div className="mb-4">
//                   <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
//                     <Icon className="w-8 h-8 text-primary-600 dark:text-primary-300" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{b.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{b.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Current Openings */}
//       <section className="py-20 bg-white dark:bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('currentOpenings')}</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('currentOpeningsDesc')}</p>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
//           {jobOpenings.filter((job) => job.isActive).map((job) => (
//             <div key={job.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{pick(job.title, lang)}</h3>
//                   <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium mb-4">{pick(job.type, lang)}</span>
//                   <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
//                     <div className="flex items-center space-x-1"><Users className="w-4 h-4" /><span>{pick(job.department, lang)}</span></div>
//                     <div className="flex items-center space-x-1"><MapPin className="w-4 h-4" /><span>{job.location}</span></div>
//                     <div className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{t('posted')} {new Date(job.postDate).toLocaleDateString(lang)}</span></div>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 mb-6">{pick(job.description, lang)}</p>
//                 </div>
//                 <div className="mt-6 lg:mt-0">
//                   <button onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)} className="px-6 py-3 bg-primary-600 dark:bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors">
//                     {selectedJob === job.id ? t('closeDetails') : t('viewDetails')}
//                   </button>
//                 </div>
//               </div>

//               {selectedJob === job.id && (
//                 <div className="mt-8 border-t pt-8 border-gray-200 dark:border-gray-700 grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('requirements')}</h4>
//                     <ul className="space-y-2">
//                       {pickArray(job.requirements, lang).map((r, i) => (
//                         <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
//                           <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" /><span>{r}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('benefits')}</h4>
//                     <ul className="space-y-2">
//                       {pickArray(job.benefits, lang).map((b, i) => (
//                         <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
//                           <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" /><span>{b}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="md:col-span-2 text-center mt-6">
//                     <button onClick={() => { setApplicationData((p) => ({ ...p, position: pick(job.title, lang) })); setTimeout(() => applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="px-8 py-3 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors">
//                       {t('applyFor')}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Application Form */}
//       {applicationData.position && (
//         <section className="py-20 bg-gray-50 dark:bg-gray-700" ref={applicationFormRef}>
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('applyPosition')}</h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{t('applyingFor')} <span className="font-semibold text-primary-600 dark:text-primary-400">{applicationData.position}</span></p>
//               <form onSubmit={handleApplicationSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('fullName')}</label><input type="text" name="name" value={applicationData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" /></div>
//                   <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('email')}</label><input type="email" name="email" value={applicationData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" /></div>
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('phone')}</label><input type="tel" name="phone" value={applicationData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" /></div>
//                   <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('exp')}</label><select name="experience" value={applicationData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="">{t('selectExp')}</option><option value="0-2">{t('exp1')}</option><option value="3-5">{t('exp2')}</option><option value="6-10">{t('exp3')}</option><option value="10+">{t('exp4')}</option></select></div>
//                 </div>
//                 <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('resume')}</label><input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" /><p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('resumeFormats')}</p></div>
//                 <div><label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('coverLetter')}</label><textarea name="message" rows={4} value={applicationData.message} onChange={handleInputChange} placeholder={t('coverLetterPH')} className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" /></div>
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <button type="submit" disabled={submitting} className="flex-1 px-6 py-3 bg-primary-600 dark:bg-primary-700 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"><Send className="w-5 h-5 mr-2" />{submitting ? t('submitting') : t('submit')}</button>
//                   <button type="button" onClick={() => setApplicationData((prev) => ({ ...prev, position: '' }))} className="flex-1 px-6 py-3 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">{t('cancel')}</button>
//                 </div>
//                 {formMsg && <p className={`mt-4 text-center ${formMsg.includes("successfully") || formMsg.includes("éxito") ? "text-green-600" : "text-red-500"}`}>{formMsg}</p>}
//               </form>
//             </div>
//           </div>
//         </section>
//       )}

//     </div>
//   );
// };

// export default Careers;

'use client';

import React, { useState, useRef } from 'react';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award,
  Heart,
  CheckCircle,
  Send,
} from 'lucide-react';
import { jobOpenings } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const TRANSLATIONS = {
  en: {
    joinTeam: "Join Our Team",
    joinTeamDesc: "Build your career with Louisiana's leading construction company. We offer competitive benefits, professional growth, and a commitment to safety.",
    whyWork: "Why Work With Us?",
    culturePara1: "At Southern Underground, we believe our employees are our greatest asset. We foster a culture of safety, innovation, and professional growth where every team member can thrive and advance their career.",
    culturePara2: "Join a company that values integrity, promotes from within, and provides the tools and training you need to succeed in the construction industry.",
    ourPromise: "Our Promise",
    promiseDesc: "We're committed to providing a safe, supportive work environment where you can build a rewarding career while making a positive impact on communities across Louisiana and beyond.",
    employeeBenefits: "Employee Benefits",
    employeeBenefitsDesc: "We offer comprehensive benefits to support you and your family",
    b1: "Competitive Salary", b1d: "Industry-leading compensation packages with performance bonuses",
    b2: "Health & Wellness", b2d: "Comprehensive health, dental, and vision insurance coverage",
    b3: "401(k) Plan", b3d: "Retirement savings plan with generous company matching",
    b4: "Paid Time Off", b4d: "Generous vacation, sick leave, and holiday pay policies",
    b5: "Professional Development", b5d: "Training opportunities and career advancement programs",
    b6: "Job Security", b6d: "Stable employment with a growing, established company",
    currentOpenings: "Current Openings",
    currentOpeningsDesc: "Explore exciting career opportunities with our growing team",
    viewDetails: "View Details", closeDetails: "Close Details", posted: "Posted",
    requirements: "Requirements", benefits: "Benefits",
    applyFor: "Apply for This Position", applyPosition: "Apply for Position", applyingFor: "Applying for:",
    fullName: "Full Name *", email: "Email Address *", phone: "Phone Number *",
    exp: "Years of Experience", selectExp: "Select experience level",
    exp1: "0-2 years", exp2: "3-5 years", exp3: "6-10 years", exp4: "10+ years",
    resume: "Resume/CV *", resumeFormats: "Accepted formats: PDF, DOC, DOCX (Max 5MB)",
    coverLetter: "Cover Letter / Additional Information",
    coverLetterPH: "Tell us why you're interested in this position and what makes you a great fit...",
    submitting: "Submitting...", submit: "Submit Application", cancel: "Cancel",
    appSuccess: "Application submitted successfully! 🎉",
    appFailed: "Submission failed. Please try again.",
    serverError: "Server error. Please try again later.",
    equal: "Equal Opportunity Employer",
    equalDesc: "Southern Underground is an equal opportunity employer committed to diversity and inclusion. We welcome applications from all qualified candidates regardless of race, gender, age, religion, sexual orientation, or disability status.",
    contactHR: "Contact HR Department", call: "Call (225) 555-0123",
    english: "English", spanish: "Español",
    noOpenings: "No Current Openings",
    noOpeningsDesc: "We are not actively hiring for specific roles at the moment, but we are always looking for talented individuals to join our team. If you are interested in future opportunities, please submit your application.",
    interestedIn: "I am interested in...",
    selectPosition: "Select a position",
  },
  es: {
    joinTeam: "Únete a Nuestro Equipo",
    joinTeamDesc: "Construye tu carrera con la principal empresa de construcción de Louisiana. Ofrecemos beneficios competitivos, crecimiento profesional y un compromiso con la seguridad.",
    whyWork: "¿Por qué Trabajar con Nosotros?",
    culturePara1: "En Southern Underground, creemos que nuestros empleados son nuestro mayor activo. Fomentamos una cultura de seguridad, innovación y crecimiento profesional donde cada miembro del equipo puede prosperar y avanzar en su carrera.",
    culturePara2: "Únete a una empresa que valora la integridad, promueve desde dentro y proporciona las herramientas y la formación necesarias para triunfar en la industria de la construcción.",
    ourPromise: "Nuestra Promesa",
    promiseDesc: "Nos comprometemos a proporcionar un entorno de trabajo seguro y de apoyo donde puedas desarrollar una carrera gratificante y tener un impacto positivo en las comunidades de Louisiana y más allá.",
    employeeBenefits: "Beneficios para Empleados",
    employeeBenefitsDesc: "Ofrecemos beneficios integrales para apoyarte a ti y a tu familia",
    b1: "Salario Competitivo", b1d: "Paquetes de compensación líderes en la industria con bonificaciones por desempeño",
    b2: "Salud y Bienestar", b2d: "Cobertura integral de salud, dental y visión",
    b3: "Plan 401(k)", b3d: "Plan de ahorro para el retiro con generosas aportaciones de la empresa",
    b4: "Tiempo Libre Pagado", b4d: "Generosas políticas de vacaciones, licencia por enfermedad y días festivos",
    b5: "Desarrollo Profesional", b5d: "Oportunidades de capacitación y programas de avance profesional",
    b6: "Estabilidad Laboral", b6d: "Empleo estable en una empresa consolidada y en crecimiento",
    currentOpenings: "Vacantes Actuales",
    currentOpeningsDesc: "Descubre emocionantes oportunidades de carrera con nuestro equipo en crecimiento",
    viewDetails: "Ver Detalles", closeDetails: "Cerrar Detalles", posted: "Publicado",
    requirements: "Requisitos", benefits: "Beneficios",
    applyFor: "Aplicar para este Puesto", applyPosition: "Aplicar para el Puesto", applyingFor: "Aplicando para:",
    fullName: "Nombre Completo *", email: "Correo Electrónico *", phone: "Número de Teléfono *",
    exp: "Años de Experiencia", selectExp: "Seleccione nivel de experiencia",
    exp1: "0-2 años", exp2: "3-5 años", exp3: "6-10 años", exp4: "10+ años",
    resume: "Currículum *", resumeFormats: "Formatos aceptados: PDF, DOC, DOCX (Máx 5MB)",
    coverLetter: "Carta de Presentación / Información Adicional",
    coverLetterPH: "Cuéntanos por qué te interesa este puesto y qué te hace un gran candidato...",
    submitting: "Enviando...", submit: "Enviar Solicitud", cancel: "Cancelar",
    appSuccess: "¡Solicitud enviada con éxito! 🎉",
    appFailed: "Error al enviar. Por favor inténtalo de nuevo.",
    serverError: "Error del servidor. Por favor inténtalo más tarde.",
    equal: "Empleador de Igualdad de Oportunidades",
    equalDesc: "Southern Underground es un empleador de igualdad de oportunidades comprometido con la diversidad y la inclusión. Aceptamos solicitudes de todos los candidatos calificados sin importar raza, género, edad, religión, orientación sexual o discapacidad.",
    contactHR: "Contactar RRHH", call: "Llama al (225) 555-0123",
    english: "Inglés", spanish: "Español",
    noOpenings: "No Hay Vacantes Actuales",
    noOpeningsDesc: "No estamos contratando activamente para roles específicos en este momento, pero siempre estamos buscando personas talentosas para unirse a nuestro equipo. Si estás interesado en futuras oportunidades, por favor envía tu solicitud.",
    interestedIn: "Estoy interesado en...",
    selectPosition: "Seleccione un puesto",
  },
};

// Helper function to pick the correct language value with fallback to English
function pick(val: any, locale: 'en' | 'es'): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val !== null) {
    return val[locale] ?? val.en ?? '';
  }
  return '';
}

// Helper function for arrays with bilingual content
function pickArray(val: any, locale: 'en' | 'es'): string[] {
  if (Array.isArray(val)) return val;
  if (typeof val === 'object' && val !== null) {
    return val[locale] ?? val.en ?? [];
  }
  return [];
}

const Careers: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || key;
  
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState('');

  const benefits = [
    { icon: DollarSign, title: t('b1'), description: t('b1d') },
    { icon: Heart, title: t('b2'), description: t('b2d') },
    { icon: Award, title: t('b3'), description: t('b3d') },
    { icon: Clock, title: t('b4'), description: t('b4d') },
    { icon: Users, title: t('b5'), description: t('b5d') },
    { icon: CheckCircle, title: t('b6'), description: t('b6d') },
  ];

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg(''); setSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(applicationData).forEach(([k, v]) => {
        if (k === 'resume') return; payload.append(k, v as string);
      });
      if (applicationData.resume) payload.append('resume', applicationData.resume);
      const res = await fetch('http://localhost:5050/api/job/apply', { method: 'POST', body: payload });
      const data = await res.json();
      if (res.ok) {
        setFormMsg(t('appSuccess'));
        setTimeout(() => {
          setFormMsg(''); setSelectedJob(null);
          setApplicationData({ name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null });
        }, 3000);
      } else setFormMsg(data.msg || t('appFailed'));
    } catch { setFormMsg(t('serverError')); }
    setSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData((prev) => ({ ...prev, resume: file }));
  };

  const scrollToForm = () => {
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      {/* Language toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleLang} className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700 transition-colors">
          {lang === 'en' ? t('spanish') : t('english')}
        </button>
      </div>

      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Gemini_Generated_Image_bjxysubjxysubjxy.png)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent leading-tight pb-2">{t('joinTeam')}</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">{t('joinTeamDesc')}</p>
            <button onClick={scrollToForm} className="px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors">
              {t('applyFor')}
            </button>
          </div>
        </div>
      </section>
      {/* Company Culture */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('whyWork')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('culturePara1')}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t('culturePara2')}</p>
            {/* <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('ourPromise')}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('promiseDesc')}</p>
            </div> */}
          </div>
          <div className="relative">
            <img src="/images/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg" alt="Construction team at work" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('employeeBenefits')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('employeeBenefitsDesc')}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={applicationFormRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobOpenings.filter((job) => job.isActive).length === 0 ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('noOpenings')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">{t('noOpeningsDesc')}</p>
            </div>
          ) : (
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('currentOpenings')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('currentOpeningsDesc')}</p>
            </div>
          )}

          <form onSubmit={handleApplicationSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder={t('fullName')} value={applicationData.name} onChange={handleInputChange} required className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" />
              <input type="email" name="email" placeholder={t('email')} value={applicationData.email} onChange={handleInputChange} required className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" />
              <input type="tel" name="phone" placeholder={t('phone')} value={applicationData.phone} onChange={handleInputChange} required className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" />
              <select name="experience" value={applicationData.experience} onChange={handleInputChange} required className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500">
                <option value="">{t('selectExp')}</option>
                <option value="0-2">{t('exp1')}</option>
                <option value="3-5">{t('exp2')}</option>
                <option value="6-10">{t('exp3')}</option>
                <option value="10+">{t('exp4')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('interestedIn')}</label>
              <select id="position" name="position" value={applicationData.position} onChange={handleInputChange} required className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500">
                <option value="">{t('selectPosition')}</option>
                {jobOpenings.filter((job) => job.isActive).map((job) => (
                  <option key={job.id} value={pick(job.title, lang)}>{pick(job.title, lang)}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('resume')}</label>
              <input type="file" id="resume" name="resume" onChange={handleFileChange} required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" />
              <p className="text-xs text-gray-500 mt-1">{t('resumeFormats')}</p>
            </div>
            <div>
              <textarea name="message" placeholder={t('coverLetterPH')} value={applicationData.message} onChange={handleInputChange} rows={4} className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={submitting} className="px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors disabled:bg-gray-400">
                {submitting ? t('submitting') : t('submit')}
              </button>
            </div>
            {formMsg && <p className="text-center text-green-500">{formMsg}</p>}
          </form>
        </div>
      </section>

    </div>
  );
};

export default Careers;


