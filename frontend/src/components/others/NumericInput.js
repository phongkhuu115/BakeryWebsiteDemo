import React, { useState, useEffect } from 'react';

export const NumericInput = React.forwardRef((props, ref) => {
  function increse() {
    ref.current.value++;
  }

  function decrease() {
    ref.current.value--;
    if (ref.current.value < 0) {
      ref.current.value = 0;
    }
  }

  return (
    <>
      <div className='flex text-green-600 font-bold font-sans'>
        <button
          onClick={decrease}
          className={`${props.style} text-[24px] bg-[#eee] rounded-l-3xl`}>
          -
        </button>
        <input
          ref={ref}
          defaultValue={Number(props.value)}
          type='text'
          maxLength={2}
          className={`bg-[#eee] w-[50px] text-center focus:outline-none ${props.inputStyle}`}
        />
        <button
          onClick={increse}
          className={`${props.style} text-[24px] bg-[#eee] rounded-r-3xl`}>
          +
        </button>
      </div>
    </>
  );
});
