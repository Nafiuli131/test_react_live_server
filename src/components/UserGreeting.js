import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {
       return(
           this.state.isLogged?
           <div>Welcome Nayeem</div>:
           <div>Welcome Guest</div>
       )
        // if(this.state.isLogged){
        //     return (
        //         <div>Welcome Nayeem</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Nayeem</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
