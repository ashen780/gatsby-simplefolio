import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsDataPersonal, projectsDataWork, contactData, footerData } from '../mock/data';
import Construction from './Construction/Construction';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projectsPersonal, setProjectsPersonal] = useState([]);
  const [projectsWork, setProjectsWork] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjectsPersonal([...projectsDataPersonal]);
    setProjectsWork([...projectsDataWork]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projectsPersonal, projectsWork, contact, footer }}>
      <Construction />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
