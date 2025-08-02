import React from 'react';
import './tech.css';
import C from '../../assets/c_lang.png';
import Cpp from '../../assets/cpp.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind.png';
import mysql from '../../assets/mysql.png';
import php from '../../assets/php.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';

const Tech = () => {    
    return (
        <section id='tech'>
            <h2 className='techTitle'>My Skills</h2>
            <div className= 'techGrid'>
                <div className= 'techCard'>      
                  <img src={html} alt='HTML' className= 'techImg' />
                  <span>HTML</span>
                  </div>
               <div className= 'techCard'>      
                  <img src={css} alt='CSS' className= 'techImg' />
                  <span>CSS</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={js} alt='js' className= 'techImg' />
                  <span>JavaScript</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={react} alt='react' className= 'techImg' />
                  <span>React</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={tailwind} alt='Tailwind CSS' className= 'techImg' />
                  <span>Tailwind CSS</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={C} alt='C' className= 'techImg' />
                  <span>C</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={Cpp} alt='cpp' className= 'techImg' />
                  <span>C++</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={php} alt='php' className= 'techImg' />
                  <span>PHP</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={mysql} alt='mysql' className= 'techImg' />
                  <span>MySQL</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={git} alt='git' className= 'techImg' />
                  <span>Git</span>
                  </div>
                   <div className= 'techCard'>      
                  <img src={github} alt='github' className= 'techImg' />
                  <span>GitHub</span>
                  </div>

            </div>
        </section>
    )

}
export default Tech;