
import React from 'react';
import './intro.css';
import bg from '../../../assets/myimage2.png'; 
import btnImg from '../../../assets/contact.png';
import { Link } from 'react-scroll';  
import { Typewriter } from 'react-simple-typewriter';

const particles = Array.from({ length: 20 });

const Intro = () => {
  return (
    <section id="intro"> 
      
      <div className="floating-particles">
        {particles.map((_, index) => (
          <span 
            key={index} 
            className={`particle ${index % 5 === 0 ? "code-symbol" : ""}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {index % 5 === 0 ? "</>" : ""}
          </span>
        ))}
      </div>

      <div className="introContainer">

        <div className="introText">
          <span className="hello">Hey there,</span>
          <span className="name">
            I'm <span className="myname">Aanya Singhal</span>
          </span>
          
          <span className="role typing">Web Developer</span>

          <p className="para">
            Enthusiastic frontend developer focused on <br />
            learning and creating beautiful web experiences.
          </p>

          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              <img src={btnImg} alt="Contact" className='btnImg'/>Contact me
            </button>
          </Link>
        </div>

        <div className="introImage">
          <img src={bg} alt="Profile" className="profileImg" />
        </div>

      </div>
    </section>
  );
}

export default Intro;
