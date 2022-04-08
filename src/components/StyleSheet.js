import React from 'react'
import './MyStyle.css'
function StyleSheet(props) {
    const heading={
        color: 'blue'
    }
    let className = props.primary? 'primary':''
    return (
        <div>
           <h2 className={`${className} background font`}>StyleSheet</h2>
           <h2 style={heading}>Inline CSS</h2>
        </div>
    )
}

export default StyleSheet
