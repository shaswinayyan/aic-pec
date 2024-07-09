import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tender from './pages/Tender';
import Contact from './pages/ContactForm';
import SISFS from './pages/SISFS';
import Incubation from './pages/Incubation';
import Portfolio from './pages/Portfolio'; 
import PreIncubation from './pages/PreIncubation';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tender" element={<Tender />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/incubation" element={<Incubation />} />
      <Route path="/sisfs" element={<SISFS />} />
      <Route path="/startupdetails" element={<Portfolio />} /> 
      <Route path="/pre-incubate" element={<PreIncubation />} /> 
    </Routes>
  );
};

export default AppRoutes;
