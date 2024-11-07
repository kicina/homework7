import './App.css'
import React, { useState } from 'react';

function App() {
  const [clickedbutton, setclickedbutton] = useState(null);
  const [submitted, setsubmitted] = useState(false);

  const buttonclick = (buttonNumber) => {
    setclickedbutton(buttonNumber);
  };

  const handlesubmit = () => {
    setsubmitted(true);
  };

  return (
    <div>
      <h1 className='submit'>rate us?</h1>
      <button
        className='button button1'
        style={{ backgroundColor: clickedbutton === 1 ? 'white' : '' }}
        onClick={() => buttonclick(1)}>
        1</button>
      <button
        className='button button2'
        style={{ backgroundColor: clickedbutton === 2 ? 'white' : '' }}
        onClick={() => buttonclick(2)}>
        2</button>
      <button
        className='button button3'
        style={{ backgroundColor: clickedbutton === 3 ? 'white' : '' }}
        onClick={() => buttonclick(3)}>
        3</button>
      <button
        className='button button4'
        style={{ backgroundColor: clickedbutton === 4 ? 'white' : '' }}
        onClick={() => buttonclick(4)}>
        4</button>
      <button
        className='button button5'
        style={{ backgroundColor: clickedbutton === 5 ? 'white' : '' }}
        onClick={() => buttonclick(5)}>
        5</button>

      <button
        className='submit-button'
        onClick={handlesubmit}
        disabled={clickedbutton === null} 
        style={{
          backgroundColor: clickedbutton === null ? 'gray' : 'blue',
          color: 'white',
          cursor: clickedbutton === null ? 'not-allowed' : 'pointer',
          marginTop: '10px'
        }}>
        Submit</button>

      {submitted && <h1 className='submit'>submitted! thanks for rating us!</h1>}
    </div>
  );
}

export default App;
