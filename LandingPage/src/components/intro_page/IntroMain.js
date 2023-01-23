import React, { useState, useEffect } from 'react';
import {FaBirthdayCake} from 'react-icons/fa'

function IntroMain(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className='flex my-auto flex-1'>
        <div className='w-[50%] my-auto'>
          <h1 style={{direction: 'ltr'}} className='text-[72px] font-[600] text-[#333]'>
            We have the best cake for your special occasion!
          </h1>
          <h1 className='font-[600] mt-8 text-[24px] text-[#333] text-justify'>
            Planning for a party may take a lot of time and effort. Especially when you need to choose a cake, don't worry, let us do it for you. We know just the right thing you need. 
          </h1>
          <div className='flex items-center justify-center p-4 bg-pink-400 text-[20px] mt-8 font-[600] w-[200px] text-center text-[#E8F9FD] rounded-xl shadow-xl cursor-pointer'>
            Take a look <FaBirthdayCake className='ml-4'></FaBirthdayCake>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroMain;
