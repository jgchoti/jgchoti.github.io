import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ContactBox from './ContactBox';
import ScrollReveal from '../logic/ScrollReveal';
import '../style/index.css';
import '../style/App.css'
import Content from './Content';
import TechnologySum from './TechnologySum';
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
