import React from 'react';
import './NewsEvents.css';

const NewsEvents = () => {
    const newsData = [
        {
            id: 1,
            date: 'MARCH 04, 2026',
            title: 'Advanced Satellite Training Program for New GIS Professionals',
            description: 'MIRSAC announces its upcoming quarterly capacity building program focusing on LULC classification using high-res imagery.',
            category: 'TRAINING'
        },
        {
            id: 2,
            date: 'FEBRUARY 28, 2026',
            title: 'New Spatial Data Infrastructure Policy Released for Mizoram',
            description: 'The Government of Mizoram has announced a new framework to streamline spatial data sharing across all state departments.',
            category: 'POLICY'
        },
        {
            id: 3,
            date: 'FEBRUARY 15, 2026',
            title: 'MIRSAC Collaborates with ISRO for Forest Fire Monitoring',
            description: 'A new joint initiative aimed at leveraging satellite data for real-time fire detection and mitigation in the state.',
            category: 'COLLABORATION'
        }
    ];

    return (
        <section className="news-section reveal" id="news">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Recent <span className="highlight">News & Events</span></h2>
                    <p className="section-subtitle">Stay updated with the latest happenings at MIRSAC and advancements in Mizoram's spatial domain.</p>
                </div>

                <div className="news-grid">
                    {newsData.map(news => (
                        <div key={news.id} className="news-card">
                            <div className="news-image">
                                <div className="category-badge">{news.category}</div>
                            </div>
                            <div className="news-content">
                                <span className="news-date">{news.date}</span>
                                <h4 className="news-title">{news.title}</h4>
                                <p className="news-desc">{news.description}</p>
                                <button className="read-more">Read More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
