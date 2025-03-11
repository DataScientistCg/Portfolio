import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-6">Showcasing my work and experience</p>
      
      <a
        href="https://drive.google.com/file/d/1P2gtpEuQ07zGxCqgS2niTl6jslgHrbYt/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all"
      >
        Download Resume
      </a>
    </section>
  );
};

export default HeroSection;
