import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <img
                        src="https://marsac.mn.gov.in/img/logo/marsac.png"
                        alt="MARSAC Logo"
                        className="footer-logo"
                    />
                    <h3>MARSAC</h3>
                    <p>Innovating with spatial science for the progress of Manipur. Transforming data into actionable insights since inception.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Project Gallery</a></li>
                        <li><a href="#">News & Events</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Government Portals</h4>
                    <ul>
                        <li><a href="#">Manipur State Portal <ExternalLink size={14} /></a></li>
                        <li><a href="#">Bhuvan - ISRO <ExternalLink size={14} /></a></li>
                        <li><a href="#">Digital India <ExternalLink size={14} /></a></li>
                        <li><a href="#">MeitY <ExternalLink size={14} /></a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Information</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={20} className="icon" />
                            <span>MARSAC Complex, Near High Court, North A.O.C, Imphal, Manipur - 795001</span>
                        </li>
                        <li>
                            <Phone size={20} className="icon" />
                            <span>+91-385-2422115</span>
                        </li>
                        <li>
                            <Mail size={20} className="icon" />
                            <span>dir-marsac-mn@gov.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; 2026 Manipur Remote Sensing Applications Centre (MARSAC). All Rights Reserved.</p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
