import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
  counter = counter + 1
  setCounter(counter)
  console.log("value added", counter)
}

const subValue = () => {
  counter = counter - 1
  setCounter(counter)
  console.log("value sub", counter)
}

  return (
    <>
    <h1>Hello My Counter</h1>
    <h2>counter value: {counter}</h2>
      <div className="card">
        <button onClick={addValue}>
          Add value {counter}
        </button>
        <br />
        <button onClick={subValue}>
          Remove Value {counter}
        </button>
      </div>
      
    </>
  )
}

export default App
