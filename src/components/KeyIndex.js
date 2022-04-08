import React from 'react'

function KeyIndex() {
    const name=['Nafiul','Islam','Nayeem','Islam']
    const nameList=name.map((names,index)=><h2 key={index} >{index} {names}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default KeyIndex
