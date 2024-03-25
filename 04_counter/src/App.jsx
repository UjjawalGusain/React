import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0)

  const addButton = () => {
    if(counter == 20) return;
    setCounter(counter + 1)
    console.log("Button clicked: ", counter);
  }

  const add2Button = () => {
    if(counter == 20) return;
    if(counter == 19){
      setCounter(prevCounter => prevCounter + 1)
      return
    }
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeButton = () => {
    if(counter == 0) return;
    setCounter(counter - 1)
  }

  // To learn how to use react snapshots
  const remove2Button = () => {
    if(counter == 0) return;
    if(counter == 1){
      setCounter(prevCounter => prevCounter - 1)
      return
    }
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Happy Holi Counter</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addButton}>Add</button>
      <br /><br />
      <button onClick={add2Button}>Add2Button</button>
      <br /><br />
      <button onClick={removeButton}>Remove</button>
      <br /><br />
      <button onClick={remove2Button}>Remove2Button</button>
      
    </>
  )
}

export default App
