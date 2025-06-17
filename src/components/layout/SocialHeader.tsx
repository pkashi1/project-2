import React from 'react';
import { Facebook, Twitter, Mail, Phone } from 'lucide-react';

const SocialHeader: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-white py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+12255550123" 
              className="flex items-center space-x-2 hover:text-secondary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(225) 555-0123</span>
            </a>
            <a 
              href="mailto:info@southernunderground.com" 
              className="flex items-center space-x-2 hover:text-secondary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@southernunderground.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-gray-300">Follow Us:</span>
            <a
              href="https://www.facebook.com/southernundergroundofla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/southernunderground"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@southernunderground.com"
              className="text-gray-300 hover:text-secondary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHeader;