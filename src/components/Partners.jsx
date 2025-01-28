import React from 'react'
import swiggy from '../assets/swiggy.png'
import chowman from '../assets/Chowman-Logo.png'
import zomato from '../assets/zomato.png'
import magicpin from '../assets/magicpin.png'

const Partners = () => {
  return (
    <div className='py-10 bg-white'>
        <div className='text-center' >
            <h1 className='text-3xl lg:text-4xl font-bold text-red-500' >Our Partners</h1>
            <p className='text-sm lg:text-xl'>Meet Our Partners</p>
            <div
            style={{
                maskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
                WebkitMaskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
            }}
            className='lg:max-w-6xl mx-auto mt-10 py-2 flex gap-4 flex-nowrap overflow-hidden'
            >
                <div className='flex gap-4 loop-scroll' >
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={swiggy} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={zomato} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={chowman} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={magicpin} alt="" />
                    </div>
                </div>
                <div className='flex gap-4 loop-scroll' >
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={swiggy} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={zomato} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={chowman} alt="" />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={magicpin} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Partners