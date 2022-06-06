import React from 'react'
import { ContainerComp, FooterComp, NavbarComp } from './components'
import { ActivityPage, HomePage, HotelsAndRestaurant, PopularDestination, TravelTips } from './pages'
import AboutPage from './pages/AboutPage'

const App = () => {
    return (
        <div className='w-full min-h-screen  flex flex-col items-center'>
            <NavbarComp />


            <div className='w-full flex flex-col items-center'>

                <HomePage />

                <ContainerComp className={'flex flex-col gap-10 mt-10'}>
                    <PopularDestination />
                    <HotelsAndRestaurant />
                    <TravelTips />
                    <ActivityPage />
                    <AboutPage />
                </ContainerComp>
                <FooterComp />
            </div>
        </div>
    )
}

export default App