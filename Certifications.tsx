import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Elite Certificate from NPTEL - Introduction to Research",
      issuer: "NPTEL",
      date: "2023",
      url: "https://drive.google.com/file/d/1uz8XwpAzBO-R5-5YfgEXaQtItogzmY1i/view?usp=drivesdk"
    },
    {
      name: "Data Scientist Internship Certificate",
      issuer: "Company XYZ",
      date: "2023",
      url: "https://drive.google.com/file/d/10GKGF72rrXzO76myNZ3lIYHof8Ms5UU3/view"
    },
    {
      name: "IBM Certification in Artificial Intelligence and Machine Learning",
      issuer: "IBM",
      date: "2023",
      url: "https://drive.google.com/file/d/108neWrm6op8xUIaG_S6B_CGZ4tYnP7aX/view"
    },
    {
      name: "UPKON IEEE Conference - Published Research Paper, Review Paper, and Thesis",
      issuer: "UPKON IEEE",
      date: "2023",
      url: "https://drive.google.com/file/d/1-otTdWYz7sfkY4lGshSgfoKVBI0cY6PM/view"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Certifications</h1>
        
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {cert.name}
                  </h2>
                  <p className="text-gray-600">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;