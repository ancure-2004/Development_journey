import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step 1: Create Context
const ThemeContext = createContext();
//Step 2: wrap all the child inside a provider


function App() {
  const[theme, setTheme] = useState('Light')
  return (
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div id='Container' style= {{backgroundColor:theme ==='Light' ? 'beige': 'black'}}>
          <ChildA/>          
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
export {ThemeContext};
