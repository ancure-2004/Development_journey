import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  useEffect(() => {
    console.log("Main render hora hu")
  })
  
  function handleClick() {
    val.current = val.current + 1;
    console.log("Value of cal: ", val.current)  
    setCount(count + 1);
  }

  function colorChange() {
    btnRef.current.style.background = 'Red';
  }

  return (
    <div>
      <button
        ref = {btnRef} 
        onClick={handleClick}>
        Increment
      </button>
      <br/>
      <br/>
      <button onClick={colorChange}>
        change color of 1st button
      </button>
      <br/>
      <div>
        Count : {count}
      </div>
    </div>
  )
}

export default App
