import React from 'react';
import { LogIn, Globe, HelpCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-content">
          <div className="logo-section">
            <img
              src="https://marsac.mn.gov.in/img/logo/marsac.png"
              alt="MARSAC Logo"
              className="main-logo"
            />
            <div className="title-section">
              <h1>Manipur State Spatial Data Infrastructure (MSSDI)</h1>
              <p>(An initiative under the Department of Science and Technology, Manipur Remote Sensing Applications Centre, Govt. of Manipur)</p>
            </div>
          </div>
          <div className="emblem-section">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kanglasa.svg/330px-Kanglasa.svg.png"
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
            <li><a href="#3d-view">3D Manipur</a></li>
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
    </header>
  );
};

export default Header;
