import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { StartRating, TitlePageComp } from '../components'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const HotelsAndRestaurant = () => {
    return (
        <div className="">
            <TitlePageComp title={'Populer Destinations'} />

            <div className='flex w-full gap-3  justify-between items-center'>
                <div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80" alt="asdf" />

                        <div>
                            <p>Montaster santo hotels</p>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>Losasi tempat</p>
                                </div>
                                <StartRating />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsAndRestaurant