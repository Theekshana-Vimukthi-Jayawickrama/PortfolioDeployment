import React from 'react';
import { Element, Link } from 'react-scroll';
import heroiamge from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';
import NavBar from './Navbar';
import Skills from './Skills';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../Css/Hero.css';

const Hero = () => {
  return (
    <>
      <NavBar />
      <Element name='home'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70h] mx-auto py-8 bg-black'>
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div className={`my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px] ${isVisible ? 'move-up-down' : ''}`}>
                <img src={heroiamge} alt='hero image' className='rounded-full' />
              </div>
            )}
          </TrackVisibility>
          <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-4xl font-extrabold text-white sm:text-8xl'>
              <span className='primary-color'>I'm a</span><br />
              <TypeAnimation
                sequence={[
                  "Frontend Dev",
                  1000,
                  "Backend Dev",
                  1000,
                  "Web Dev",
                  1000,
                  "Full Stack Dev",
                  1000
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className='my-6 text-white sm:text-lg lg:text-xl'>
              My name is Theekshana and I am a student in Sabaragamuwa University of Sri Lanka.
            </p>
            <div className='my-8'>
              <a href="/" className='w-full px-6 py-3 mr-4 text-white rounded-xl bg-gradient-to-br from-orange-500 to-pink-500'>
                Download CV
              </a>
              {/* Contact button scrolls to Contact section */}
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <button className='px-6 py-3 mr-4 text-white border border-gray-400  rounded-xl hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none'>
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Element>
      <Element name='skills'>
        <div className='p-6'><Skills /></div>
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name='projects'>
        <div className='m-2'><Works /></div>
      </Element>
      {/* Contact Section */}
      <Element name='contact'>
        <Contact />
      </Element>
      <Footer />
    </>
  );
};

export default Hero;
