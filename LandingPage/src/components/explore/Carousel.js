import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillHeart } from 'react-icons/ai';

function Carousel({ props }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
    useTransform: false,
    autoplay: true
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Slider {...settings}>
        {props.map((item) => {
          return (
            <div
              style={{ width: 400 }}
              className='bg-white h-[500px] mx-5 rounded-xl'>
              <div className='h-[75%] flex justify-center'>
                <img
                  className='w-full rounded-t-xl'
                  src={item.url}
                  alt='birthday cake'
                />
              </div>
              <p className='text-center font-raleway text-[#333] font-[600] mt-3'>
                {item.name}
              </p>
              <div className='flex justify-center mt-2'>
                <AiFillHeart className='mx-1' size={20} color={'#FFA5B0'}></AiFillHeart>
                <AiFillHeart className='mx-1' size={20} color={'#FFA5B0'}></AiFillHeart>
                <AiFillHeart className='mx-1' size={20} color={'#FFA5B0'}></AiFillHeart>
                <AiFillHeart className='mx-1' size={20} color={'#FFA5B0'}></AiFillHeart>
                <AiFillHeart className='mx-1' size={20} color={'#FFA5B0'}></AiFillHeart>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Carousel;
