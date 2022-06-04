import React, { useState } from 'react'
import { LogoImg, profile1Img } from '../assets'
import ContainerComp from './ContainerComp'
import { NavLink } from 'react-router-dom'
const NavbarComp = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    const navlinkData = [
        { title: 'Home', link: '/' },
        { title: 'Hotels', link: '/hotels' },
        { title: 'Restaurant', link: '/restaurant' },
        { title: 'Tours', link: '/tours' },
        { title: 'Destinations', link: '/destinatios' },
        { title: 'Activeties', link: '/activities' },
        { title: 'Contact', link: '/contact' },
    ]

    return (
        <div className={`fixed h-12  text-white flex justify-center items-center w-full ${color && 'bg-gray-900'}`}>
            <ContainerComp className={'flex items-center justify-between'}>

                <NavLink to={'/'} className='w-36 '>

                    <img src={LogoImg} alt=" logo" />
                </NavLink>

                <div className="navlist flex items-center gap-5 flex-1  justify-center">
                    {
                        navlinkData.map((item, i) => (

                            <NavLink key={i} className='text-gray-300 font-extralight' activeClassName='active' to={item.link} >{item.title}</NavLink>
                        ))
                    }

                </div>


                <div className="kanan flex items-center justify-end w-36 ">
                    <div className='flex  flex-col text-right pr-2 '>
                        <p className='font-thin text-xs'>Hello</p>
                        <div className='text-sm'>Jhon Doe</div>
                    </div>
                    <img src={profile1Img} className='w-9 h-9 rounded-full' alt="jhon doe" />
                </div>
            </ContainerComp>

        </div>
    )
}

export default NavbarComp