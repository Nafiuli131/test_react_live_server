import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:''
        }
    }
    clickHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleComments = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handlerSubmit =(event) =>{
        alert(`${this.state.username} ${this.state.comments}`)
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.clickHandler}></input>
                </div>
                <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
           
        )
    }
}

export default Form
