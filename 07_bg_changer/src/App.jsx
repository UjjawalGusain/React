import { useState } from 'react'
import './App.css'
function App() {
  
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="background" style={{backgroundColor: color}}>
        <div className="colorPal">
          <ul className="tabs">
            <li><button onClick={() => setColor("black")}>Black</button></li>
            <li><button onClick={() => setColor("red")}>Red</button></li>
            <li><button onClick={() => setColor("pink")}>Pink</button></li>
            <li><button onClick={() => setColor("olive")}>Olive</button></li>
            <li><button onClick={() => setColor("white")}>White</button></li>
            <li><button onClick={() => setColor("orange")}>Orange</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
