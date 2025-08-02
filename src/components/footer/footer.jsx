import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <span className="footerName">
         <p>Designed &amp; Developed by <span style={{ fontWeight: '600' }}>Aanya Singhal</span> <span>❤️</span></p>

        </span>

        <div className="footerIcons">
          <a href="https://github.com/aanyaa20" target="_blank" rel="noopener noreferrer" className="icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/aanya-singhal-a850822b1" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        
          <a href="mailto:aanyasinghal32@gmail.com" className="icon mail">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <p className="footerBottom">© 2025 All rights reserved</p>
    </footer>
  );
};

export default Footer;
