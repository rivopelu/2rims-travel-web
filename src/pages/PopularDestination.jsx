import React, { useState } from 'react'
import { dataPopuler } from '../assets'
import { TitlePageComp } from '../components'

const PopularDestination = () => {

    return (
        <div>
            <TitlePageComp title={'Populer Destinations'} />

            <div className='flex w-full gap-3  justify-between items-center'>
                {
                    dataPopuler.map((item, i) => (
                        <div className='pt-7 cursor-pointer  ' key={i}>
                            <div className=' rounded-lg overflow-hidden '>

                                <img className='rounded-lg  hover:scale-110 duration-200 ' src={item.img} alt={item.title} />
                            </div>
                            <div className='pt-3'>
                                <p className='font-bold  capitalize'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.place}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default PopularDestination