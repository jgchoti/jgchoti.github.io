import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/index.css';
import { ThemeProvider } from './logic/Theme'

import Layout from './component/Layout'
import App from './pages/App';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
            <Route path="data" element={<Project />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
