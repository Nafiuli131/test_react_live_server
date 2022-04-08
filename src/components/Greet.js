import React from 'react'
function Greet(){
    return <h1>Hello Nafiul</h1>
}

const Greet1 =(props) =>{
    console.log(props)
    return(
        <div className="hello">
            <h1>Hello {props.name}</h1>
            
        </div>
    )    
}

export default Greet1
