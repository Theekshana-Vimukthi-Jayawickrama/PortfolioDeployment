import React from 'react';
import GitHub from'../assets/GitHub.jpg'
import Linkedin from '../assets/linkedin.png'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>

      <div className='text-center'>
        <h2 className='my-4 text-4xl font-bold leading-tight primary-color'>CONTACT ME</h2>
      </div>
      <div className='max-w-[1200px] mx-auto'>

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
            {/* Contact Form */}
          <div className='mt-6 bg-[#161616] rounded-xl'>
            <div className='p-10'>
              <form action='https://formspree.io/f/xgegjbpp' method='POST'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                  <div>
                    <div className='mt-2.5'>
                      <input type='text' name='name' placeholder='Your Name'
                        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 ' />
                    </div>
                  </div>
                  <div>
                    <div className='mt-2.5'>
                      <input type='email' name='email' placeholder='Your Email'
                        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 ' />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='mt-2.5'>
                      <textarea name='message' placeholder='Your Message'
                        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' rows="4"></textarea>
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <button type='submit' className='w-full p-4 mt-2 text-xl font-semibold text-white rounded-md bg-primary-color'>
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Contact Details */}
          <div className='mt-10 sm:order-last sm:text-left sm:mt-0'>
            <h3 className='text-2xl font-semibold text-white'>Contact Details</h3>
            <ul className='mt-4'>
              <li className='my-4 text-gray-400'>
                Email: <a href='mailto:tvimukthijayawickrama@gmail.com' className='text-gray-400 hover:text-white'>tvimukthijayawickrama@gmail.com</a>
              </li>
              <li className='my-4 text-gray-400'>
                Phone: 077 334 3595
              </li>
              <li className='my-2 text-gray-400'>
                Address: Colombo,kotte
              </li>
              <li className='flex'>
              <a href='https://www.linkedin.com/in/theekshana-vimukthi-jayawickrama-0474ab30b/'><img src={Linkedin} alt="GitHub" className="w-8 h-8 mx-3" /></a>
              <a href='https://github.com/Theekshana-Vimukthi-Jayawickrama'><img src={GitHub} alt="GitHub" className="w-8 h-8 mx-3" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
