import React from 'react'

const AboutSection = () => {
    return (


        <div id='about' className='min-h-[92vh] w-full flex flex-col md:flex-row justify-center items-center bg-black text-white px-5 md:px-10 py-20'>

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

                <h2 className='text-5xl font-bold mb-6'>About Me</h2>

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

    )
}

export default AboutSection