import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import minion1 from '../../assets/people/BobYay.webp'
import minion2 from '../../assets/people/Kevin_29.webp'
import minion3 from '../../assets/people/minion3.png'
import Slides from './Slides';

function Carousel(props) {
  const userComment = [
    {
      image: minion1,
      star: 3,
    },
    {
      image: minion2,
      star: 4,
    },
    {
      image: minion3,
      star: 5,
    }
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    useTransform: false,
    autoplay: true
  };

  return (
    <>
      <Slider {...settings}>
        {userComment.map((item) => {
          return (
            <Slides props={item}></Slides>
          )
        })}
      </Slider>
    </>
  )
}

export default Carousel;