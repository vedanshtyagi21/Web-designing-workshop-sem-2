import React from 'react'

function Couter({ count, setCount }) {
  return <> 
  <div id="button"><button onClick={() => setCount(count + 1)}>incriment</button></div>
  
  </>
}

export default Couter