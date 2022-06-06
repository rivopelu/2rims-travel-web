import React from 'react'
import { LinkComp } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { AboutImg } from '../assets';

const AboutPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex w-[80%]  h-[350px]  items-center justify-center'>

                <div className="w-full pr-10 flex h-full flex-col justify-between ">
                    <h1 className='text-xl font-bold'>About Us</h1>
                    <p className='py-3 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet, ea voluptas repudiandae iusto provident, minima deleniti neque incidunt sequi consequuntur dolor cupiditate quaerat dignissimos vel temporibus eum quae assumenda, corrupti a maxime repellat laborum architecto? Odio dignissimos maiores cum, aspernatur ipsa enim qui, alias totam expedita tempore doloremque eos deserunt earum debitis dicta saepe numquam officiis! Nostrum nesciunt placeat voluptatibus temporibus, explicabo esse omnis sapiente libero dicta eveniet quia, soluta voluptatem natus nam voluptatum reiciendis numquam deserunt deleniti! Alias.</p>
                    <LinkComp className={'w-fit'} >
                        <p>Read More</p>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </LinkComp>
                </div>
                <div className='h-full w-[790px] rounded-2xl'>
                    <img className='w-full h-full rounded-2xl' src={AboutImg} alt="aboutpage" />
                </div>
            </div>
        </div>
    )
}

export default AboutPage