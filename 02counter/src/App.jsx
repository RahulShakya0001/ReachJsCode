import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(1);
  // let counter = 0
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
      console.log("Value Added", Math.random())
    }else{
      console.log("Counter reached maximum limit")
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Coding Zone</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Decrease Value {counter}</button>
    </>
  )
}

export default App
