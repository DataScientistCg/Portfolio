import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Mail, FileText, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/about', icon: <User size={20} />, label: 'About' },
    { path: '/projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { path: '/certifications', icon: <Award size={20} />, label: 'Certifications' },
    { path: '/articles', icon: <FileText size={20} />, label: 'Articles' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-gray-800"
          >
            Suhail Malik
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600' : ''
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600 bg-blue-50 rounded-md' : ''
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;