import React from 'react'
import { FaCode } from "react-icons/fa";

function ServiceCard() {
    return (
        <div className='bg-green-500 p-5 rounded-lg shadow-lg m-5 hover:shadow-xl 
    transition-shadow duration-300 h-full flex flex-col items-start text-center w-[430px] mt-4'>
            <FaCode size={40} color='white' />

            <h2 className='text-2xl font-bold mb-3'>Web Development</h2>
            <p className='text-white'>This is a brief description of the service offered. It highlights key features and benefits to the user.</p>

        </div>
    )
}

export default ServiceCard
