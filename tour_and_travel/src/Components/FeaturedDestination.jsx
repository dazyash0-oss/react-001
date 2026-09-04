import React from 'react';
import bali from '../assets/a.jfif';
import Venice from '../assets/d.jfif';
import Tokyo from '../assets/a.jfif';
import india from '../assets/c.jfif';
import paris from '../assets/b.jfif';
import next from '../assets/four.jfif';
import back from '../assets/three.jfif';
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from 'lucide-react';
import '../Components/Css/reactSlick.css';

// Resolves Vite ESM import issues for react-slick
const Slider = SliderModule.default || SliderModule;

// Handles both string URLs and Vite module object imports for image assets
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={back?.default || back} alt='prevArrow' {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={next?.default || next} alt='nextArrow' {...props} />
);

const FeaturedDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const destinationJson = [
    { name: 'baliya', img: bali, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Venice', img: Venice, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Tokyo', img: Tokyo, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'india', img: india, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'paris', img: paris, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' }
  ];

  return (
    <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
          Featured Destinations
        </h2>
        <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
        <div className="slider-container">
          <Slider {...settings}>
            {destinationJson.map((destination) => (
              <div key={destination.name} className="px-2">
                <div className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5'>
                  <div>
                    <img
                      src={destination.img?.default || destination.img}
                      alt={destination.name}
                      width={600}
                      height={400}
                      className='object-cover w-full h-48 hover:scale-110 transition-all duration-300'
                    />
                    <div className='p-4'>
                      <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'>
                        <Clock width={15} />{destination.time}
                      </p>
                      <h3 className='text-xl font-bold mb-2 capitalize'>{destination.name}</h3>
                      <p className='flex gap-1 items-center'>
                        <Star width={20} className="text-yellow-500 fill-yellow-500" />{destination.star}
                      </p>
                      <p className='text-gray-600 mb-4 mt-2'>
                        Experience the beauty of {destination.name}
                      </p>
                      <div className='flex gap-4'>
                        <button className='px-3 py-2 bg-red-500 rounded-md text-white font-medium'>
                          ${destination.price}
                        </button>
                        <button className='px-3 py-2 bg-black rounded-md text-white font-medium'>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;