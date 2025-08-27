import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import resumeImg from '../../assets/resume.png';
import resumePDF from '../../assets/resume.pdf';
import {Link} from 'react-scroll';  
import { useState } from 'react';
import menu from '../../assets/menu.png'; 


 
const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className= 'desktopMenuListItem' activeClass= 'active' to='intro' spy={true} offset= {-100} duration= {500}>Home</Link>
            <Link className= 'desktopMenuListItem' activeClass= 'active' to='skills' spy={true} offset= {-50} duration= {500}>About</Link>
                <Link className= 'desktopMenuListItem' activeClass= 'active' to='projects' spy={true} offset= {-50} duration= {500}>Projects</Link>
      </div>

<button
  className="desktopMenuBtn"
  onClick={() => window.open(resumePDF, "_blank")}
>
  <img src={resumeImg} alt="" className="desktopMenuImg" /> Resume
</button>



 <img src={menu} alt="menu" className="mobMenu"   onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>

        <Link className= 'listItem' activeClass= 'active' to='intro' spy={true} offset= {-100} duration= {500} onClick={() => setShowMenu(false)}>Home</Link>
            <Link className= 'listItem' activeClass= 'active' to='skills' spy={true} offset= {-50} duration= {500} onClick={() => setShowMenu(false)}>About</Link>
                <Link className= 'listItem' activeClass= 'active' to='projects' spy={true} offset= {-50} duration= {500} onClick={() => setShowMenu(false)}>Projects</Link>
                
      </div>


    </nav>
  );
};

export default Navbar;
