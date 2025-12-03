import { useState } from 'react'
import FadeInSection from './FadeInSection'

function Education ({title, years, img, desc, rot}) {
    return (
        <FadeInSection>
            <div className='flex flex-col md:flex-row pl-30 pr-60 items-center md:items-start justify-between'>

                <div className="absolute left-0 top-0 h-full w-1 bg-gray-400 ml-30"></div>

                <div className='md:w-1/2'>
                    <h1 className='pl-10 text-green-800 text-3xl font-anton'>{title}</h1>
                    <p className='pl-10 pt-3 text-gray-500 w-full text-small'>{years}</p>
                    <br />
                    <p className='pl-10 pt-3 text-gray-500 w-full'>{desc}</p>
                </div>

                <div className='flex items-end justify-start pr-0 pt-12 md:w-1/2'>
                    <div className={rot}>
                        <img src={img} className='h-40 border-4 border-double border-black'/>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Education