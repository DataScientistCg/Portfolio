import React from 'react';
import { motion } from 'framer-motion';

const ExperienceDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Experience</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Technical Support</h4>
            <p><strong>Capgemini (Centene Project)</strong> | Noida (NSEZ), India | <strong>08/2024 – 02/2025</strong></p>
            <ul className="list-disc list-inside">
              <li><span className="text-red-600">Enrolled</span> new healthcare members, generated ID cards, and managed terminations, cancellations, and activations with precision and efficiency.</li>
              <li><span className="text-red-600">Processed</span> and managed healthcare data using PDP and CCP applications, enhancing workflow accuracy.</li>
              <li><span className="text-red-600">Preprocessed</span> and cleaned healthcare datasets, performing data visualization based on count and state filters.</li>
              <li><span className="text-red-600">Prepared</span> and triggered healthcare members’ ID cards, ensuring timely delivery.</li>
              <li><span className="text-red-600">Maintained</span> E2E client communication via email, resolving data processing issues effectively.</li>
              <li><span className="text-red-600">Supervised</span> data entry tasks, correcting errors using Python scripts to automate Excel data processing.</li>
              <li><span className="text-red-600">Collaborated</span> with client teams to ensure smooth process execution and prompt issue resolution.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">Data Analyst Intern</h4>
            <p><strong>Toriox (OPC) Pvt. Ltd.</strong> | Pune, India | <strong>11/2023 – 07/2024</strong></p>
            <ul className="list-disc list-inside">
              <li><span className="text-red-600">Cleaned</span> and merged financial datasets for major currency pairs (EUR/USD, GBP/USD, USD/JPY), ensuring data integrity.</li>
              <li><span className="text-red-600">Applied</span> advanced machine learning techniques (LSTM, moving averages, MACD, RSI) and implemented robust outlier detection, achieving a test loss of <strong>1.44e-06</strong> and prediction accuracy of <strong>81%</strong>.</li>
              <li><span className="text-red-600">Developed</span> and deployed <strong>LSTM models</strong> to predict closing prices and candlestick patterns, achieving <strong>98% accuracy</strong>.</li>
              <li><span className="text-red-600">Integrated</span> real-time predictions with <strong>MetaTrader 5</strong>, optimizing algorithmic trading strategies in collaboration with the trading team.</li>
              <li><span className="text-red-600">Deployed</span> trading bots utilizing indicators such as <strong>MACD, SMA, and RSI</strong>, enhancing trading decision-making in live environments.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceDetails;