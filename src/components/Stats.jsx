import React from 'react';
import { Database, FileText, Building2, Users } from 'lucide-react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { label: 'Total Datasets', value: '319', icon: <Database size={32} /> },
        { label: 'Data Themes', value: '35', icon: <FileText size={32} /> },
        { label: 'Line Departments', value: '27', icon: <Building2 size={32} /> },
        { label: 'Registered Users', value: '18', icon: <Users size={32} /> },
    ];

    return (
        <section className="stats">
            <div className="container stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="stat-icon">
                            {stat.icon}
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
