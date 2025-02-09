import { Mail,MapPin, Phone } from 'lucide-react'
import React from 'react'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <footer className='bg-muted text-muted-foreground bg-orange-50' >
    <div className='max-w-7xl mx-auto px-6 py-12' >
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8' >
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500' >Quick Links</h3>
                <ul className='space-y-2' >
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500' >Contact us</h3>
                <div className='flex gap-2' > 
                    <MapPin className='text-red-500' />
                    <div>
                        <p>123, Restaurant Street</p>
                        <p>City, state 12435</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center' > 
                    <Phone className='text-red-500' />
                        <p>Phone: {123} 456-7890</p>
                </div>
                <div className='flex gap-2' > 
                    <Mail className='text-red-500' />
                        <p>Email: info@Restaurant.com</p>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500' >Opening Hours</h3>
                <p>Monday - friday : 11am - 10pm</p>
                <p>Saturday - sunday : 10am - 11pm</p>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500' >Follow Us</h3>
                <div className='flex space-x-4' > 
                    <img src={facebook} alt="" className='h-6 w-6' />
                    <img src={instagram} alt="" className='h-6 w-6' />
                    <img src={twitter} alt="" className='h-6 w-6' />
                </div>
            </div>
        </div>
    </div>
    <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center" >
        <p>&copy; {new Date().getFullYear()} <span className='text-orange-400 font-semibold'>Swiggy</span>. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer