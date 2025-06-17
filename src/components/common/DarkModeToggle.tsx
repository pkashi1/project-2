import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      {/* Toggle Background */}
      <div
        className={`absolute w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? 'translate-x-3' : '-translate-x-3'
        }`}
      />
      
      {/* Icons */}
      <div className="flex items-center justify-between w-full px-1">
        <Sun className={`w-3 h-3 text-yellow-500 transition-opacity duration-300 ${isDark ? 'opacity-50' : 'opacity-100'}`} />
        <Moon className={`w-3 h-3 text-blue-400 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-50'}`} />
      </div>
    </button>
  );
};

export default DarkModeToggle;