
import { useEffect, useState } from 'react';
import './App.css'
import LoggerComponent from './components/LoggerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  // const[count, setCount] = useState(0);
  // const[Total, setTotal] = useState(1);

  //First --> Side effect function
  //Second --> clean up function
  //third --> comma seperated dependency list

  //Variation 1 --> Runs on every render
  // useEffect(() => {
  //   alert('I will run on every render')
  // })

  //Variation 2 --> that runs on only first render
  // useEffect(() => {
  //   alert('I will run only on first render')
  // }, [])

  //variation 3 --> Every time count is updated
  // useEffect(() => {
  //   alert('I will run every time when count is updated')
  // }, [count])

  //Variation 4 --> multiple dependecies
  // useEffect(() => {
  //   alert('I will run every time when count/total is updated')
  // }, [count, Total])

  //Variation 5 --> cleanup function
  // useEffect(() => {
  //   alert('Count is Updated')
  
  //   return () => {
  //     alert('Count is unmounted from ui')
  //   }
  // }, [count])
  
  
  // function handleClickTotal() { 
  //   setTotal(Total + 1);
  // }

  // function handleClick(){
  //   setCount(count + 1);
  // }

  return (
    // <div>
    //   <button onClick={handleClick}>
    //     Update count
    //   </button>
    //   <br/>
    //   Count is : {count}

    //   <br/>
    //   <button onClick={handleClickTotal}>
    //     Update Total
    //   </button>
    //   <br/>
    //   Total is : {Total}
    // </div>
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      {/* <MultiEffectComponent/> */}
    </div>
  )
}

export default App
