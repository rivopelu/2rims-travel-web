import React from 'react'
import { ContainerComp, NavbarComp } from './components'
import { HomePage, HotelsAndRestaurant, PopularDestination } from './pages'

const App = () => {
    return (
        <div className='w-full min-h-screen  flex flex-col items-center'>
            <NavbarComp />


            <div className='w-full flex flex-col items-center'>

                <HomePage />

                <ContainerComp className={'flex flex-col gap-10 mt-10'}>
                    <PopularDestination />
                    <HotelsAndRestaurant />
                </ContainerComp>

            </div>
        </div>
    )
}

export default App