import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
    }
    
    EventHandler(){
       this.setState({
           message:'Nafiul'
       })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.EventHandler.bind(this)}>Click here</button>
            </div>
        )
    }
}


export default EventBind
