import { useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import KeyFeatures from './components/KeyFeatures'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import PopularDishes from './components/PopularDishes'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <Partners/>
      <KeyFeatures/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
