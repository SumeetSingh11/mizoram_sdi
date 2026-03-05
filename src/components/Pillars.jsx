import React from 'react';
import { Database, Search, Users, Layout, FileCheck, Share2 } from 'lucide-react';
import './Pillars.css';

const Pillars = () => {
    const pillars = [
        {
            title: 'GEODATA',
            desc: 'Collection, Processed, Archived & Distributed.',
            icon: <Database size={32} />
        },
        {
            title: 'METADATA',
            desc: 'Standardized data elements that describe the data.',
            icon: <Search size={32} />
        },
        {
            title: 'PARTNERSHIP',
            desc: 'Common classification & Common collection criteria.',
            icon: <Users size={32} />
        },
        {
            title: 'FRAMEWORK',
            desc: 'Mechanisms identify and describe data using features, attributes, values.',
            icon: <Layout size={32} />
        },
        {
            title: 'Standards',
            desc: 'Common classification & Common collection criteria standarized to OGC.',
            icon: <FileCheck size={32} />
        },
        {
            title: 'CLEARING HOUSE',
            desc: 'Distributed network of spatial data producer, managers and users.',
            icon: <Share2 size={32} />
        }
    ];

    return (
        <section className="pillars">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Pillars of <span className="highlight">MSSDI</span></h2>
                    <p className="section-subtitle">
                        A framework of policies, institutional arrangements, technologies, data, and people that enables the sharing and effective usage of geographic information by standardizing formats and protocols for access and interoperability.
                    </p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="pillar-item reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="pillar-icon-wrapper">
                                <div className="pillar-icon">{pillar.icon}</div>
                            </div>
                            <div className="pillar-content">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
