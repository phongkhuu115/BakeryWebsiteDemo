import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

function Comment(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div id='comment' className='m-14'>
        <div className='my-10'>
          <p className='text-[48px] font-[600] font-raleway text-[#850000]'>
            What our customer think about us
          </p>
          <p className='font-raleway text-[#333]'>
            A shop will be nothing without it's customer. Let's hear what
            our customer say !
          </p>
        </div>
        <Carousel></Carousel>
      </div>
    </>
  );
}

export default Comment;
