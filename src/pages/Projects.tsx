import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Github } from 'lucide-react';

Modal.setAppElement('#root');

const Projects: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Forex Trading Bot",
      description: "Developed an automated trading bot using machine learning algorithms to analyze market trends and execute trades.",
      technologies: ["Python", "TensorFlow", "API Integration"],
      github: "https://github.com/DataScientistCg",
      details: `
        Developed and integrated an advanced Forex Trading Bot using LSTM models, achieving 98% training accuracy and 70% real-time accuracy.
        Merged and cleaned financial data, implementing indicators like MACD, RSI for informed trading decisions.
        Collaborated with the trading team to deploy multiple algorithmic trading bots for enhanced market analysis.
        Tools and Technologies:
        Programming Languages: Python
        Model Loading & Saving: joblib, Keras load model
        Machine Learning: Logistic Regression, Decision Tree, Naive Bayes, KNN
        Frameworks: Django using ChatGPT
        Libraries: Matplotlib, Pandas, NumPy, Scikit-learn, TensorFlow, Keras
        Indicators: MACD, RSI, SMA, Stochastic
        Trading Platforms: MetaTrader 5 (MT5), Interactive Brokers API, News API
        Version Control: GitHub
      `
    },
    {
      title: "Fake News Detection",
      description: "Created a machine learning model to identify and classify fake news articles using NLP techniques.",
      technologies: ["Python", "NLP", "scikit-learn"],
      github: "https://github.com/DataScientistCg",
      details: `
        Developed a fake news detection model using LSTM and Bi-LSTM, achieving 98% accuracy.
        Published research paper on the project, contributing to academic discourse.
        Tools and Technologies:
        Programming: Python
        Data Analysis: Pandas, NumPy
        Text Processing: NLTK, TfidfVectorizer, CountVectorizer
        Visualization: Matplotlib, Seaborn
        Deep Learning: TensorFlow, Keras (LSTM, Bi-LSTM)
        Machine Learning: Logistic Regression, Decision Tree, Naive Bayes, KNN
        Metrics: Accuracy, Precision, Recall, ROC-AUC
        Version Control: GitHub
      `
    },
    {
      title: "Jarvis (Personal AI Assistant)",
      description: "Built an intelligent chatbot system capable of natural language understanding and response generation.",
      technologies: ["Python", "NLP", "Deep Learning"],
      github: "https://github.com/DataScientistCg",
      details: `
        Developed a Python-based AI assistant similar to Alexa, capable of playing songs, reading news, performing web searches, and controlling applications.
        Fully customizable with additional features as per user requirements.
        Built using Python with various libraries for speech recognition and automation.
        Tools and Technologies:
        Programming: Python
        Libraries: SpeechRecognition, pyttsx3, pyaudio
        Functionalities: Web Search, Music Playback, News Reading, Application Control
        Version Control: GitHub
      `
    }
  ];

  const minorProjects = [
    {
      title: "Text-to-Speech and Speech-to-Text System",
      description: "Developed a Python tool for converting text to speech and vice versa.",
      technologies: ["Python", "SpeechRecognition", "gTTS"],
      github: "https://github.com/DataScientistCg/Minor-Projects/blob/main/TextToSpeech__SpeechToText.py"
    },
    {
      title: "Optical Character Recognition (OCR) System",
      description: "Extracted text from images using Tesseract OCR with 95% accuracy.",
      technologies: ["Python", "Tesseract", "OpenCV"],
      github: "https://github.com/DataScientistCg/Minor-Projects/blob/main/OCR.py"
    },
    {
      title: "Library Management System",
      description: "Created a Python-based library system for book management.",
      technologies: ["Python", "SQLite", "Tkinter"],
      github: "https://github.com/DataScientistCg/Minor-Projects/blob/main/library_management_system.py"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Minor Projects</h2>
        <div className="grid gap-8">
          {minorProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        {selectedProject && (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line">
              {selectedProject.details}
            </p>
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;