import React, { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';

function IntroHeader(props) {
  const [isShow, setIsShow] = useState(false);
  const click_to_show = () => setIsShow(!isShow);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <header className='flex justify-between relative'>
        <h3 className='font-dancing-script text-[36px] font-[600]'>
          Fkm <span className='text-pink-400'>Bakery.</span>
        </h3>
        <ul className='flex items-center text-[20px]'>
          <li className='mx-7 font-[500] text-[#333]'>
            <a href='#about'>About</a>
          </li>
          <li className='mx-7 font-[500] text-[#333]'>
            <a href='#explore'>Explore</a>
          </li>
          <li className='mx-7 font-[500] text-[#333]'>
            <a href='#comment'>Comment</a>
          </li>
          <li className='mx-7 font-[500] text-[#333]'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='select-none flex items-center font-[500] text-[20px]'>
          <div
            onClick={click_to_show}
            className='flex items-center text-[#333] cursor-pointer'>
            <FaRegUser className='mr-5'></FaRegUser> Account
          </div>
          <ul className={isShow ? 'absolute bottom-[-250%] right-0 bg-white rounded-xl p-1 shadow-xl' : 'hidden'}>
            <li className='px-8 m-3 py-2 cursor-pointer rounded-xl hover:bg-[#ccc] hover:text-[#fff]'><a href="#">Login</a></li>
            <li className='px-8 m-3 py-2 cursor-pointer rounded-xl hover:bg-[#ccc] hover:text-[#fff]'><a href="#">Register</a></li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default IntroHeader;
