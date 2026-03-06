import React from 'react';
import { ArrowRight, ChevronRight, Layers, Database, MapPin } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroBg} alt="Satellite Landscape" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content reveal">
                    <div className="badge">
                        <span className="dot"></span>
                        <span>Real-time Spatial Monitoring</span>
                    </div>
                    <h2 className="title">Spatial Insights for a <span className="highlight">Sustainable Future</span></h2>
                    <p className="description">
                        Leading Mizoram into the era of spatial intelligence. We provide high-precision remote sensing data and GIS solutions for governance, environment, and development.
                    </p>

                    <div className="hero-btns">
                        <button className="btn-primary">
                            Explore Data Explorer <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary">
                            View Geoportal
                        </button>
                    </div>

                    <div className="quick-stats">
                        <div className="q-stat">
                            <Layers size={20} className="icon" />
                            <span>300+ Spatial Layers</span>
                        </div>
                        <div className="q-stat">
                            <Database size={20} className="icon" />
                            <span>99.9% Data Integrity</span>
                        </div>
                        <div className="q-stat">
                            <MapPin size={20} className="icon" />
                            <span>11 Districts Covered</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual reveal shadow-lg">
                    <div className="floating-card c1">
                        <div className="c-icon"><Database size={16} /></div>
                        <div className="c-info">
                            <span>Cloud Syncing</span>
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="floating-card c2">
                        <div className="c-icon"><Layers size={16} /></div>
                        <span>Layer Active</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
