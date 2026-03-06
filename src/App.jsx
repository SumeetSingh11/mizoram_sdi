import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portals from './components/Portals';
import Pillars from './components/Pillars';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Reveal animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= (window.innerHeight * 0.85);
        if (isVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portals />
        <Pillars />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;
