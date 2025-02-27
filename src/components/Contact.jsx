import React from 'react'
import Lottie from 'lottie-react'
import delivery from '../assets/delivery.json'

const Contact = () => {
  return (
    <div className='' >
        <div className='pb-20' >
            <div className='mx-auto max-w-2xl text-center' >
                <h2 className='text-3xl lg:text-4xl font-bold tracking-tight text-red-500' >Contact us</h2>
                <p className='mt-2 text-lg lg:text-xl leading-8 text-gray-600' >Please provide your details below</p>
            </div>
            <div className='lg:grid lg:grid-cols-2 mt-10 lg:mt-0' >
                <Lottie animationData={delivery} />
                <form action="#" className="lg:mx-auto mt-16 max-w-xl sm:mt-20 bg-orange-50 p-8 rounded-lg mx-4 ">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm md:text-base font-semibold leading-tight mb-1 ">
                                    First name <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm md:text-base font-semibold leading-tight mb-1">
                                    Last name <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm md:text-base font-semibold leading-tight mb-1">
                                    Email <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm md:text-base font-semibold leading-tight mb-1">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm md:text-base font-semibold leading-tight mb-1">
                                    Message <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact