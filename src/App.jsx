// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import BrandsCarousel from './components/BrandsCarousel/BrandsCarousel';
import Registration from './components/Registration';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <BrandsCarousel />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
