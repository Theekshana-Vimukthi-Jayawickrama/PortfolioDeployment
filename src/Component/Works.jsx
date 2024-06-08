import React, { useState } from 'react';
import about from '../assets/about.jpg';
import ETickz from '../assets/ETickz.png'
import PCHUB from '../assets/PCHUB.png'
import Music from '../assets/Music.png'
import StayEase from '../assets/StayEase.jpg'
import projectVideo1 from '../assets/project1.mp4'; // Example video file
import projectVideo2 from '../assets/project2.mp4'; // Example video file
import projectVideo3 from '../assets/project3.mp4'; // Example video file
import projectVideo4 from '../assets/project4.mp4'; // Example video file
import { Link } from 'react-scroll';

const projects = [
    { id: 1, image: ETickz, video: projectVideo1, title: "Mini Project: E-Tickz", description: "E-Tickz is a digital bus ticket app that reduces paper waste, improves convenience, and aligns with sustainability goals by generating QR codes for easy access, issuance, and usage tracking.Technologies used: Flutter, React, Bootstrap,  Spring Boot, MySQL", github: "https://github.com/Theekshana-Vimukthi-Jayawickrama/The_Capstone_Project_Offcial_E_TIZ_Frontend" },
    { id: 2, image: PCHUB, video: projectVideo2, title: "PC HUB", description: "The platform is a C2C website that facilitates transactions between buyers and sellers. Sellers can showcase their products, buyers can browse, negotiate, and finalize deals, all posts require administrator approval and administrators can place advertisements in site's slider. Technologies used: React, Bootstrap,  Spring Boot, MySQL", github: "https://github.com/Theekshana-Vimukthi-Jayawickrama/Web_Project_C2CWebSite.git" },
    { id: 3, image: Music, video: projectVideo3, title: "TONE BOOK", description: "This application consolidates notations, chords, and lyrics in a single platform, making it accessible for everyone to enjoy. The Tone Music App enhances your experience with a wide selection of Sinhala songs. Technologies used: Flutter, React, Bootstrap,  Spring Boot, MongoDB", github: "https://github.com/Theekshana-Vimukthi-Jayawickrama/Music_Application" },
    { id: 4, image: StayEase, video: projectVideo4, title: "StayEase", description: "Developed a web application for a hotel, enabling users to explore detailed information about rooms, experiences, entertainment, kids' areas, and more. The platform also facilitates seamless room bookings. Technologies used: Flutter, React, Bootstrap,  Spring Boot, MySQL", github: "https://github.com/Theekshana-Vimukthi-Jayawickrama/Hotel_Project_StayEase" },
  ];

const Works = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  const handleDescriptionClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5' id="work">
      <div className='pb-8'>
        <p className='mb-3 text-4xl font-bold primary-color'>PROJECTS</p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>

      <div className='grid gap-4 m-4 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.id} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex flex-col items-center bg-cover relative'>
            <img src={project.image} alt='' className='h-[200px] w-full object-cover' />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold tracking-wider text-white'>{project.title}</span>
              <div className='pt-8 text-center'>
                <button 
                  className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'
                  onClick={() => handleVideoClick(project.video)}>
                  Play Video
                </button>
                <button 
                  className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                </button>
              </div>
            </div>
            <div className='p-4 text-center text-gray-400 cursor-pointer' onClick={() => handleDescriptionClick(project.video)}>
              {project.description}
            </div>
            
          </div>
        ))}
      </div>

      {currentVideo && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative'>
            <button 
              className='absolute z-10 text-2xl text-white top-2 right-2'
              onClick={handleCloseVideo}>
              &times;
            </button>
            <video controls autoPlay className='w-full max-w-[800px]' controlsList="nodownload">
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
