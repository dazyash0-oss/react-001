import React from 'react'
import bali from '../assets/a.jfif'
import Venice from '../assets/d.jfif'
import Tokyo from '../assets/a.jfif'
import india from '../assets/c.jfif'
import paris from '../assets/b.jfif'
import next from '../assets/four.jfif'
import back from '../assets/three.jfif'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={ } aly='prevArrow' {...props} />
);



const FeaturedDestination = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    nextArrow:
  };

  const destinationJson = [
    { name: 'baliya ', img: bali, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Venice ', img: Venice, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Tokyo ', img: Tokyo, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'india ', img: india, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'paris ', img: paris, time: '5days- 4nights', star: '3 (12 reviews)', price: '69,999' }
  ]


  return (
    <>
    <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
      <div className ='max-w-7xl mx-auto px-4 md:px-6'>
        <h2>Featured Destinations</h2>
      </div>

    </section>





    </>
  )
}

export default FeaturedDestination