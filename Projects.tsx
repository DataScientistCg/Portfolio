import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Forex Trading Bot",
      description: "Developed an automated trading bot using machine learning algorithms to analyze market trends and execute trades.",
      technologies: ["Python", "TensorFlow", "API Integration"],
      github: "https://github.com/DataScientistCg"
    },
    {
      title: "Fake News Detection",
      description: "Created a machine learning model to identify and classify fake news articles using NLP techniques.",
      technologies: ["Python", "NLP", "scikit-learn"],
      github: "https://github.com/DataScientistCg"
    },
    {
      title: "AI Chatbot",
      description: "Built an intelligent chatbot system capable of natural language understanding and response generation.",
      technologies: ["Python", "NLP", "Deep Learning"],
      github: "https://github.com/DataScientistCg"
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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
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
    </div>
  );
};

export default Projects;