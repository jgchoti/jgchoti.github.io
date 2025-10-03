import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../component/Hero.js';
import Footer from '../component/Footer.js';
import ContactBox from '../component/ContactBox.js';
import '../style/index.css';
import Content from '../component/Content.js';
import { projectData } from '../data/projectData.js';
import { useTheme } from '../logic/Theme.js';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Helmet>
        <title>Chotirat Jonggit (Choti / jgchoti) – Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chotirat Jonggit (Choti / jgchoti) showcasing projects, web development work, and technical skills."
        />
        <meta
          name="keywords"
          content="Chotirat Jonggit, Choti, jgchoti, web developer, portfolio, projects, React, data, full-stack"
        />
      </Helmet>
      <Hero />
      <Content projectData={projectData} />
      <ContactBox />
      <Footer />
    </div>
  );
}

export default App;
