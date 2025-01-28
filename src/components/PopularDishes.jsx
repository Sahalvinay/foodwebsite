import React from 'react'
import pizza1 from "../assets/pizza1.png"
import pizza2 from "../assets/pizza2.png"
import pizza3 from "../assets/pizza3.png"
import Card from './Card'

const PopularDishes = () => {
    const menu = [
        {
            id:1,
            pizaa:pizza1,
            name:"Peppe panner",
            desc:"The peppy paneer pizza is made with fresh and soft paneer with crispy capsicum and topped with spicy red pepper",
            rating: 4
        },
        {
            id:2,
            pizaa:pizza2,
            name:"mexican green wave",
            desc:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes with sprinkling of exotic Mexican herbs.",
            rating: 4
        },
        {
            id:3,
            pizaa:pizza3,
            name:"margarita pizza",
            desc:"Margherita pizza is known for its ingredients representing the colours of the Italian flag.",
            rating: 4
        }
    ]
  return (
    <div className="py-20 bg-gray-800">
        <div className='text-center max-w-7x1 mx-auto' >
            <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Popular Dishes</h1>
            <p className='text-x1 text-white pt-2' >Check out our most popular and highly-rated dishes.</p>
            <div className='grid grid-cols-3 pt-11 gap-7' >
                {
                    menu.map((item) =>{
                        return <Card key={item.id} menu={item} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PopularDishes