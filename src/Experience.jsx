import { useState } from 'react'
import FadeInSection from './FadeInSection'

function Experience ({title, img, desc, rot}) {
    return (
        <FadeInSection>
            <div className='flex flex-col md:flex-row pr-10 items-center md:items-start justify-between w-full'>

                <div className="absolute left-0 top-0 h-full w-1 bg-gray-400 ml-30"></div>

                <div className='md:w-3/4'>
                    <h1 className='p-10 text-green-800 text-2xl font-anton'>{title}</h1>
                    <p className='p-10 pt-3 text-gray-500 w-full'>{desc}</p>
                </div>

                <div className='flex items-end justify-start pr-0 pt-12 md:w-1/4'>
                    <div className={rot}>
                        <img src={img} className='h-40 border-4 border-double border-black'/>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Experience