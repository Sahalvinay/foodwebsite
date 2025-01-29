import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonial = () => {

    const testimonials = [
        {
        id: 1,
        name: "Pratik Chakraborty",
        rating: 5,
        text: "I like pizzas!",
        },
        {
        id: 2,
        name: "SK Imran",
        rating: 5,
        text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch.",
        },
        {
        id: 3,
        name: "Vinay Sahal",
        rating: 4,
        text: "Wonderful dining experience and at affordable prices!",
        },
        {
        id: 4,
        name: "Swapnendu Dey",
        rating: 3,
        text: "Great ambiance, but food quality could be better",
        },
        {
        id: 5,
        name: "Nisha samanta",
        rating: 4,
        text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable.",
        }
      ]

    return (
        <div className='py-10 '>
                <h1 className='text-center text-3xl lg:text-4xl font-bold'>What Our Customers Say</h1>
            <div className=' max-w-6xl mx-auto py-10 px-3 '>
                <Swiper
                   style={{
                    "--swiper-pagination-color": "#EF4444",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "8px"
                  }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{delay:5000}}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                    pagination={{ clickable: true }}
                    className="mySwiper pb-10"
                >
                    {
                        testimonials.map((item)=> {
                            return <SwiperSlide key={item.id} className='pb-10' >
                            <div className='border border-gray-400 shadow-md shadow-orange-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? ( <div className='flex'>
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star />
                                </div>):( <div className='flex'>
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                    <Star fill='true' />
                                </div>)}
                               
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                  <div>
                                  <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                  <p className='text-sm mt-1'>CEO, Webelite Builders</p>
                                  </div>
                                  <Quote className='text-red-400'/>
                                </div>
                               
    
                            </div>
                        </SwiperSlide>
                        })
                    }
                    <div className='swiper-pagination absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-6 '></div>
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonial