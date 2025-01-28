import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import PopularDishes from './components/PopularDishes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <Partners/>
    </>
  )
}

export default App
