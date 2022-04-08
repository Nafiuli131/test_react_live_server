import React, { Component } from 'react'

function Fragment() {
   
    return (
        <React.Fragment> 
            {/* for using div having one div extra, so use fragment */}
            <h2>Fragment pages</h2>
            <p>Fragment demo</p>
            <React.Fragment>
                <h1>Another fragment here</h1>
            </React.Fragment>
        </React.Fragment>
    )
}

export default Fragment
