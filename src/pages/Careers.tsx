import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CareersEnglish from './CareersEnglish';
import CareersSpanish from './CareersSpanish'; // Capital 'C'!

const Careers: React.FC = () => {
  const { lang } = useLanguage();
  console.log('Current language:', lang);
  return lang === 'en' ? <CareersEnglish /> : <CareersSpanish />;
};
export default Careers;
