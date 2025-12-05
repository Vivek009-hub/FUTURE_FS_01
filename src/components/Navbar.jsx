import React from 'react'

function Navbar() {
    return (
        <div className='flex bg-black text-white justify-between items-center h-[75px] w-full px-5 border-b border-white sticky top-0 z-50'>
            <div>
                <h1 className=' text-3xl font-bold'>Portfolio.</h1>
            </div>
            <div >
                <ul className='flex flex-row-start gap-10 text-lg cursor-pointer  '>
                    <li className='hover:drop-shadow-[0_0_40px_white] transition-all duration-300'>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
