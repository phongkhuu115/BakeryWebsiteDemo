import React from 'react';
import ReactDOM from 'react-dom/client';
import IntroPage from './components/intro_page/IntroPage';
import AboutPage from './components/about/AboutPage';
import Explore from './components/explore/Explore';
import Comment from './components/comments/Comment';
import Booking from './components/booking/Booking';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <IntroPage></IntroPage>
    <AboutPage></AboutPage>
    <Explore></Explore>
    <Comment></Comment>
    <Booking></Booking>
    <div className='text-center mb-5 font-raleway mt-10 text-white'>
      <div>
        Image by{' '}
        <a
          className='text-blue-500'
          href='https://www.freepik.com/free-photo/top-view-delicious-cake-arrangement_13638533.htm#query=Cake%20Background&position=43&from_view=search&track=sph'>
          Freepik
        </a>
      </div>
      <p className='flex justify-center items-center'>Copyright © by FKM. All right reserved</p>
      <p>Our Webiste doesn't own any of those picture above. All copyright belong to authors on Unsplash and Freepik</p>
      <p>This is not a real bakery site. This is just a site for practice and demo only.</p>
      <p>This is a nonprofit website, build for only one purpose is to practice web programming</p>
    </div>
  </>
);
