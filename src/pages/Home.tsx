import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/personalInfo';
import ImageSlideshow from '../components/ImageSlideshow';
import profileImage from '../images/Screenshot_20250311_032946_Instagram.jpg';
import smallProfileImage from '../images/Screenshot_20250311_033014_Instagram.jpg';
import resumePDF from '../images/Job Resume.pdf'; // Ensure this path is correct

Modal.setAppElement('#root');

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [resumeModalIsOpen, setResumeModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openResumeModal = () => {
    setResumeModalIsOpen(true);
  };

  const closeResumeModal = () => {
    setResumeModalIsOpen(false);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                {personalInfo.name}
              </h1>
              <img
                src={smallProfileImage}
                alt="Small Profile"
                className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-lg ml-4 cursor-pointer"
                onClick={openModal}
              />
            </div>
            
            <div className="text-xl md:text-2xl text-blue-600 mb-6">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'AI/ML Engineer',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-8 text-justify">
              Passionate Data Scientist and AI/ML Engineer with expertise in developing innovative solutions using cutting-edge technologies. Experienced in creating trading bots, implementing machine learning models, and developing AI-powered applications. Committed to pushing the boundaries of what's possible with artificial intelligence and data science.
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.a
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>

              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openResumeModal}
              >
                Download Resume
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ImageSlideshow />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Python",
                image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "TensorFlow",
                image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Power BI",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Machine Learning",
                image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=400"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white text-lg font-semibold p-4">{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to My Portfolio</h1>
          
          <div className="flex justify-center mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Hello! I'm a Data Scientist and AI/ML Engineer with expertise in developing innovative solutions. Specialized in creating trading bots, implementing machine learning models, and developing AI-powered applications.
          </p>
        </motion.div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
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

      <Modal
        isOpen={resumeModalIsOpen}
        onRequestClose={closeResumeModal}
        contentLabel="Resume Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
          <iframe
            src={resumePDF}
            title="Resume"
            className="w-full h-96"
          />
          <a
            href={resumePDF}
            download="Job Resume.pdf"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg inline-block"
          >
            Download Resume
          </a>
          <button
            onClick={closeResumeModal}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg inline-block"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
