import React from 'react';
import { motion } from 'framer-motion';

const SkillsDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Technical Skills</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <ul className="list-disc list-inside">
            <li><span className="font-semibold text-green-600">Programming:</span> Python, C language</li>
            <li><span className="font-semibold text-green-600">Database Management:</span> MySQL, RDBMS</li>
            <li><span className="font-semibold text-green-600">Developed BOTS:</span> Trading Bots, Chatbots</li>
            <li><span className="font-semibold text-green-600">Soft Skills:</span> Problem Solving, Decision Making, Team Collaboration, International Client Communication, Report Generation, Documentation</li>
            <li><span className="font-semibold text-green-600">Data Science and Analytics:</span> AI, Machine Learning, NLP, Deep Learning, Numpy, Pandas, Matplotlib, Tensorflow, Keras, Pandas-Profiling, Seaborn, Pyaudio, Joblib, Pyttx3, NTLK, etc.</li>
            <li><span className="font-semibold text-green-600">Visualization Tools:</span> Power BI, Excel</li>
            <li><span className="font-semibold text-green-600">Microsoft Office Suite:</span> Word, Excel, PowerPoint</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsDetails;