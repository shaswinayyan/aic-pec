// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Preloader from './components/Preloader';
import AppRoutes from './Route'; 
import Footer from './components/Footer'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Menu />
          <AppRoutes />
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
