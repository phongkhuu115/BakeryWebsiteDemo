import React, { useState, useEffect } from 'react';

function App(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div id='explore'></div>
    </>
  );
}

export default App;
