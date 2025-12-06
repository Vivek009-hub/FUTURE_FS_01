import React from 'react'
import { FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { MdOutlineDataArray } from "react-icons/md";

const SkillSection = () => {
    return (
        <div id='skill' className="min-h-[90vh] bg-black py-20 px-5">

            <h1 className="text-5xl font-bold text-center text-white mb-16">
                My <span className="text-gray-300">Skills</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

                {[
                    { name: "HTML", icon: <FaHtml5 size={60} color='orange' /> },
                    { name: "CSS", icon: <IoLogoCss3 size={60} color='blue' /> },
                    { name: "JavaScript", icon: <FaJs size={60} color='yellow' /> },
                    { name: "React", icon: <FaReact size={60} color='#61DAFB' /> },
                    { name: "Node.js", icon: <FaNodeJs size={60} color='green' /> },
                    { name: "C++ / DSA", icon: <MdOutlineDataArray size={60} color='#1D4ED8' /> },
                ].map((skill, index) => (
                    <div
                        key={index}
                        className="w-64 h-64 bg-[#0f0f0f] border border-gray-800 rounded-xl
                           flex flex-col justify-center items-center text-white
                           shadow-[0_0_20px_rgba(255,255,255,0.08)]
                           hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                           transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                        <div className="text-white opacity-80 mb-4">
                            {skill.icon}
                        </div>

                        <p className="text-xl font-semibold tracking-wide">
                            {skill.name}
                        </p>

                        <div className="w-28 h-[2px] bg-gray-700 mt-4 rounded-full"></div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default SkillSection