import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  const AddValue = ()=>{
    console.log("clicked");
    // counter = counter + 1;
    setCounter((prev)=>prev+1)
    setCounter((prev)=>prev+1)
    setCounter((prev)=>prev+1)
    setCounter((prev)=>prev+1)

  }
  const RemoveValue = ()=>{
    console.log("clicked");
    if(counter <= 0){
      alert("value can't be less than 0")
      return
    }
    counter = counter - 1; 
    setCounter(counter)
  }

  return (
    <>
      <div className="card">
      <h1>Counter</h1>
        <h2>value  : {counter}</h2>

        <button onClick={AddValue} >Add Value</button>
        <br />
        <br />
        <button onClick={RemoveValue  }>Remove Value</button>
      </div>
     
    </>
  )
}

export default App
