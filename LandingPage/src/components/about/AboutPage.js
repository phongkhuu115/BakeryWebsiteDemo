import React, { useState, useEffect } from 'react';
import AboutPic from '../../assets/aboutpage.png';
import { TfiHandPointDown } from 'react-icons/tfi';

function AboutPage(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div
        id='about'
        className='flex m-14 items-center justify-center h-screen bg-[#E8F9FD] rounded-xl'>
        <div className='w-[50%]'>
          <h1 className='inline font-raleway text-[24px] border-t-2 border-[#1C6DD0] '>
            Welcome
          </h1>
          <h1 className='text-[36px] font-[600] mt-5'>
            About{' '}
            <span className='font-dancing-script'>
              Fkm <span className='text-pink-400'>Bakery.</span>
            </span>
          </h1>
          <p className='text-[20px] mt-5 text-justify font-[500]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum
            voluptatum maiores ad optio, libero saepe dolore vero iusto itaque
            autem inventore. Delectus laborum, deleniti dolor corrupti eum
            reiciendis aperiam?
          </p>
          <p className='text-[20px] my-2 text-justify font-[500]'>
            See what people say about us
          </p>
          <TfiHandPointDown className='text-[20px] w-[200px] text-center mb-2'></TfiHandPointDown>
          <div className='p-4 bg-[#59CE8F] text-[18px] font-[500] text-white w-[200px] text-center rounded-xl shadow-xl cursor-pointer'>
            Comment
          </div>
        </div>
        <div>
          <img src={AboutPic} alt='this is a very delicous cake' />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
