import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portals from './components/Portals';
import Pillars from './components/Pillars';
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

        {/* Placeholder for News & Events section */}
        <section className="news-section reveal" style={{ padding: '6rem 0', background: '#f1f5f9' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#1e1b4b', textAlign: 'center' }}>Recent <span style={{ color: '#3b82f6' }}>News & Events</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <div style={{ height: '200px', background: '#cbd5e1' }}></div>
                  <div style={{ padding: '2rem' }}>
                    <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>MARCH 04, 2026</span>
                    <h4 style={{ margin: '1rem 0', fontSize: '1.25rem', color: '#1e1b4b' }}>Advanced Satellite Training Program for New GIS Professionals</h4>
                    <p style={{ color: '#64748b' }}>MARSAC announces its upcoming quarterly capacity building program focusing on LULC classification using high-res imagery.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
