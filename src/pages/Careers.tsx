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

const Careers: React.FC = () => {
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState('');

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance coverage',
    },
    {
      icon: Award,
      title: '401(k) Plan',
      description: 'Retirement savings plan with generous company matching',
    },
    {
      icon: Clock,
      title: 'Paid Time Off',
      description: 'Generous vacation, sick leave, and holiday pay policies',
    },
    {
      icon: Users,
      title: 'Professional Development',
      description: 'Training opportunities and career advancement programs',
    },
    {
      icon: CheckCircle,
      title: 'Job Security',
      description: 'Stable employment with a growing, established company',
    },
  ];

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg('');
    setSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(applicationData).forEach(([key, val]) => {
        if (key === 'resume') return;
        payload.append(key, val as string);
      });
      if (applicationData.resume) {
        payload.append('resume', applicationData.resume);
      }
      const res = await fetch('http://localhost:5050/api/job/apply', {
        method: 'POST',
        body: payload,
      });
      const data = await res.json();
      if (res.ok) {
        setFormMsg(data.msg || 'Application submitted successfully! 🎉');
        setTimeout(() => {
          setFormMsg('');
          setSelectedJob(null);
          setApplicationData({
            name: '',
            email: '',
            phone: '',
            position: '',
            experience: '',
            message: '',
            resume: null,
          });
        }, 3000);
      } else {
        setFormMsg(data.msg || 'Submission failed. Please try again.');
      }
    } catch {
      setFormMsg('Server error. Please try again later.');
    }
    setSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData((prev) => ({ ...prev, resume: file }));
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/Gemini_Generated_Image_bjxysubjxysubjxy.png)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-secondary-400 dark:text-secondary-300">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build your career with Louisiana's leading construction company. We offer competitive benefits, professional
            growth, and a commitment to safety.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Southern Underground, we believe our employees are our greatest asset. We foster a culture of safety,
                  innovation, and professional growth where every team member can thrive and advance their career.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Join a company that values integrity, promotes from within, and provides the tools and training you need
                  to succeed in the construction industry.
                </p>
                <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-6 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Our Promise</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We're committed to providing a safe, supportive work environment where you can build a rewarding
                    career while making a positive impact on communities across Louisiana and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg"
                alt="Construction team at work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Employee Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits to support you and your family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore exciting career opportunities with our growing team
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings
              .filter((job) => job.isActive)
              .map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {job.title}
                          </h3>
                          <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Posted {new Date(job.postDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button
                          onClick={() =>
                            setSelectedJob(selectedJob === job.id ? null : job.id)
                          }
                          className="bg-primary-600 dark:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                        >
                          {selectedJob === job.id ? 'Close Details' : 'View Details'}
                        </button>
                      </div>
                    </div>

                    {/* Job Details */}
                    {selectedJob === job.id && (
                      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 dark:text-gray-300">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((b, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 dark:text-gray-300">{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <button
                            onClick={() => {
                              setApplicationData((p) => ({
                                ...p,
                                position: job.title,
                              }));
                              setTimeout(
                                () =>
                                  applicationFormRef.current?.scrollIntoView({
                                    behavior: 'smooth',
                                  }),
                                100
                              );
                            }}
                            className="bg-secondary-500 dark:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
                          >
                            Apply for This Position
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {applicationData.position && (
        <section
          className="py-20 bg-gray-50 dark:bg-gray-700 transition-colors"
          ref={applicationFormRef}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Apply for Position
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Applying for:{' '}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {applicationData.position}
                  </span>
                </p>
              </div>
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={applicationData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 dark:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
                    disabled={submitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setApplicationData((prev) => ({ ...prev, position: '' }))}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                {formMsg && (
                  <p
                    className={`mt-4 text-center ${
                      formMsg.includes('successfully') ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {formMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Equal Opportunity */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Equal Opportunity Employer</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-4xl mx-auto">
            Southern Underground is an equal opportunity employer committed to diversity and inclusion. We welcome
            applications from all qualified candidates regardless of race, gender, age, religion, sexual orientation,
            or disability status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@southernunderground.com"
              className="inline-flex items-center bg-secondary-500 dark:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
            >
              Contact HR Department
            </a>
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white dark:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Call (225) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
