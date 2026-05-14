import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Couter from './components/Couter'
import Decrement from './components/Decrement'

function App() {

  const [count, setCount] = useState(0)
  return <>
    <div id="container"> <Couter id="counter" count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
      <button id="resetBtn" onClick={() => setCount(0)}>Reset</button>

      <p>count: {count}</p>
      </div>
  </>
}

export default App
