import { Camera, Headphones, Hotel, Map,Shield, Plane } from 'lucide-react'
import React from 'react'

const Features = () => {

    const features = [
        {
            icon: <Plane className='w-6 h-6 mb-2 text-primary' />,
            title: "exclusive fligth deals ",
            description: "access to exclusive flight deals and discounts, helping you save money on your travel expenses."
        },
        {
            icon: <Hotel className='w-6 h-6 mb-2 text-primary' />,
            title: "luxury accomodations ",
            description: "hand picked selection of luxury hotels, resorts, and vacation rentals, ensuring a comfortable and memorable stay."
        },
        {
            icon: <Map className='w-6 h-6 mb-2 text-primary' />,
            title: "customised itineraries ",
            description: "personalised travel itineraries designed to suit your preferences and budget."
        },

        {
            icon: <Camera className='w-6 h-6 mb-2 text-primary' />,
            title: "guided tours and activities ",
            description: "expertly guided tours and activities, providing you with unique and immersive experiences at your destination."
        },
        {
            icon: <Headphones className='w-6 h-6 mb-2 text-primary' />,
            title: "24/7 customer support ",
            description: "round-the-clock customer support to assist you with any questions or concerns during your travel plans."
        },
        {
            icon: <Shield className='w-6 h-6 mb-2 text-primary' />,
            title: "travel insurance and protection ",
            description: "comprehensive travel insurance and protection options to ensure your peace of mind during your journey."
        }

    ]

    return (
        <section className='py-12 md:py-20'>
            <div className='max-w-7xl mx-auto px-4 md:px-6'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Why Choose Our Travel Services</h2>
                    <p className = 'mt-4 text-muted-foreground md:text-xl'>Discover the unique features that make your journey with us extraordinary</p>
                </div>
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <div key={index} className='transition-all bg-red-50   rounded-lg hover:shadow-lg'>
                            <div className='p-6 text-center'>
                                {feature.icon}
                                <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
                                <p className='text-gray-600'>{feature.description}</p>
                            </div>

                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}

export default Features