import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center relative z-10'>
      <h1 className='ml-4 text-3xl font-bold primary-color'>Theekshana Vimukthi</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'>
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:cursor-pointer">Home</ScrollLink>
        </li>
        <li className='p-5'>
          <ScrollLink to="skills" smooth={true} duration={500} className="cursor-help hover:cursor-pointer">Skills</ScrollLink>
        </li>
        <li className='p-5'>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-help hover:cursor-pointer">About</ScrollLink>
        </li>
        <li className='p-5'>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-text hover:cursor-pointer">Projects</ScrollLink>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden mr-7'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 'bg-[#0a0a0a] fixed h-full left-0 top-0 w-[85%] z-10 ease-in-out duration-500' : 'fixed left-[-100%] z-10'}>
        <h1 className='m-4 text-3xl primary-color'>Theekshana</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'>
            <ScrollLink to="home" smooth={true} duration={500} onClick={handleNav} className="cursor-pointer hover:cursor-pointer">Home</ScrollLink>
          </li>
          <li className='p-2'>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={handleNav} className="cursor-help hover:cursor-pointer">Skills</ScrollLink>
          </li>
          <li className='p-2'>
            <ScrollLink to="about" smooth={true} duration={500} onClick={handleNav} className="cursor-help hover:cursor-pointer">About</ScrollLink>
          </li>
          <li className='p-2'>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={handleNav} className="cursor-text hover:cursor-pointer">Projects</ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
