import LogoImg from './img/logo.png'
import profile1Img from './img/profil1.png'
import HomeBgImg from './img/homeBg.png'

import populer1 from './img/populerDestionation/1.png'
import populer2 from './img/populerDestionation/2.png'
import populer3 from './img/populerDestionation/3.png'
import populer4 from './img/populerDestionation/4.png'
import populer5 from './img/populerDestionation/5.png'
import populer6 from './img/populerDestionation/6.png'

import HotelImg1 from './img/HotelRestauranPage/1.jpg'
import HotelImg2 from './img/HotelRestauranPage/2.jpg'
import HotelImg3 from './img/HotelRestauranPage/3.jpg'
import HotelImg4 from './img/HotelRestauranPage/4.jpg'


import TipsImg1 from './img/tips/1.jpg'
import TipsImg2 from './img/tips/2.jpg'

import activitieImg1 from './img/activity/1.jpg'
import activitieImg2 from './img/activity/2.jpg'
import activitieImg3 from './img/activity/3.jpg'
import activitieImg4 from './img/activity/4.jpg'


import AboutImg from './img/about.jpg'
import LogoItam from './img/logoItam.png'


import FbLogo from './img/logos/fb.png'
import igLogo from './img/logos/ig.png'
import twitterLogo from './img/logos/twitter.png'

export const dataPopuler = [
    { img: populer1, title: 'Big Sur', place: 'Calofirnia, USA' },
    { img: populer2, title: 'Prscott', place: 'Arizona, USA' },
    { img: populer3, title: 'Fort Mayers', place: 'Florida, USA' },
    { img: populer4, title: 'Tucson', place: 'Arizona, USA' },
    { img: populer5, title: 'St. Joseph', place: 'Michigan, USA' },
    { img: populer6, title: 'Madrid', place: 'spain' },
]


export const HotelsAndRestaurantData = [
    { name: 'Monastero Santa Rosa Hotel & Spa', location: 'salerno, italy', rating: 4, img: HotelImg1 },
    { name: 'Grand Hotel Tremezzo', location: 'Lake Como, Italy', rating: 3, img: HotelImg2 },
    { name: 'The Oberoi Udaivilas, Udaipur', location: 'Udaipur, India', rating: 5, img: HotelImg3 },
    { name: 'AKA Beverly Hils', location: 'Los Angeles, US', rating: 4, img: HotelImg4 },

]


export const dataTips = [
    {
        title: 'East Village Ice Cream Crawl',
        desc: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
        publish: "today",
        author: "Maria Philips",
        Comment: 2,
        img: TipsImg1
    },
    {
        title: 'Brooklyn Bridge cinematic photo walk',
        desc: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. ",
        publish: "today",
        author: "James Calzoni",
        Comment: 17,
        img: TipsImg2
    },
]


export const ActivityData = [
    { title: "Sailing", img: activitieImg1 },
    { title: "Climbing", img: activitieImg2 },
    { title: "Skiing", img: activitieImg3 },
    { title: "Hiking", img: activitieImg4 },
]

export { LogoImg, profile1Img, HomeBgImg, AboutImg, LogoItam, FbLogo, igLogo, twitterLogo }