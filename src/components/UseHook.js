import React, { useState } from 'react';
import UseHook2 from './UseHook2';


function UseHook() {
    const [press,newState]=useState(0)
    
    return (
        <div>
             <UseHook2 getValue={press}/>
            <div>
            <button onClick={()=>newState(press+1)}>Increase</button>
            <button onClick={()=>newState(press-1)}>Decrement</button>
            </div>
           
        </div>
    )
}

export default UseHook
