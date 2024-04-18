// import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Card from './Components/Card'
import Foooter from './Components/Foooter'
import Header from './Components/Header'
import Home from './Components/Home'
import Welcome from './Components/Welcome'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>HAI HELLOOO....... THANK YOU FOR CHOOSING ME</h1> */}
    <Header/>
    <Welcome/>
    <Home/>
    <About/>
    <Card/>
    <Foooter/>

    </>
  )
}

export default App
