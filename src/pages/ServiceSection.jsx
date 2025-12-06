import React from 'react'
import { FaCode } from "react-icons/fa";
import { VscGlobe, VscRobot, VscServerProcess, VscSymbolColor } from "react-icons/vsc";

const ServiceSection = () => {
    return (

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
                    <VscSymbolColor size={50} className='text-pink-500 mb-4' />
                    <h2 className='text-2xl font-bold mb-3 text-white'>UI/UX Design</h2>
                    <p className='text-gray-300 text-base leading-relaxed'>
                        I design intuitive and visually appealing user interfaces that provide
                        seamless experiences. My focus is on usability, accessibility, and modern design trends.
                    </p>
                </div>

                {/* Backend & API Development Card */}
                <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                    <VscGlobe size={50} className='text-gray-400 mb-4' />
                    <h2 className='text-2xl font-bold mb-3 text-white'>Backend Development</h2>
                    <p className='text-gray-300 text-base leading-relaxed'>
                        I develop robust and scalable backend systems, APIs, and database architectures
                        using Node.js, Express, and MongoDB to power modern web applications.
                    </p>
                </div>

                {/* AI/ML / Other Service Card */}
                <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>
                    <VscRobot size={50} className='text-blue-500 mb-4' />
                    <h2 className='text-2xl font-bold mb-3 text-white'>AI & Machine Learning</h2>
                    <p className='text-gray-300 text-base leading-relaxed'>
                        I explore integrating AI and ML into web applications, developing intelligent
                        features that enhance user experience and automate processes.
                    </p>
                </div>

                {/* DSA / Problem Solving Card */}
                <div className='bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg 
                hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[350px] flex flex-col items-start'>

                    <VscServerProcess size={50} className='text-yellow-500 mb-4' />

                    <h2 className='text-2xl font-bold mb-3 text-white'>DSA & Problem Solving</h2>

                    <p className='text-gray-300 text-base leading-relaxed'>
                        I strengthen my problem-solving and coding skills through Data Structures and Algorithms in C++.
                        I focus on writing efficient, optimized solutions and preparing for technical interviews and real-world challenges.
                    </p>

                </div>


            </div>
        </div>
    )
}

export default ServiceSection