import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0);
  const[input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log('I am inside expensive task')
    for(let i = 0; i <= 1000000000; i++){}
    return num*2;
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Increment
      </button>
      <br/>
      Count: {count}
      <div>
        Double: {doubleValue}
        <br/>
        <input
          type='number'
          placeholder='Enter Number'
          onChange={(e) => setInput(e.target.value)}/>
      </div>
    </div>

  )
}

export default App
