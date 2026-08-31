import React from 'react';
import SliderPkg from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from '../assets/four.jfif';
import banner2 from '../assets/three.jfif';
import banner3 from '../assets/two.jfif';

// Resolve Vite CommonJS module wrapping
const Slider = SliderPkg.default || SliderPkg;

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    const slides = [
        {
            image: banner1,
            title: "discover your next adventure",
            description: "explore the world with us and create unforgettable memories."
        },
        {
            image: banner2,
            title: "experience new cultures",
            description: "find the best destinations and unique local experiences."
        },
        {
            image: banner3,
            title: "plan your dream vacation",
            description: "book seamless trips tailored to your personal style."
        }
    ];

    return (
        <div className="relative slider-container -mt-12 overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="h-[650px] lg:h-[800px] relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* Content Wrapper */}
                            <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                                <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                    {slide.title}
                                </h1>
                                <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                    {slide.description}
                                </p>
                                <button className="bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 text-white rounded-md font-semibold cursor-pointer">
                                    Start Exploring
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Floating Search Bar */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-md z-20 absolute hidden lg:block bottom-10 left-1/2 -translate-x-1/2 w-[1050px] p-6">
                <div className="grid gap-5 grid-cols-4 items-center">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="location" className="flex font-semibold gap-1 items-center text-gray-700">
                            Location
                        </label>
                        <select id="location" className="border border-gray-300 rounded-sm p-2 text-gray-600 outline-none focus:border-red-500">
                            <option value="">Select Location</option>
                            <option value="paris">Paris, France</option>
                            <option value="bali">Bali, Indonesia</option>
                            <option value="tokyo">Tokyo, Japan</option>
                            <option value="rome">Rome, Italy</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="type" className="flex font-semibold gap-1 items-center text-gray-700">
                            Type
                        </label>
                        <select id="type" className="border border-gray-300 rounded-sm p-2 text-gray-600 outline-none focus:border-red-500">
                            <option value="">Select Type</option>
                            <option value="adventure">Adventure</option>
                            <option value="beach">Beach & Relaxation</option>
                            <option value="cultural">Cultural</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="date" className="flex font-semibold gap-1 items-center text-gray-700">
                            Date
                        </label>
                        <input type="date" id="date" className="border border-gray-300 rounded-sm p-2 text-gray-600 outline-none focus:border-red-500" />
                    </div>

                    <div className="flex items-end h-full">
                        <button className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold py-2.5 rounded-md">
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;