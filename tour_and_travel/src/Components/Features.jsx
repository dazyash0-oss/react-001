import { Camera, Headphones, Hotel, Map, Plane } from 'lucide-react'
import React from 'react'

const Features = () => {

    const features = [
{
    icon :<Plane className='w-6 h-6 mb-2 text-primary'/>,
    title :"exclusive fligth deals ",
    description : "access to exclusive flight deals and discounts, helping you save money on your travel expenses."
},
{
    icon :<Hotel className='w-6 h-6 mb-2 text-primary'/>,
    title :"luxury accomodations ",
    description : "hand picked selection of luxury hotels, resorts, and vacation rentals, ensuring a comfortable and memorable stay."
},
{
    icon :<Map className='w-6 h-6 mb-2 text-primary'/>,
    title :"customised itineraries ",
    description : "personalised travel itineraries designed to suit your preferences and budget."
},

{
    icon :<Camera className='w-6 h-6 mb-2 text-primary'/>,
    title :"guided tours and activities ",
    description : "expertly guided tours and activities, providing you with unique and immersive experiences at your destination."
},
{
    icon :<Headphones className='w-6 h-6 mb-2 text-primary'/>,
    title :"24/7 customer support ",
    description : "round-the-clock customer support to assist you with any questions or concerns during your travel plans."
},
{
    icon :<Shield  className='w-6 h-6 mb-2 text-primary'/>,
    title :"travel insurance and protection ",
    description : "comprehensive travel insurance and protection options to ensure your peace of mind during your journeya."
},

    ]

  return (
    <div>Features</div>
  )
}

export default Features