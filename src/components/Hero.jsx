import React from 'react'
import pizza from '../assets/pizza.webp'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
const Hero = () => {
  return (
    <div className='bg bg-orange-50 h-[600px]'>
        <div className='flex lg:flex-row flex-col items-center justify-center p-5 lg:max-w-7xl mx-auto relative'>
            <div className='lg:w-1/2 lg:space-y-6 lg:px-10 relative z-20'>
                <div className='flex gap-2'>
                    <img src = {playstore} alt = "download" className='w-28 h-10' />
                    <img src = {appstore} alt = "download" className='w-28 h-10' />
                </div>
                <h1 className='font-bold text-6xl tracking-normal'> <span className = 'text-red-500'>Delicious</span> meals delivered to your doorstep</h1>
                <p className='text-sm text-gray-600 my-3'>Discover a world of culinary delights with our food delivery service. Enjoy fast, reliable delivery and a wide selection of mouthwatering dishes.</p>
                <div className='flex gap-3'>
                    <button className='bg-red-500 px-3 py-2 z-20 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all' >Order Now</button>
                    <button className='bg-white px-3 py-2 rounded-lg border z-20 border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Now</button>
                </div>
            </div>
            <div className='lg:w-1/2 w-[275px]  relative'>
                <img src = {pizza} alt = "food" />
            </div>
        </div>
    </div>
  )
}
export default Hero