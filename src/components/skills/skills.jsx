import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/prob1.png';
import AppDesign from '../../assets/work1.png';


const Skills =() => {
    return (
        <section id='skills'>
           <span className='skillTitle'>What I do best</span>
           <span className ='skillDesc'>I am a passionate web developer. I’m learning DSA and exploring AI. I enjoy building user-friendly websites and constantly improving my coding and problem-solving skills. </span>
           <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UI Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Attention to Detail</h2>
                    <p>
                    From layout to code, I make sure everything looks and works just right.
                    </p>
                </div>
            </div>
                 <div className='skillBar'>
                <img src={WebDesign} alt='Web Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Problem Solving  </h2>
                    <p>
                        I enjoy breaking down complex problems and finding efficient, practical solutions through code.
                         </p>
                </div>
            </div>
                 <div className='skillBar'>
                <img src={AppDesign} alt='App Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Strong Work Ethic</h2>
                    <p>
                        I stay committed to learning, improving, and consistently delivering high-quality work on time.
                    </p>
                </div>
            </div>
           </div>
        </section>
    )
}

export default Skills;