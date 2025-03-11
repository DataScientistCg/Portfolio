import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import AnimatedBackground from './components/AnimatedBackground';
import ExperienceDetails from './pages/ExperienceDetails';
import EducationDetails from './pages/EducationDetails';
import SkillsDetails from './pages/SkillsDetails';

const App: React.FC = () => {
  return (
    <Router>
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/experience-details" element={<ExperienceDetails />} />
        <Route path="/education-details" element={<EducationDetails />} />
        <Route path="/skills-details" element={<SkillsDetails />} />
      </Routes>
    </Router>
  );
};

export default App;