import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("callback value",this.state.count)//callback function
        // })
        // console.log("not change the set syncronizely",this.state.count)
        this.setState(previousState=>({
            
            count: previousState.count+1
            
        }),()=>{
            console.log(this.setState.previousState)
        })
       
    }
    Decrement(){
        this.setState({
            count: this.state.count-5
        })
        
    }
    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment()
        this.Increment()
        this.Increment()

    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <div>
                <button onClick={()=>this.Increment()}>Increment</button>
                <button onClick={()=>this.Decrement()}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter
