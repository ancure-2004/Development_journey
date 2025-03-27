import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked")
  }

  function handleMouseOver(){
    alert("Para ke upr mouse lekr aaye ho");
  }

  function handleInputChange(e){
    console.log("Value till now: ", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submit krdu kya")
  }

  return (
    <div>
      {/* <button  onClick={alert("Immediate Invoke")}> // --> wrong way should be passed as a reference
        Click Me
      </button> */}

      {/* <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleInputChange}/>
         <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver}>
        I am a para
      </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
  )
}

export default App
