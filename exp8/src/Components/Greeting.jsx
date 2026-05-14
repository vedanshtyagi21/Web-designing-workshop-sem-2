import React from 'react'

function Greeting(props) {
    return (
        <div className="greeting-card">
            <h1>{props.name}</h1>
            <p>Branch: {props.branch}</p>
            <p>Marks: {props.marks}</p>
        </div>
    )
}

export default Greeting