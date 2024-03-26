import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");


  // Here we are using useRef hook so we can take reference of the password input
  // We need this so we can copy whatever is written inside the input password
  const passRef = useRef(null);

  // Here we use useCallback hook to optimize the re-rendering.
  // This wrapper function wraps the original function to memoize(cache)
  // the dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()_+-={}|[]\:';,./<>?~`";

    for(let i = 0; i<length; i++)
    {
        let index = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(index);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword])


  // First we used useCallback hook to optimize the function, then we used passRef
  // for selecting the password
  const copyPassword = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])


  // Here we use useEffect hook so if there is any change in the dependencies,
  // the page will be reloaded with the change
  useEffect(() => {
    passwordGenerator()
  }, [numberAllowed, charAllowed, length, setPassword])  

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div>
        <h1 className='text-center'>Password Generator</h1>
        <div className="bg-slate-700 w-auto flex justify-center h-40 rounded-3xl">
          <div className='text-center'>
            <h2>Password</h2>
            {/* Here we are passing password reference to the ref attribute of password inpu field.
                This way, we can use the reference of this field to get the password */}
            <input className='bg-white h-16 w-80 text-slate-500 rounded-3xl text-center mr-4' type="text" value = {password} 
              readOnly ref = {passRef}/>
            {/* Here we will pass reference of the copyPassword function so when we click the 
                copy button, we can copy the pass*/}
            <label htmlFor="copy"><button className='rounded-xl bg-indigo-400'
            onClick={copyPassword}>Copy</button></label>

            <div className='flex justify-center p-4'>
              <div className='w-52 flex justify-evenly'> 
                <label htmlFor="slider" className='flex'>Length <input type="range" id='slider' min="0" max="100" value={length}
                onChange={(e) => {
                  setLength(e.target.value)
                }}  />({length})</label>
                <div className='flex ml-4'>
                <label htmlFor="number" className='flex pr-3'>Numbers <input type="checkbox" className="ml-1" name="number" id="number" 
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}/></label>
                <label htmlFor="character" className='flex'>Characters <input type="checkbox" className="ml-1" name="character" id="character" 
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}/></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
