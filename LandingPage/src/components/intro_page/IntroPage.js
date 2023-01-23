import React, { useState, useEffect } from 'react';
import IntroHeader from './IntroHeader';
import IntroMain from './IntroMain';

function IntroPage(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div id='intro' className='py-10 flex flex-col h-screen px-14'>
        <IntroHeader></IntroHeader>
        <IntroMain></IntroMain>
      </div>
    </>
  )
}

export default IntroPage;