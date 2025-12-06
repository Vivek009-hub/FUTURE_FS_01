import React from 'react'

const projects = [
    {
        title: "Currency-Converter_API",
        description:
            "A real-time currency converter using HTML, CSS, JavaScript, and API integration.",
        img: "/images/currency.png",
        link: "https://github.com/yourrepo",
    },
    {
        title: "Amazon-clone",
        description:
            "An Amazon homepage clone built using pure HTML and CSS for a responsive UI.",
        img: "/images/amazon.png",
        link: "https://github.com/yourrepo",
    },
    {
        title: "Todos list using React",
        description:
            "A dynamic To-Do List app using React, HTML, CSS, and JavaScript for task management.",
        img: "/images/todo.png",
        link: "https://github.com/yourrepo",
    },
];

const Projects = () => {
    return (
        <div className="min-h-[90vh] bg-black py-20 px-5">

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