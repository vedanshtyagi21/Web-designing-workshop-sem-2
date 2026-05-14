import React from 'react'

function Decrement({ count, setCount }) {
  return (
    <div id="button"> <button onClick={() => setCount(count - 1)}>Decrement</button></div>
 
  )
}

export default Decrement