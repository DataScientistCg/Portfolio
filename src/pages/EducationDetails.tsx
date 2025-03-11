import React from 'react';
import { motion } from 'framer-motion';

const EducationDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Education</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">M.Tech in Data Science</h4>
            <p><strong>Sharda University</strong>, Greater Noida, India | <strong>08/2021 – 11/2023</strong></p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">B.Tech in Computer Science</h4>
            <p><strong>Teerthanker Mahaveer University</strong>, Uttar Pradesh, India | <strong>07/2017 – 08/2021</strong></p>
            <ul className="list-disc list-inside">
              <li>Collaborated with IBM and certified with Big Data Analytics and Cloud Computing.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">12th</h4>
            <p><strong>A.N International School</strong> | <strong>2016 – 2017</strong></p>
            <ul className="list-disc list-inside">
              <li>Physics, Chemistry, and Maths from Bijnor, Uttar Pradesh.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">10th</h4>
            <p><strong>A.N International School</strong> | <strong>2013 – 2014</strong></p>
            <ul className="list-disc list-inside">
              <li>All subjects from Bijnor, Uttar Pradesh.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationDetails;