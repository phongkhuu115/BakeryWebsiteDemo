import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaPhoneAlt, FaCalendar, FaClock } from 'react-icons/fa';
import { MdEmail, MdGroups, MdMessage } from 'react-icons/md';
import {BsFacebook, BsInstagram, BsTwitter,BsYoutube, BsGithub} from 'react-icons/bs'

function Booking(props) {
  return (
    <>
      <div id='contact' className='mx-14 font-raleway'>
        <div className='border-b-4 rounded-xl'></div>
        <h3 className='text-[32px] text-center mt-5'>Contact</h3>
        <h1 className='text-[52px] text-center font-[600] text-[#CC3636]'>
          Send us a message
        </h1>
        <div className='flex justify-center'>
          <div>
            <div className='flex'>
              <div className='relative'>
                <FaUserAlt className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></FaUserAlt>
                <input
                  type='text'
                  placeholder='Name'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
              <div className='relative'>
                <MdEmail className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></MdEmail>
                <input
                  type='text'
                  placeholder='Email'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
              <div className='relative'>
                <FaPhoneAlt className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></FaPhoneAlt>
                <input
                  type='text'
                  placeholder='Phone'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
            </div>
            <div className='flex'>
              <div className='relative'>
                <FaCalendar className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></FaCalendar>
                <input
                  type='text'
                  placeholder='Date'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
              <div className='relative'>
                <FaClock className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></FaClock>
                <input
                  type='text'
                  placeholder='Time'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
              <div className='relative'>
                <MdGroups className='absolute top-[50%] translate-y-[-50%] left-4 pointer-events-none'></MdGroups>
                <input
                  type='text'
                  placeholder='Guest'
                  className='px-10 py-2 rounded-xl m-2'
                />
              </div>
            </div>
            <div className='relative m-2'>
              <MdMessage className='absolute top-3 left-2'></MdMessage>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Message'
                className='resize-none w-full rounded-xl py-2 px-10'></textarea>
            </div>
          </div>
        </div>
        <h3 className='text-[32px] text-center mt-5'>Or</h3>
        <h1 className='text-[52px] text-center font-[600] text-[#CC3636]'>
          Our Infomation
        </h1>
        <div className='text-[24px] flex justify-center'>
          <div className='bg-white p-4 rounded-lg'>
            <p>Email: fake.email@ekaf.com - Mrs. Somebody</p>
            <p>Phone: 0909090909 - Mr. Somebody</p>
            <div className='flex mt-5'>
              <a href="#"><BsFacebook color='#4267B2'></BsFacebook></a>
              <a href="#"><BsInstagram color='#e95950'></BsInstagram></a>
              <a href="#"><BsTwitter color='#00acee'></BsTwitter></a>
              <a href="#"><BsYoutube color='#FF0000'></BsYoutube></a>
              <a href="#"><BsGithub color='#333'></BsGithub></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
