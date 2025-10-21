import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

// Custom X (formerly Twitter) icon component
const XIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


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
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/Logos/BADGE LOGO PNG .png"
                alt="Southern Underground Construction Company Logo"
                className="w-52 h-52 rounded-full object-contain bg-white p-1"
              />
            </Link>
            {/* <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Leading construction company specializing in directional drilling, utility installation, 
              and civil construction across the nation since 2015.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Projects</Link></li>
              <li><Link to="/safety" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Safety</Link></li>
              <li><Link to="/careers" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Careers</Link></li>
              {/* <li><Link to="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Blog</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    4922 Rankin Street<br />
                    Zachary, Louisiana 70791
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <a href="tel:+12255921336" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm">
                  225-592-1336
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <a href="mailto:info@suofla.com" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm">
                  info@suofla.com
                </a>
              </div>
              <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/southern-underground-ofla" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/southern_underground_ofla/" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/southernundergroundofla/" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;