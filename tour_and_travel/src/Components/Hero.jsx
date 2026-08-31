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
        slidesToScroll: 1
    };

    return (
        /* Added `relative` here so absolute positioning works for child elements */
        <div className="relative slider-container -mt-12 overflow-hidden">
            <Slider {...settings}>
                <div>
                    <div
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold cursor-pointer'>
                                start exploring
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold cursor-pointer'>
                                start exploring
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold cursor-pointer'>
                                start exploring
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>

            {/* Fixed Floating Options Container */}
            <div className='bg-white border border-gray-300 shadow-lg rounded-md z-20 absolute hidden lg:block bottom-[10%] left-1/2 -translate-x-1/2 w-[1050px] p-4'>
                <div className='flex gap-3 items-center'>
                    <div className='grid gap-5 grid-cols-4 flex-grow'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="location-select" className='flex font-semibold gap-1 items-center text-gray-700'>
                                Location
                            </label>
                            <select id="location-select" className='border border-gray-300 rounded-sm p-1.5 outline-none focus:border-red-500'>
                                <option value="">Select Location</option>
                                <option value="1">bali</option>
                                <option value="2">india </option>
                                <option value="3">tokyo</option>
                                <option value="4">venice</option>
                                <option value="5">paris</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlfor="" className='font-semibold'>check in </label>
                            <input type="date" className='border p-1 border-gray-300 rounded-sm' />

                        </div>


                        <div className='flex flex-col gap-2'>
                            <label htmlfor="" className='font-semibold'>check out </label>
                            <input type="date" className='border p-1 border-gray-300 rounded-sm' />
                        </div>
                        

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="guest-select" className='flex font-semibold gap-1 items-center text-gray-700'>
                                guest
                            </label>
                            <select id="guest-select" className='border border-gray-300 rounded-sm p-1.5 outline-none focus:border-red-500'>
                                <option value="">Select options</option>
                                <option value="1">2 guests</option>
                                <option value="2">4 guests</option>
                                <option value="3">6 guests</option>
                                <option value="4">8 guests</option>
                                <option value="5">10 guests</option>
                            </select>
                        </div>
                    </div>


                    <div className = 'flex flex-col'>
                        <label htmlFor="" className = 'text-white'> transmission</label>
                        <button class = 'bg-red-500 transition-all ease-in text-white hover:bg-black hover:text-white px-3 h-8 py-1 rounded-md'>Book Nows</button>



                    </div>



                </div>
            </div>

        </div>
    );
};

export default Hero;