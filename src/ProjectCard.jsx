import { useState } from 'react'

function ProjectCard({img, title, desc, link}) {
    return (
        <a href = {link} className='rounded-xl pl-20'>
            <div className='relative rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.4)] bg-black w-80 h-80 transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-[2px_4px_25px_rgba(1,50,32,0.8)]'>
                <img className='rounded-lg object-cover h-80' src = {img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white rounded-xl">
                    <h3 className="text-lg font-bold font-anton">{title}</h3>
                    <p className="text-sm font-inter">{desc}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard