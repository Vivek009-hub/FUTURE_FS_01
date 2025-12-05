import React from 'react'
import Navbar from '../components/Navbar'
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


function HomePage() {
    return (
        <div className='bg-black text-white'>
            <Navbar />

            {/* Home Section */}
            <div className='min-h-[90vh] w-full flex justify-center items-center px-20'>

                {/* LEFT SIDE */}
                <div className='w-1/2 px-5 animate-fadeIn'>
                    <p className='text-3xl opacity-90'>Hello, It's Me</p>

                    <h1 className='text-6xl font-bold mt-3 tracking-wide'>
                        Vivek Kumar
                    </h1>

                    <p className='text-3xl mt-3 text-blue-400'>
                        Full Stack Developer
                    </p>

                    <p className='text-lg mt-6 text-gray-300 leading-relaxed'>
                        I'm a Full Stack Developer focused on crafting modern,
                        high-performing web apps. From clean UI designs to robust
                        backend systems, I bring ideas to life in the browser.
                    </p>

                    {/* Social Icons */}
                    <div className='flex mt-8 space-x-5'>
                        <FaLinkedin size={40}
                            className='p-2 border rounded-full 
                            transition-all duration-300
                            hover:fill-blue-600 hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]'
                        />
                        <FaInstagram size={40}
                            className='p-2 border rounded-full 
                            transition-all duration-300
                            hover:fill-pink-500 hover:shadow-[0_0_15px_rgba(255,20,147,0.7)]'
                        />
                        <FaGithubSquare size={40}
                            className='p-2 border rounded-full 
                            transition-all duration-300
                            hover:fill-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                        />
                    </div>

                    {/* CTA Button */}
                    <button className='mt-10 px-6 py-3 bg-blue-600 rounded-full 
                        hover:bg-blue-700 transition-all duration-300 shadow-lg'>
                        More About Me
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className='w-1/2 flex justify-center items-center relative'>

                    {/* Soft Glow */}
                    <div className="absolute w-72 h-72 rounded-full bg-white blur-3xl opacity-30"></div>

                    <img
                        src="src/assets/VIVEK KUMAR_7454943117.jpg"
                        alt="Profile"
                        className='w-82 h-82 rounded-full object-cover border-4 border-white 
                        relative shadow-[0_0_50px_rgba(255,255,255,0.3)]'
                    />
                </div>

            </div>

            {/* About Section */}
            <div className='min-h-[92vh] w-full flex flex-col md:flex-row justify-center items-center bg-black text-white px-5 md:px-10 py-20'>

                {/* LEFT IMAGE SIDE */}
                <div className='w-full md:w-1/2 flex justify-center items-center relative mb-10 md:mb-0'>

                    {/* Soft Glow */}
                    <div className="absolute w-72 h-72 rounded-full bg-white blur-3xl opacity-20 animate-pulse"></div>

                    <img
                        src="src/assets/VIVEK KUMAR_7454943117.jpg"
                        alt="Profile"
                        className='w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white 
            relative shadow-[0_0_60px_rgba(255,255,255,0.3)] transform transition-transform duration-500 hover:scale-105'
                    />
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div className='w-full md:w-1/2 px-5 md:px-10 text-center md:text-left'>

                    <h2 className='text-4xl font-bold mb-6'>About Me</h2>

                    <p className='text-lg text-gray-300 leading-relaxed'>
                        I'm <span className='text-blue-500 font-semibold'>Vivek Kumar</span>, a passionate <span className='font-semibold'>Full Stack Developer</span> who loves building modern, high-performance web applications. I enjoy working across both the frontend and backend — from crafting smooth, responsive UI designs to developing secure and scalable APIs using modern JavaScript technologies.
                    </p>

                    <p className='text-lg text-gray-300 leading-relaxed mt-4'>
                        I’m exploring <span className='text-blue-400 font-semibold'>AI & Machine Learning</span> to integrate intelligent features into full-stack applications, creating smarter, more efficient user experiences. I write clean, maintainable code and constantly improve my problem-solving skills through <span className='font-semibold'>DSA in C++</span>.
                    </p>

                    <p className='text-lg text-gray-300 leading-relaxed mt-4'>
                        I’m always curious, learning, and excited to build meaningful digital products that solve real-world problems and provide value to users.
                    </p>

                    <a
                        href="/Vivek_Resume.pdf"
                        download
                        className='mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                       rounded-full hover:from-blue-600 hover:to-blue-700 text-white font-semibold 
                       shadow-lg transition-all duration-300 transform hover:scale-105'
                    >
                        Download Resume
                    </a>

                </div>
            </div>


            {/* Services Section */}
            <div className='min-h-[90vh] bg-black py-20 px-5'>
                <h1 className='text-5xl font-bold mb-16 text-center text-white'>My Services</h1>

                <div className='flex flex-wrap justify-center gap-10'>

                    {/* Web Development Card */}
                    <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                        <FaCode size={50} className='text-blue-500 mb-4' />
                        <h2 className='text-2xl font-bold mb-3 text-white'>Web Development</h2>
                        <p className='text-gray-300 text-base leading-relaxed'>
                            I build responsive, user-friendly websites using modern technologies like
                            HTML, CSS, JavaScript, and React. I focus on clean UI, smooth interactions,
                            and performance optimization.
                        </p>
                    </div>

                    {/* UI/UX Design Card */}
                    <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                        <FaInstagram size={50} className='text-pink-500 mb-4' />
                        <h2 className='text-2xl font-bold mb-3 text-white'>UI/UX Design</h2>
                        <p className='text-gray-300 text-base leading-relaxed'>
                            I design intuitive and visually appealing user interfaces that provide
                            seamless experiences. My focus is on usability, accessibility, and modern design trends.
                        </p>
                    </div>

                    {/* Backend & API Development Card */}
                    <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                        <FaGithubSquare size={50} className='text-gray-400 mb-4' />
                        <h2 className='text-2xl font-bold mb-3 text-white'>Backend Development</h2>
                        <p className='text-gray-300 text-base leading-relaxed'>
                            I develop robust and scalable backend systems, APIs, and database architectures
                            using Node.js, Express, and MongoDB to power modern web applications.
                        </p>
                    </div>

                    {/* AI/ML / Other Service Card */}
                    <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                        <FaLinkedin size={50} className='text-blue-500 mb-4' />
                        <h2 className='text-2xl font-bold mb-3 text-white'>AI & Machine Learning</h2>
                        <p className='text-gray-300 text-base leading-relaxed'>
                            I explore integrating AI and ML into web applications, developing intelligent
                            features that enhance user experience and automate processes.
                        </p>
                    </div>

                    {/* DSA / Problem Solving Card */}
                    <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>

                        <FaGithubSquare size={50} className='text-yellow-500 mb-4' />

                        <h2 className='text-2xl font-bold mb-3 text-white'>DSA & Problem Solving</h2>

                        <p className='text-gray-300 text-base leading-relaxed'>
                            I strengthen my problem-solving and coding skills through Data Structures and Algorithms in C++.
                            I focus on writing efficient, optimized solutions and preparing for technical interviews and real-world challenges.
                        </p>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default HomePage
