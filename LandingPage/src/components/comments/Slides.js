import React, { useState, useEffect } from 'react';
import { GiCupcake } from 'react-icons/gi';

function Slides({ props }) {
  const [state, setState] = useState('');

  function RenderCake() {
    const star = [];
    for (let i = 0; i < props.star; i++) {
      star.push(
        <GiCupcake
          size={40}
          color={'#FF78F0'}
          className='mx-1'></GiCupcake>
      );
    }
    return star;
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className='flex h-[400px] w-full'>
        <div className='w-[50%]'>
          <div className='flex justify-center h-[100%]'>
            <img src={props.image} alt='this is minions' className='h-[100%]' />
          </div>
        </div>
        <div className='flex-1 ml-10 bg-white rounded-xl shadow-xl'>
          <p className='text-[28px] font-raleway text-[#333] font-[600] text-justify p-5 italic'>
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            eveniet earum qui in eligendi quisquam aut fugiat a architecto, illo
            exercitationem officiis iste necessitatibus eum doloremque nulla,
            facere quae commodi."
          </p>
          <div className='flex items-center mt-5 ml-5'>
            Rating: <RenderCake></RenderCake>
          </div>
          <div className='mt-14 ml-5 font-raleway text-[18px]'>
            <p className='text-[#850000] font-[600]'>Minion</p>
            <p className='italic font-[600]'>CEO at Somewhere</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slides;
