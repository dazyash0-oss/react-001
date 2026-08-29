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
        <div className="slider-container -mt-12 overflow-hidden">
            <Slider {...settings}>
                <div>
                    <div 
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner1})`, // Fixed camelCase
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content Wrapper */}
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold'>start exploring</button>

                        </div>
                    </div>
                </div>

                <div>
                     <div>
                    <div 
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner2})`, // Fixed camelCase
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content Wrapper */}
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold'>start exploring</button>
                            
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <div>
                    <div 
                        className="h-[650px] lg:h-[800px] relative"
                        style={{
                            backgroundImage: `url(${banner3})`, // Fixed camelCase
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content Wrapper */}
                        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-5 md:px-0 z-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl lg:text-6xl capitalize">
                                discover your next adventure
                            </h1>
                            <p className="text-white lg:text-lg lg:w-[700px] capitalize">
                                explore the world with us and create unforgettable memories.
                            </p>
                            <button className='bg-red-500 px-3 py-2 text-white rounded-md font-semibold'>start exploring</button>
                            
                        </div>
                    </div>
                </div>
                </div>
            </Slider>
            <div>
                
            </div>
        </div>
    );
};

export default Hero;