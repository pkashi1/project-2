import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { enhancedServices, projects } from '../../data/mockData';
import DarkModeToggle from '../common/DarkModeToggle';

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
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setShowProjectsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Safety', path: '/safety' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-700 dark:bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SU</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Southern Underground</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">of Louisiana</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navLinks.map((link) => (
                link.name !== 'Services' && link.name !== 'Projects' ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
                      location.pathname === link.path
                        ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                        : 'text-gray-700 dark:text-gray-200'
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
                      className={`font-medium flex items-center space-x-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none ${
                        location.pathname === '/services'
                          ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                          : 'text-gray-700 dark:text-gray-200'
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
                          className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 text-sm border-b dark:border-gray-700 last:border-b-0"
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
                      className={`font-medium flex items-center space-x-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none ${
                        location.pathname === '/projects'
                          ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                          : 'text-gray-700 dark:text-gray-200'
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
                          className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 text-sm border-b dark:border-gray-700 last:border-b-0"
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              ))}
              
              {/* Dark Mode Toggle */}
              <div className="ml-4">
                <DarkModeToggle />
              </div>
            </nav>

            <div className="flex items-center space-x-4 lg:hidden">
              <DarkModeToggle />
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block font-medium py-2 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-secondary-500 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-secondary-600 transition-colors duration-200 mt-4"
              >
                Request a Appointment
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;