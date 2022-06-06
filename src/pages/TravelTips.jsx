import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import TitlePageComp from '../components/TitlePageComp';
import { LinkComp } from '../components';
import { faCalendar, faUser, faComment } from '@fortawesome/free-regular-svg-icons';
import { dataTips } from '../assets';

const TravelTips = () => {

    return (
        <div>
            <div className='flex w-full items-center justify-between'>

                <TitlePageComp title={'Travel Tips and Advice'} />
                <LinkComp >
                    <p>View All</p>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </LinkComp>

            </div>
            <div className='w-full flex pt-7 gap-2 justify-between items-center'>

                {
                    dataTips.map((item, i) => (
                        <div className="kiri w-1/2  justify-center flex gap-4" key={i}>
                            <div className='h-[300px] w-[800px] rounded-xl'>

                                <img className='h-full w-full rounded-xl' src={item.img} alt="" />
                            </div>

                            <div className='flex flex-col justify-between'>
                                <div>

                                    <h1 className='text-2xl font-bold '>{item.title}</h1>
                                    <p className='mt-3 font-semibold text-gray-700'>{item.desc}</p>
                                </div>

                                <div className='flex items-center w-full  gap-3'>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 cursor-pointer hover:text-blue-500 duration-200'>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>{item.publish}</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 cursor-pointer hover:text-blue-500 duration-200'>
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>{item.author}</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 cursor-pointer hover:text-blue-500 duration-200'>
                                        <FontAwesomeIcon icon={faComment} />
                                        <p>{item.Comment}</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TravelTips