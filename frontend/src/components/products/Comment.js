import React, { useState, useEffect } from 'react';

function Comment(props) {
  const [state, setState] = useState('');

  const { user, rating } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className='flex font-raleway items-center gap-10 py-10 border-b-[1px] border-[#333]'>
        <div className='border-[1px] border-[#333] p-5 rounded-full'>
          <img
            src={user.user_image}
            alt={user.user_fullname}
            className='w-[60px] aspect-[1/1] object-cover'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-[600]'>{user.user_fullname}</p>
          <p className='text-green-500 font-[600]'>
            Rate: <span className='font-sans'>{rating.cake_ratePoint}</span>
          </p>
          <p className='text-justify'>{rating.cake_rateComment}</p>
        </div>
      </div>
    </>
  );
}

export default Comment;
