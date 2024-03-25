import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myImg = "https://media.licdn.com/dms/image/D4D03AQGDia5z1o9edw/profile-displayphoto-shrink_400_400/0/1698118090196?e=1717027200&v=beta&t=2Zid5XUXF1bcTASV6ZpnupuxZAX-nXy4abDCSzLAkI8"
  const catImg = "https://cdn.pixabay.com/photo/2017/05/29/15/34/kitten-2354016_1280.jpg"
  const dogImg = "https://i.pinimg.com/736x/d9/bc/6e/d9bc6e92257a1eca5545730fa68b30f4--yellow-lab-puppies-puppy-face.jpg"

  const myName = "Ujjawal Gusain"
  const catName = "Cattie"
  const dogName = "Doggie"
  return (
    <>
        <h1 className='bg-green-400 text-black p-50'>This is written using Tailwind</h1>
        <Card source = {myImg} name = {myName}/>
        <Card source = {catImg} name = {catName}/>
        <Card source = {dogImg} name = {dogName}/>
    </>
  )
}

export default App
