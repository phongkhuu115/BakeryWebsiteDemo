import React, { useState, useEffect } from 'react';
import { FaRegUser} from 'react-icons/fa'


function IntroHeader(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <header className='flex justify-between'>
        <h3 className='font-dancing-script text-[36px] font-[600]'>Fkm <span className='text-pink-400'>Bakery.</span></h3>
        <ul className='flex items-center text-[20px]'>
          <li className='mx-7 font-[500] text-[#333]'>About</li>
          <li className='mx-7 font-[500] text-[#333]'>Explore</li>
          <li className='mx-7 font-[500] text-[#333]'>Comments</li>
          <li className='mx-7 font-[500] text-[#333]'>Contact</li>
        </ul>
        <h3 className='flex items-center font-[500] text-[20px] text-[#333]'><FaRegUser className='mr-5'></FaRegUser> Account</h3>
      </header>
    </>
  )
}

export default IntroHeader;