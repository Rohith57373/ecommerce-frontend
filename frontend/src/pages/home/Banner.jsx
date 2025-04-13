import React from 'react'
import bannerimg from "../../assets/banner.png"

export default function Banner() {
    return (

        <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                {/* change this to scroller images cyclindrical later */}
                <img src={bannerimg} alt="" />
            </div>

            <div className='md:w-1/2 w-full '>
                <h1 className='md:text-5xl text-2xl font-medium md-7'>New Releases This Week</h1>
                <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illo ducimus. Eligendi a cupiditate aut, est commodi similique, maiores quia fuga earum sequi, adipisci reiciendis et praesentium illo voluptatum voluptatem velit autem nisi laboriosam laborum.</p>
                <button className='btn-primary'>Subscribe</button>
            </div>



        </div>
    )
}
