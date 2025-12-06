import React from 'react'
import { Link } from "react-scroll";


function Navbar() {
    return (
        <div className='flex bg-black text-white justify-between items-center h-[75px] w-full px-5 border-b border-white sticky top-0 z-50'>
            <div>
                <h1 className=' text-3xl font-bold'>Portfolio.</h1>
            </div>
            <div >
                <ul className='flex flex-row-start gap-10 text-lg cursor-pointer  '>
                    <li className='hover:drop-shadow-[0_0_40px_white] transition-all duration-300'><Link to="home" smooth={true} duration={600}>
                        Home
                    </Link></li>
                    <li><Link to="about" smooth={true} duration={600}>
                        About
                    </Link></li>
                    <li><Link to="skill" smooth={true} duration={600}>
                        Skills
                    </Link></li>
                    <li><Link to="project" smooth={true} duration={600}>
                        Projects
                    </Link></li>
                    <li><Link to="contact" smooth={true} duration={600}>
                        Contact 
                    </Link></li>          
                </ul>
            </div>
        </div>
    )
}

export default Navbar
