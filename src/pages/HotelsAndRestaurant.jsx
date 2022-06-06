import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LinkComp, StartRating, TitlePageComp } from '../components'
import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { HotelsAndRestaurantData } from '../assets';


const HotelsAndRestaurant = () => {

    return (
        <div className="">
            <div className='flex w-full items-center justify-between'>

                <TitlePageComp title={'Populer Destinations'} />
                <LinkComp >
                    <p>View All</p>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </LinkComp>
            </div>

            <div className='flex w-full gap-5  justify-between items-center'>
                {
                    HotelsAndRestaurantData.map((item, i) => (
                        <div className='flex-1 pt-7' key={i}>
                            <div className='flex h-96 overflow-hidden rounded-xl'>

                                <img className='h-full w-full rounded-xl  hover:scale-110 duration-200 ' src={item.img} alt="asdf" />
                            </div>

                            <div>
                                <p className='pt-3 font-bold '>{item.name}</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p>{item.location}</p>
                                    </div>
                                    <StartRating rate={item.rating} />
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default HotelsAndRestaurant