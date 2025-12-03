import { useState } from 'react'

function Navbar() {
    return (
        <nav className='shadow-lg flex w-full sticky top-0 bg-white z-50'>
            <h1 className = "bg-white text-green-800 px-20 py-4 flex justify-between items-center text-2xl text-anton">Sameer Sahai</h1>
            <ul className = "flex items-center">
                <li className='h-full w-32'>
                    <a href="#about" className="text-green-800 text-xl group hover:text-green-800">
                        <div className ="flex items-center h-full px-4 py-2 group-hover:bg-lime-50 transition-all duration-300 rounded justify-center">
                            <span className='group-hover:scale-105 transition-all duration-300'>
                                About
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-50 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                        </div>
                    </a>
                </li>

                <li className='h-full w-34'>
                    <a href="#education" className="text-green-800  text-xl group hover:text-green-800 text-anton">
                        <div className ="flex items-center h-full px-4 py-2 group-hover:bg-lime-50 transition-all duration-300 rounded justify-center">
                            <span className='group-hover:scale-105 transition-all duration-300'>
                                Education
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-50 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                        </div>
                    </a>
                </li>

                <li className='h-full w-34'>
                    <a href="#experiences" className="text-green-800  text-xl group hover:text-green-800 text-anton">
                        <div className ="flex items-center h-full px-4 py-2 group-hover:bg-lime-50 transition-all duration-300 rounded justify-center">
                            <span className='group-hover:scale-105 transition-all duration-300'>
                                Experiences
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-50 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                        </div>
                    </a>
                </li>

                <li className='h-full w-32'>
                    <a href="#projects" className="text-green-800  text-xl group hover:text-green-800 text-anton">
                        <div className ="flex items-center h-full px-4 py-2 group-hover:bg-lime-50 transition-all duration-300 rounded justify-center">
                            <span className='group-hover:scale-105 transition-all duration-300'>
                                Projects
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-50 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                        </div>
                    </a>
                </li>

                <li className='h-full w-32'>
                    <a href="#contact" className="text-green-800 text-xl group hover:text-green-800 text-anton">
                        <div className ="flex items-center h-full px-4 py-2 group-hover:bg-lime-50 transition-all duration-300 rounded justify-center">
                            <span className='group-hover:scale-105 transition-all duration-300'>
                                Contact
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-50 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                        </div>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar