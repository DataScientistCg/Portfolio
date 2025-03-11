import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: Github, url: personalInfo.socialLinks.github },
    { Icon: Linkedin, url: personalInfo.socialLinks.linkedin },
    { Icon: Instagram, url: personalInfo.socialLinks.instagram },
    { Icon: Facebook, url: personalInfo.socialLinks.facebook },
    { Icon: Mail, url: personalInfo.socialLinks.email },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Suhail Malik</h3>
            <p className="text-gray-400">Data Scientist & AI/ML Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialIcons.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Suhail Malik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;