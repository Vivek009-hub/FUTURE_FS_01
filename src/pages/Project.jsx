import React from 'react'

const projects = [
    {
        title: "Full-Stack Food Delivery Website",
        description:
            "A complete food delivery platform with shop listings, live order tracking, partner dashboards, delivery partner assignment, and online payments using Razorpay. Built with React, Node.js, Express, and MongoDB.",
        img: "/assets/FoodApp2.png",
        link: "https://github.com/Vivek009-hub/Food-Delivery-App",
    },
    {
        title: "Real-Time Chat Application",
        description:
            "A real-time chat app featuring instant messaging, online user status, and live typing indicators using Socket.io, React, and Node.js.",
        img: "/assets/ChatApp.png",
        link: "https://github.com/Vivek009-hub/Real-Time-Chat-Application",
    },
    {
        title: "Real-Time Weather Forecast Website",
        description:
            "A weather application that provides real-time temperature, humidity, and forecast updates using Weather API integration.",
        img: "/assets/WeatherApp.png",
        link: "https://github.com/Vivek009-hub/WeatherApp",
    },
    {
        title: "Personal Portfolio Website",
        description:
            "A modern, responsive personal portfolio showcasing skills, projects, and contact features. Built with React and Tailwind CSS.",
        img: "/assets/Portfolio.png",
        link: "https://github.com/Vivek009-hub/Personal-Portfolio",
    },
    {
        title: "Password Manager",
        description:
            "A secure password manager for storing and managing credentials with encryption features, built using React and local storage/crypto APIs.",
        img: "/assets/PassManager.png",
        link: "https://github.com/Vivek009-hub/Password-Manager",
    },
];



const Projects = () => {
    return (
        <div id='project' className="min-h-[90vh] bg-black py-20 px-5">

            <h1 className="text-5xl font-bold text-center text-white mb-16">
                My <span className="text-cyan-400">Projects</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">

                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="w-80 bg-[#0f0f0f] border border-gray-800 rounded-xl
        shadow-[0_0_25px_rgba(0,229,255,0.15)]
        hover:shadow-[0_0_45px_rgba(0,229,255,0.35)]
        transition-all duration-300 hover:scale-105"
                    >

                        {/* Image */}
                        <img
                            src={p.img}
                            className="w-full h-44 object-cover rounded-t-xl"
                        />

                        <div className="p-5">
                            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                            <p className="text-gray-300 text-sm">{p.description}</p>

                            <a
                                href={p.link}
                                target="_blank"
                                className="mt-4 block text-center bg-gradient-to-r 
            from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full
            hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                            >
                                GitHub
                            </a>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects