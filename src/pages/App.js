import React, { useEffect } from 'react';
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
      <Hero />
      <Content projectData={projectData} />
      <ContactBox />
      <Footer />
    </div>
  );
}

export default App;
