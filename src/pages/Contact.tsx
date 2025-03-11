import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: personalInfo.location,
      href: null
    }
  ];

  const socialMediaInfo = [
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      value: "Facebook Profile",
      href: personalInfo.socialLinks.facebook
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "GitHub Profile",
      href: personalInfo.socialLinks.github
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: personalInfo.socialLinks.linkedin
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "Instagram Profile",
      href: personalInfo.socialLinks.instagram
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Connect with Me
          </h2>
          
          <div className="space-y-6">
            {socialMediaInfo.map((info) => (
              <div key={info.label} className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{info.label}</p>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;