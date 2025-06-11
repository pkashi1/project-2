import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

const [formMsg, setFormMsg] = useState('');
const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormMsg('');
  setSubmitting(true);
  try {
    const res = await fetch('http://localhost:5050/api/contact/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      setFormMsg(data.msg || 'Submitted!');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormMsg('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          projectType: '',
          timeline: '',
          budget: '',
          message: '',
          newsletter: false
        });
      }, 3000);
    } else {
      setFormMsg(data.msg || 'Submission failed.');
    }
  } catch (err) {
    setFormMsg('Server error. Please try again.');
  }
  setSubmitting(false);
};


  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['4922 Rankin Street', 'Zachary, Louisiana 70791'],
      link: 'https://maps.google.com/?q=4922+Rankin+Street+Zachary+LA+70791'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['(225) 555-0123', '24/7 Emergency Service'],
      link: 'tel:+12255550123'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@southernunderground.com', 'quotes@southernunderground.com'],
      link: 'mailto:info@southernunderground.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 7:00 AM - 6:00 PM', 'Saturday: 8:00 AM - 4:00 PM'],
      link: null
    }
  ];

  const services = [
    'Directional Boring',
    'Utility Installation',
    'Pile Installation',
    'Civil Construction',
    'Water & Sewer Treatment',
    'Emergency Services',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting back to form...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-secondary-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us for a free consultation 
            and detailed quote tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-primary-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formMsg && (
                  <div className={`mt-4 text-center ${formMsg.includes('Thank') ? 'text-green-600' : 'text-red-500'}`}>
                    {formMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="municipal">Municipal</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (ASAP)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please describe your project requirements, location, and any specific details..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label className="text-sm text-gray-700">
                    Subscribe to our newsletter for industry updates and company news
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <iframe
                      title="Southern Underground Office"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '12px', minHeight: '256px' }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=4922+Rankin+Street,+Zachary,+LA+70791&output=embed"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Office Location</h4>
                    <p className="text-gray-600 mb-4">
                      Our main office is conveniently located in Zachary, Louisiana, 
                      serving clients throughout the region.
                    </p>
                    <a
                      href="https://maps.google.com/?q=4922+Rankin+Street+Zachary+LA+70791"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Emergency Services</h4>
                <p className="text-gray-600 mb-4">
                  We provide 24/7 emergency services for critical infrastructure issues. 
                  Don't hesitate to call if you have an urgent situation.
                </p>
                <a
                  href="tel:+12255550123"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Hotline
                </a>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">We'll review your request within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Schedule a consultation or site visit</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Provide detailed quote and project timeline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;