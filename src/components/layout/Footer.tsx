import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';


const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
const [newsletterMsg, setNewsletterMsg] = useState('');
const [loading, setLoading] = useState(false);

const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  setNewsletterMsg('');
  setLoading(true);
  try {
    const res = await fetch('http://localhost:5050/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail }),
    });
    const data = await res.json();
    if (res.ok) {
      setNewsletterMsg('Subscribed successfully!');
      setNewsletterEmail('');
    } else {
      setNewsletterMsg(data.msg || 'Subscription failed.');
    }
  } catch {
    setNewsletterMsg('Server error. Please try again later.');
  }
  setLoading(false);
};
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SU</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Southern Underground</h3>
                <p className="text-sm text-gray-300">of Louisiana</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading construction company specializing in directional boring, utility installation, 
              and civil construction across the nation since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/safety" className="text-gray-300 hover:text-white transition-colors">Safety</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/directional-boring" className="text-gray-300 hover:text-white transition-colors">Directional Boring</Link></li>
              <li><Link to="/services/utility-installation" className="text-gray-300 hover:text-white transition-colors">Utility Installation</Link></li>
              <li><Link to="/services/pile-installation" className="text-gray-300 hover:text-white transition-colors">Pile Installation</Link></li>
              <li><Link to="/services/civil-construction" className="text-gray-300 hover:text-white transition-colors">Civil Construction</Link></li>
              <li><Link to="/services/water-sewer-treatment" className="text-gray-300 hover:text-white transition-colors">Water & Sewer Treatment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    4922 Rankin Street<br />
                    Zachary, Louisiana 70791
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+12255550123" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (225) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@southernunderground.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@southernunderground.com
                </a>
              </div>
            </div>
          </div>
        </div>

{/* Newsletter Signup */}
<div className="border-t border-gray-800 mt-8 pt-8">
  <div className="text-center">
    <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
    <p className="text-gray-300 text-sm mb-4">
      Subscribe to our newsletter for industry insights and company updates.
    </p>
    <form className="flex max-w-md mx-auto" onSubmit={handleSubscribe}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
        value={newsletterEmail}
        onChange={e => setNewsletterEmail(e.target.value)}
        required
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-primary-600 text-white px-6 py-2 rounded-r-lg hover:bg-primary-700 transition-colors"
        disabled={loading}
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
    {newsletterMsg && (
      <p className={`mt-2 text-center ${newsletterMsg.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
        {newsletterMsg}
      </p>
    )}
  </div>
</div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Southern Underground of Louisiana. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;