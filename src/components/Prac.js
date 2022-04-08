import React, { useState } from 'react'

function Prac(props) {
   
    const [count, setCount] = useState('hello');
   
    return (
        <div>
            <div>Hello {props.name}</div>
             <div>{count}</div>
            <button onClick={() => setCount('Nafiul')}>Click</button>
        </div>
    )
}

export default Prac
