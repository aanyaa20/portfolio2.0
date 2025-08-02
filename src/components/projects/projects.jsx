import React from 'react';
import './projects.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Projects =() =>
{
    return(
        <section id= 'projects'>
            <h2 className= 'projectTitle'>My Projects</h2>
            <span className='projectDesc'>Here are some of the projects I have worked on, showcasing my skills in web development and design.</span>
            <div className= 'projectImg'>
                <img src={Portfolio1} alt='Project 1' className='img'/>
                   <img src={Portfolio2} alt='Project 1' className='img'/>
                      <img src={Portfolio3} alt='Project 1' className='img'/>
                         <img src={Portfolio4} alt='Project 1' className='img'/>
                            <img src={Portfolio5} alt='Project 1' className='img'/>
                               <img src={Portfolio6} alt='Project 1' className='img'/>
            </div>

            <btn className='projectBtn'>See More</btn>
        </section>
    )
}

export default Projects;