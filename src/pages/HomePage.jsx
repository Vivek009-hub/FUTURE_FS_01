import React from 'react'
import Navbar from '../components/Navbar'
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import Projects from './Project';
import Contact from './ContactSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import SkillSection from './SkillSection';
import { Link } from 'react-scroll';





function HomePage() {
    return (
        <div className='bg-black text-white'>
            <Navbar />

            {/* Home Section */}
            <div id='home' className='min-h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20'>

                {/* LEFT SIDE */}
                <div className='lg:w-1/2 px-5 animate-fadeIn 
                    text-center lg:text-left 
                    flex flex-col items-center lg:items-start'>

                    <p className='text-3xl opacity-90'>Hello, It's Me</p>

                    <h1 className='text-6xl font-bold mt-3 tracking-wide'>
                        Vivek Kumar
                    </h1>

                    <p className='text-3xl mt-3 text-blue-400'>
                        Full Stack Developer
                    </p>

                    <p className='text-lg mt-6 text-gray-300 leading-relaxed max-w-lg'>
                        I'm a Full Stack Developer focused on crafting modern,
                        high-performing web apps. From clean UI designs to robust
                        backend systems, I bring ideas to life in the browser.
                    </p>

                    {/* Social Icons */}
                    <div className='flex mt-8 space-x-5'>

                        <a
                            href="https://linkedin.com/in/vivekkumar-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                size={40}
                                className='p-2 border rounded-full transition-all duration-300 
                 hover:fill-blue-600 hover:shadow-[0_0_15px_rgba(0,123,255,0.7)] cursor-pointer'
                            />
                        </a>

                        <a
                            href="https://instagram.com/choudhary._.vivek/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={40}
                                className='p-2 border rounded-full transition-all duration-300 
                 hover:fill-pink-500 hover:shadow-[0_0_15px_rgba(255,20,147,0.7)] cursor-pointer'
                            />
                        </a>

                        <a
                            href="https://github.com/vivek009-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare
                                size={40}
                                className='p-2 border rounded-full transition-all duration-300 
                 hover:fill-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer'
                            />
                        </a>

                    </div>


                    <button className='mt-10 px-6 py-3 bg-blue-600 rounded-full 
                hover:bg-blue-700 transition-all duration-300 shadow-lg'>
                        <Link to="about" smooth={true} duration={600} >    
                                            More About Me
                        </Link>
                    </button>
                </div>

                {/* RIGHT SIDE — only on large screens */}
                <div className='hidden lg:flex w-1/2 justify-center items-center relative'>

                    <div className="absolute w-72 h-72 rounded-full bg-white blur-3xl opacity-30"></div>

                    <img
                    src="/assets/VIVEK KUMAR_7454943117.jpg"
                        alt="Profile"
                        className='w-82 h-82 rounded-full object-cover border-4 border-white 
                       relative shadow-[0_0_50px_rgba(255,255,255,0.3)]'
                    />
                </div>

            </div>

            {/* About Section */}
            <AboutSection />


            {/* Services Section */}
            <ServiceSection />

            {/* Skills Section */}
            <SkillSection />

            {/* Projects */}
            <Projects />

            {/* Contatct Section */}
            <Contact />
        </div>
    )
}

export default HomePage
