import React from 'react';
import { Map, Box, Globe2, ShieldCheck, ChevronRight } from 'lucide-react';
import './Portals.css';

const Portals = () => {
    const portals = [
        {
            title: 'Data Explorer',
            desc: 'Analyze and visualize high-resolution spatial datasets across Mizoram with advanced layers.',
            icon: <Map size={32} />,
            color: '#3b82f6',
        },
        {
            title: '3D Mizoram ',
            desc: 'Experience a digital twin of Mizoram with immersive 3D terrain and urban modeling.',
            icon: <Box size={32} />,
            color: '#10b981',
        },
        {
            title: 'Geoportal',
            desc: 'Centralized repository for all OGC-compliant spatial services and metadata.',
            icon: <Globe2 size={32} />,
            color: '#6366f1',
        },
        {
            title: 'Admin Portal',
            desc: 'Secure management system for departmental data submission and verification.',
            icon: <ShieldCheck size={32} />,
            color: '#f59e0b',
        },
    ];

    return (
        <section className="portals">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Integrated <span className="highlight">Spatial Portals</span></h2>
                    <p className="section-subtitle">Access our core modules designed for comprehensive data analysis and governance.</p>
                </div>

                <div className="portals-grid">
                    {portals.map((portal, index) => (
                        <div key={index} className="portal-card reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="portal-icon" style={{ color: portal.color, backgroundColor: `${portal.color}15` }}>
                                {portal.icon}
                            </div>
                            <h3 className="portal-title">{portal.title}</h3>
                            <p className="portal-desc">{portal.desc}</p>
                            <button className="portal-btn" style={{ color: portal.color }}>
                                Enter Portal <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portals;
