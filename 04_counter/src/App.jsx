import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0)

  const addButton = () => {
    if(counter == 20) return;
    setCounter(counter + 1)
    console.log("Button clicked: ", counter);
  }

  const removeButton = () => {
    if(counter == 0) return;
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Happy Holi Counter</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addButton}>Add</button>
      <br /><br />
      <button onClick={removeButton}>Remove</button>
    </>
  )
}

export default App
