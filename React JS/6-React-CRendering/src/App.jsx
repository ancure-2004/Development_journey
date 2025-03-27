import { useState } from 'react'
import './App.css'
import Logoutbtn from './components/logoutbtn';
import Loginbtn from './components/loginbtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(true);

  // Early Return
  if(!isLoggedIn){
    return(
      <Loginbtn/>
    )
  }

  // Logical Operator
  return(
    <div>
      <h1> Hello Everyone my name is Ankur</h1>
      <div>
        {isLoggedIn && <Logoutbtn/>}
      </div>
    </div>
  )

  // Ternary Operator
  // return(
  //   <div>
  //     {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}
  //   </div>
  // )

  //if -else statement
  // if(isLoggedIn) {
  //   return(
  //     <Logoutbtn/>
  //   )
  // }
  // else{
  //   return(
  //     <Loginbtn/>
  //   )
  // }
}

export default App
