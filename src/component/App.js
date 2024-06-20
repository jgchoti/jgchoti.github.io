import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ContactBox from './ContactBox';
import ScrollReveal from '../logic/ScrollReveal';

import '../style/App.css';
import ProjectShowcase from './ProjectShowcase';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHeader />
      <ProjectShowcase />
      <ContactBox />
      <Footer />
      <ScrollReveal />
    </div>
  );
}

export default App;
