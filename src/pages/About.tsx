import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import smallProfileImage from '../images/Screenshot_20250311_033014_Instagram.jpg';

Modal.setAppElement('#root');

const About: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sections = [
    {
      title: "Experience",
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <>
          <p>Data Scientist and AI/ML Engineer with expertise in developing innovative solutions. Specialized in creating trading bots, implementing machine learning models, and developing AI-powered applications.</p>
          <Link to="/experience-details" className="text-blue-500 mt-4">
            Show More
          </Link>
        </>
      )
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <>
          <p>Advanced education in Data Science and Machine Learning, with continuous learning through various certifications and courses.</p>
          <Link to="/education-details" className="text-blue-500 mt-4">
            Show More
          </Link>
        </>
      )
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      content: (
        <>
          <p>Proficient in Python, C programming, AI/ML, NLP, and various data science tools and frameworks.</p>
          <Link to="/skills-details" className="text-blue-500 mt-4">
            Show More
          </Link>
        </>
      )
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
          <div className="flex items-center mb-4">
            <img
              src={smallProfileImage}
              alt="Small Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-lg mr-4 cursor-pointer"
              onClick={openModal}
            />
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {personalInfo.bio}
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Passionate Data Scientist and AI/ML Engineer with expertise in developing innovative solutions using cutting-edge technologies. Experienced in creating trading bots, implementing machine learning models, and developing AI-powered applications. Committed to pushing the boundaries of what's possible with artificial intelligence and data science.
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
              <div className="text-gray-700 text-justify">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        onAfterOpen={() => {
          document.addEventListener('mousemove', closeModal);
        }}
        onAfterClose={() => {
          document.removeEventListener('mousemove', closeModal);
        }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={smallProfileImage} alt="Profile" className="w-64 h-64" />
        </div>
      </Modal>
    </div>
  );
};

export default About;