import React from 'react'
import { LinkComp } from '../components';
import TitlePageComp from '../components/TitlePageComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ActivityData } from '../assets';

const ActivityPage = () => {
    return (
        <div>
            <div className='flex w-full items-center justify-between'>

                <TitlePageComp title={'Activities'} />
                <LinkComp >
                    <p>View All</p>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </LinkComp>

            </div>

            <div className="mt-7 flex items-center justify-between">
                {
                    ActivityData.map((item, i) => (
                        <div key={i}>
                            <div className='flex-1 w-[300px] h-96 rounded-xl'>
                                <img src={item.img} className='w-full h-full rounded-xl' alt="" />
                            </div>
                            <h1 className='text-xl font-bold pt-3'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActivityPage