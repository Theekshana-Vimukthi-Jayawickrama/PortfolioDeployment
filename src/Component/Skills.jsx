import React, { useState } from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import Springboot from '../assets/spring-logo.png';
import Flutter from '../assets/flutter.png';
import Figma from '../assets/figma.png';
import '../Css/Skills.css'; 

const skills = [
  { name: 'HTML', image: html, percentage: '90%' },
  { name: 'CSS', image: css, percentage: '85%' },
  { name: 'JavaScript', image: javascript, percentage: '60%' },
  { name: 'React', image: react, percentage: '60%' },
  { name: 'Bootstrap', image: bootstrap, percentage: '75%' },
  { name: 'Flutter', image: Flutter, percentage: '55%' },
  { name: 'SpringBoot', image: Springboot, percentage: '70%' },
  { name: 'Figma', image: Figma, percentage: '50%' }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div>
      <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='m-4 text-2xl font-bold text-gray-400 md:text-4xl'>
          My <br /> Tech <br /> Stack
        </h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] skill-container'
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img src={skill.image} alt={skill.name} width={100} height={100} />
            <p className='mt-2'>{skill.name}</p>
            {hoveredSkill === index && (
              <div className='indicator'>
                <div className='progress-bar' style={{ width: skill.percentage }}>
                  
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
