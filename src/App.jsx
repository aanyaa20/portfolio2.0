import React from 'react';
import Navbar from './components/Navbar/navbar.jsx'; 
import Intro from './components/Navbar/intro/intro.jsx';
import Skills from './components/skills/skills.jsx';
import Projects from './components/projects/projects.jsx';
import Tech from './components/tech/tech.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Intro/>
      <Skills />
    <Projects/>
    <Tech/>
    <Contact/>
    <Footer/>

    </>
  );
}

export default App;
