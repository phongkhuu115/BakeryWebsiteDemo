import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

function Explore(props) {
  const birthdaySlides = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Faneta-pawlik-d8s13D29QiE-unsplash.jpg?alt=media&token=9d389d5f-ce48-44e3-b32a-e65a4fc49341',
      name: 'Lemon Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Fdeva-williamson-ntfGWVbBiO0-unsplash.jpg?alt=media&token=22e976f0-4ea5-4866-9257-946279d2a9ce',
      name: 'Molten Chocolate Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Fdiliara-garifullina-gK297xpY6os-unsplash.jpg?alt=media&token=8a905ed6-3b39-4123-88bc-5b4acd9374b8',
      name: 'Strawberry Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Fkatie-rosario-QNyRp21hb5I-unsplash.jpg?alt=media&token=8ad5355a-85ab-40ea-a777-a20089d69f62',
      name: 'Chocolate Salted-Caramel',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Frichard-burlton-wUg4u1kKTXw-unsplash.jpg?alt=media&token=07963c1e-ffa1-421e-8272-043aabad59b7',
      name: 'Cookie Dough Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Frobert-anderson--gDHgEcec6Q-unsplash.jpg?alt=media&token=f192f8f7-0f6a-4230-8061-f222229b811e',
      name: 'Butter Pecan Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Fslashio-photography-T5KPTbbK-_E-unsplash.jpg?alt=media&token=b63610be-4a33-4785-9032-0608f2790532',
      name: 'Rocky Road Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/BirthdayCake%2Fstories-ys8qztLjJyg-unsplash.jpg?alt=media&token=c062c472-e164-4438-b2b9-7115b0990f07',
      name: 'Key Lime Poke Cake',
    },
  ];

  const weddingCake = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fdavid-holifield-7ePjhwxtxCU-unsplash.jpg?alt=media&token=1785ff73-cd2d-448d-a1e2-70ee6f18ceae',
      name: 'Coconut Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fdavid-holifield-oJtuw59ViW4-unsplash.jpg?alt=media&token=e8d1db4a-4384-4d20-92db-95c0f08f31e3',
      name: 'Pound Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fjunior-reis-fnnUGPP3eVs-unsplash.jpg?alt=media&token=d971539d-0fda-41d1-a038-2a90cf85ee8f',
      name: 'Black Forest Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fmads-eneqvist-Xb5c2x6wJPc-unsplash.jpg?alt=media&token=51b74bea-76a1-4a7b-94fc-821e025f4acc',
      name: 'Carrot Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fmelissa-walker-horn-4on47p0-bk4-unsplash.jpg?alt=media&token=31471268-130a-49cf-8780-7b16754739a2',
      name: 'Eggnog Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fphotos-by-lanty-22JxStzTxwo-unsplash.jpg?alt=media&token=8c2aa52f-339d-4488-871e-2fcd7df99735',
      name: 'Candy Crush Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Fthomas-william-U7N6XFvTBjU-unsplash.jpg?alt=media&token=4eb69c7f-7380-4694-8366-577006712a13',
      name: 'Angel Food Cake',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/WeddingCake%2Ftony-eight-media--uZNyLofoPw-unsplash.jpg?alt=media&token=c10d6f9b-c39b-44df-aa3f-faaab506c4ff',
      name: 'Cheesecake',
    },
  ];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div id='explore' className='m-14'>
        <h1 className='mb-8 text-[32px] font-raleway text-[#898B8A] font-[600]'>
          Find your best vibe
        </h1>
        <h3 className='mb-4 text-[20px] font-raleway font-[600]'>
          For Birthday
        </h3>
        <Carousel props={birthdaySlides}></Carousel>
        <h3 className='mt-6 mb-4 text-[20px] font-raleway font-[600]'>
          For Wedding
        </h3>
        <Carousel props={weddingCake}></Carousel>
      </div>
    </>
  );
}

export default Explore;
