import React from 'react';
import './intro.css';
import bg from '../../../assets/myimage.png'; 
import btnImg from '../../../assets/contact.png';
import {Link} from 'react-scroll';  
const Intro=() =>
{
    return (
<section id="intro"> 
     <div className= "introContainer">
        
        <span className= "hello">Hello,</span>
        <span className= "name">I'm <span className= "myname" >Aanya Singhal</span> <br/>
        Web Developer </span>
        <p className= "para">Enthusiastic frontend developer focused on <br/> learning and creating beautiful web experiences.</p>
   
      <Link ><button className= "btn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }} ><img src={btnImg} alt ="Contact" className='btnImg'/>Contact me</button></Link>
     </div>
     <img src={bg} alt="Profile" className= "bg" />
    </section>
    );
}

export default Intro;