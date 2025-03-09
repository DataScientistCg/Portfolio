import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const sections = [
    {
      title: "Experience",
      icon: <Briefcase className="w-6 h-6" />,
      content: "Data Scientist and AI/ML Engineer with expertise in developing innovative solutions. Specialized in creating trading bots, implementing machine learning models, and developing AI-powered applications."
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      content: "Advanced education in Data Science and Machine Learning, with continuous learning through various certifications and courses."
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      content: "Proficient in Python, C programming, AI/ML, NLP, and various data science tools and frameworks."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;