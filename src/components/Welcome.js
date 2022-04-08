import React,{Component} from 'react'
class ClassFunction extends Component{
    render(){
        const {name}=this.props
        return(
        <div> 
        {console.log("here using the console property")}
        <h1>Class Component {name}</h1>
       
        </div>
        )
    }
}
export default ClassFunction