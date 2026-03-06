import React from 'react';
import { LogIn, Globe, HelpCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container header-content">
          <div className="logo-section">
            <img
              src="https://mirsac.mizoram.gov.in/wp-content/uploads/2024/05/mirsac-213x300.png"
              alt="MIRSAC Logo"
              className="main-logo"
            />
            <div className="title-section">
              <h1>Mizoram State Spatial Data Infrastructure (MSSDI)</h1>
              (An initiative under the Department of Science & Technology) <br />
              Mizoram Remote Sensing Application Centre, Government of Mizoram
            </div>
          </div>
          <div className="emblem-section">
            <img
              src="https://nlcbharat.org/wp-content/uploads/2024/02/Mizoram.png"
              alt="India Emblem"
              className="emblem"
            />
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-container">
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#data-explorer">Data Explorer</a></li>
            <li><a href="#geoportal">Geoportal</a></li>
            <li><a href="#3d-view">3D Mizoram</a></li>
            <li><a href="#admin">Admin Portal</a></li>
            <li className="dropdown">
              <a href="#help">Help <HelpCircle size={16} /></a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn-lang">
              <Globe size={18} />
              <span>English</span>
            </button>
            <button className="btn-login">
              <LogIn size={18} />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
