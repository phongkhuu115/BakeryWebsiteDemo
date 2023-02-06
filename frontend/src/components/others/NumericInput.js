import React, { useState, useEffect } from 'react';

export const NumericInput = React.forwardRef((props, ref) => {

  const [value, setValue] = useState(0)
  function increse() {
    setValue(prev => prev + 1)
  }

  function decrease() {
    if (value === 0) {
      return
    }
    setValue(prev => prev - 1)
  }

  return (
    <>
      <div className='flex text-green-600 font-bold font-sans'>
        <button onClick={decrease} className='px-5 py-2 text-[24px] bg-[#eee] rounded-l-3xl'>-</button>
        <input value={value} type="text" maxLength={2} className='bg-[#eee] w-[50px] text-center focus:outline-none'/>
        <button onClick={increse} className='px-5 py-2 text-[24px] bg-[#eee] rounded-r-3xl'>+</button>
      </div>
    </>
  )
})
