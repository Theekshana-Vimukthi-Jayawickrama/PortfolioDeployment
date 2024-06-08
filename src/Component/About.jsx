import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 id="about"'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='flex mt-4 text-left md:mt-0'>
                <div className='mx-6 my-auto'>
                    <h2>
                        <h2 className='mb-4 text-4xl font-bold primary-color'> ABOUT ME</h2>
                        <p className='text-lg'>
                        I am a proficient full-stack developer with experience in a range of technologies. My proficiency spans across multiple domains, utilizing React for robust web development, Flutter for dynamic mobile application development, and SpringBoot for efficient backend systems. In addition, I adeptly work with databases, including MongoDB and MySQL, to ensure seamless data management and integration within my projects. I am a motivated undergraduate student pursuing a degree in computing, with a robust foundation in software engineering and a deep passion for addressing complex challenges through technology. My primary focus lies in full-stack development, where I continuously strive to expand my skills and knowledge.                         </p>
                    </h2>

                </div>

            </div>

            <img className='py-8 mx-auto rounded-3xl md:py-0' src={about} width={300} height={300} />

        </div>

    </div>
  )
}

export default About