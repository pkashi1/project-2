import React from 'react';

const certImages = [
  '/images/certifications/credentials.png',
  '/images/certifications/licensed-bonded-insured-vector-icon-business-86546455.webp',
  '/images/certifications/OIP.webp',
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Certifications & Associates
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* {certImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Certification ${i + 1}`}
                className="w-32 h-32 object-contain aspect-square"
              loading="lazy"
            />
          ))} */}

      <img
            src="/images/certifications/credentials.png"
            alt="Contractor License"
            className="block mx-auto w-full h-auto object-contain max-w-[36rem] md:max-w-[44rem] lg:max-w-[52rem]"
          />
            <img
              src="/images/certifications/licensed-bonded-insured-vector-icon-business-86546455.webp"
              alt="Certification 2"
              className="w-32 h-20 object-contain aspect-square"
              loading="lazy"
            />
            <img
              src="/images/certifications/OIP.webp"
              alt="Certification 3"
              className="w-32 h-20 object-contain aspect-square"
              loading="lazy"
            />
        </div>
        
      </div>
    </section>
  );
};