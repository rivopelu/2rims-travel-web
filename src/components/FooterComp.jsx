import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FbLogo, igLogo, LogoItam, twitterLogo } from '../assets'
import BtnComp from './BtnComp'
import ContainerComp from './ContainerComp'

const FooterComp = () => {
    return (
        <div className='bg-gray-300 h-[300px] w-full flex items-center justify-center'>
            <ContainerComp className={'w-full flex items-center justify-between  h-40'}>
                <div className=' w-[320px] h-full flex flex-col justify-between'>

                    <img src={LogoItam} alt="2rims logo" className='h-fit w-fit' />
                    <div className='text-sm text-gray-600'>We always make our customers happy by providing as many choises as possible</div>

                    <div className='flex items-center gap-4'>
                        <img className='flex cursor-pointer hover:scale-110 duration-200' src={FbLogo} alt="fb" />
                        <img className='flex cursor-pointer hover:scale-110 duration-200' src={twitterLogo} alt="tw" />
                        <img className='flex cursor-pointer hover:scale-110 duration-200' src={igLogo} alt="ig" />
                    </div>
                </div>
                <div className='flex items-center justify-between flex-1 px-16 h-full '>


                    <div className='h-full flex flex-col justify-between'>
                        <h1 className='font-bold pb-1'>About</h1>
                        <p className='text-gray-600'>About Us</p>
                        <p className='text-gray-600'>Features</p>
                        <p className='text-gray-600'>News</p>
                        <p className='text-gray-600'>Menu</p>
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <h1 className='font-bold pb-1'>Company</h1>
                        <p className='text-gray-600'>Why 2rism</p>
                        <p className='text-gray-600'>Partner With Us</p>
                        <p className='text-gray-600'>FAQ</p>
                        <p className='text-gray-600'>Blog</p>
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <h1 className='font-bold pb-1'>Support</h1>
                        <p className='text-gray-600'>Account</p>
                        <p className='text-gray-600'>Support Center</p>
                        <p className='text-gray-600'>Feedback</p>
                        <p className='text-gray-600'>ContactUs</p>
                    </div>
                </div>
                <div className=' max-w-[320px] flex  h-full justify-between flex-col overflow-hidden'>
                    <h1 className='font-bold text-2xl'>Subscribe on our destination review newsletters</h1>
                    <div className='flex relative w-full justify-between'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-yellow-600 pl-4 absolute text-3xl' />
                        <input type="text" className='w-[275px] pl-14 text-sm rounded-lg focus:bg-white bg-gray-200 outline-none' placeholder='Jhondoe@gmail.com' />
                        <BtnComp >
                            <FontAwesomeIcon icon={faPaperPlane} className='text-white' />
                        </BtnComp>
                    </div>
                </div>
            </ContainerComp>
        </div>
    )
}

export default FooterComp