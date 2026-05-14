import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/greeting'

function App() {

  return (
    <>
    <h1>Student Information</h1>
   <Greeting name={"Vedansh Tyagi"} branch={"Computer science"} marks={85} />
   <Greeting name={"Sorabh"} branch={"Computer science"} marks={22} />
   <Greeting name={"sarvagya"} branch={"Computer science"} marks={92} />
    </>
  )
}

export default App
