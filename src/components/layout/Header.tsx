import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Facebook, Linkedin, Twitter, Sun, Moon, Globe } from 'lucide-react';
import { enhancedServices, projects } from '../../data/mockData';
import { useTheme } from '../../contexts/ThemeContext';

interface Service {
  id: string;
  name: string;
  icon: string;
  detailedDescription: string;
  features: string[];
  process: string[];
  image: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (projectsRef.current && !projectsRef.current.contains(event.target as Node)) {
        setShowProjectsDropdown(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Safety', path: '/safety' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const changeLanguage = (lang: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = lang;
      selectElement.dispatchEvent(new Event('change'));
    }
    setShowLanguageDropdown(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
              <a href="mailto:info@southernunderground.com" className="flex items-center space-x-1 hover:text-navy-900 dark:hover:text-navy-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@southernunderground.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/southernundergroundofla/" className="text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/southern-underground-ofla" className="text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-lg' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-navy-900 dark:bg-navy-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-white font-bold text-xl">SU</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy-900 dark:text-white transition-colors duration-300">Southern Underground</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">of Louisiana</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navLinks.map((link) => (
                link.name !== 'Services' && link.name !== 'Projects' ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium transition-colors duration-200 hover:text-navy-900 dark:hover:text-navy-300 ${
                      location.pathname === link.path
                        ? 'text-navy-900 dark:text-navy-300 border-b-2 border-navy-900 dark:border-navy-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : link.name === 'Services' ? (
                  <div
                    key="Services"
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link
                      to="/services"
                      className={`font-medium flex items-center space-x-1 transition-colors duration-200 hover:text-navy-900 dark:hover:text-navy-300 focus:outline-none ${
                        location.pathname === '/services'
                          ? 'text-navy-900 dark:text-navy-300 border-b-2 border-navy-900 dark:border-navy-300'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 mt-0.5 transform transition-transform duration-200 ${
                          showDropdown ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </Link>
                    <div
                      className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
                        showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {enhancedServices.map((service: Service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-navy-900 dark:hover:text-navy-300 text-sm border-b last:border-b-0 dark:border-gray-700 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    key="Projects"
                    className="relative"
                    ref={projectsRef}
                    onMouseEnter={() => setShowProjectsDropdown(true)}
                    onMouseLeave={() => setShowProjectsDropdown(false)}
                  >
                    <Link
                      to="/projects"
                      className={`font-medium flex items-center space-x-1 transition-colors duration-200 hover:text-navy-900 dark:hover:text-navy-300 focus:outline-none ${
                        location.pathname === '/projects'
                          ? 'text-navy-900 dark:text-navy-300 border-b-2 border-navy-900 dark:border-navy-300'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>Projects</span>
                      <ChevronDown
                        className={`w-4 h-4 mt-0.5 transform transition-transform duration-200 ${
                          showProjectsDropdown ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </Link>
                    <div
                      className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
                        showProjectsDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          to={`/projects/${project.id}`}
                          className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-navy-900 dark:hover:text-navy-300 text-sm border-b last:border-b-0 dark:border-gray-700 transition-colors duration-200"
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </nav>

            {/* Header Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Google Translate Dropdown */}
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-300 transition-colors duration-200"
                >
                  <Globe className="w-5 h-5" />
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <div
                  className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
                    showLanguageDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm border-b dark:border-gray-700 transition-colors duration-200"
                  >
                    <span className="mr-2">🇺🇸</span>
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('es')}
                    className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition-colors duration-200"
                  >
                    <span className="mr-2">🇪🇸</span>
                    Español
                  </button>
                </div>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Phone Number */}
              <a
                href="tel:+12255550123"
                className="flex items-center space-x-2 text-navy-900 dark:text-navy-300 font-semibold hover:text-navy-700 dark:hover:text-navy-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>(225) 555-0123</span>
              </a>

              {/* Emergency Button */}
              <Link
                to="/contact"
                className="bg-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse"
              >
                24/7 Emergency
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block font-medium py-2 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-navy-900 dark:text-navy-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
                <a
                  href="tel:+12255550123"
                  className="flex items-center space-x-2 text-navy-900 dark:text-navy-300 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>(225) 555-0123</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-secondary-500 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-secondary-600 transition-colors duration-200"
                >
                  24/7 Emergency Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </>
  );
};

export default Header;