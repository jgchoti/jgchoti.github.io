import React from 'react';
import Navbar from '../component/Navbar.js';
import Hero from '../component/Hero.js';
import SubHeader from '../component/SubHeader.js';
import Footer from '../component/Footer.js';
import ContactBox from '../component/ContactBox.js';
import ScrollReveal from '../logic/ScrollReveal.js';
import '../style/index.css';
import '../style/App.css'
import Content from '../component/Content.js';
import TechnologySum from '../component/TechnologySum.js';
import { projectData } from '../data/projectData.js';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHeader />
      <TechnologySum projectData={projectData} />
      <Content projectData={projectData} />
      <ContactBox />
      <Footer />
      <ScrollReveal />
    </div>
  );
}

export default App;
