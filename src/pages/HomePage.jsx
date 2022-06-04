import React from 'react'
import { BtnComp } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarDeaf, faEarth, faMapPin, faBicycle, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const HomePage = () => {



    return (
        <div className='HOME_PAGE  pt-12 h-[102vh] text-white flex w-full items-center justify-center rounded-b-3xl'>
            <div className='flex items-center flex-col  h-[400px] justify-between'>
                <div className='flex items-center flex-col'>

                    <h1 className='text-5xl font-semibold'>Discover the most engaging places</h1>
                    <BtnComp className='flex items-center gap-2 py-3 mt-6'>
                        <FontAwesomeIcon icon={faEarth} />
                        <div>

                            Discover on 3D Globe
                        </div>
                    </BtnComp>
                </div>

                <div className='bg-white p-2 rounded-lg shadow-lg flex items-center gap-4'>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg w-60'>
                        <FontAwesomeIcon icon={faMapPin} className='text-yellow-500 text-xl' />
                        <div className='text-gray-800'>
                            <p className='text text-xs  text-gray-500'>Location</p>
                            <p className='text-sm font-bold '>Explore nearby destinations</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg w-60'>
                        <FontAwesomeIcon icon={faBicycle} className='text-yellow-500 text-xl' />
                        <div className='text-gray-800'>
                            <p className='text text-xs  text-gray-500'>Activity</p>
                            <p className='text-sm font-bold '>All Activities</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg w-60'>
                        <FontAwesomeIcon icon={faCalendar} className='text-yellow-500 text-xl' />
                        <div className='text-gray-800'>
                            <p className='text text-xs  text-gray-500'>When</p>
                            <p className='text-sm font-bold '>Choose a date</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg w-60'>
                        <FontAwesomeIcon icon={faUsers} className='text-yellow-500 text-xl' />
                        <div className='text-gray-800'>
                            <p className='text text-xs  text-gray-500'>Guest</p>
                            <p className='text-sm font-bold '>1 Guest</p>
                        </div>
                    </div>

                    <BtnComp className={'py-3 px-3 w-12 h-12 flex items-center justify-center'}>
                        <FontAwesomeIcon icon={faSearch} />
                    </BtnComp>
                </div>
            </div>
        </div>
    )
}

export default HomePage