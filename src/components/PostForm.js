import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler=(e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
        })
      
    }
   
    render() {
        let sum=(a,b) =>{
            return a+b;
        }
        let multi=(a,b) =>{
            return a*b;
        }
        const {userId,title,body} =this.state
        return (
            <div>
                <div>Sum is:{sum(2,33)}</div>
                <div>Multiplication is:{multi(2,33)}</div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>userId</label>
                        <input type="text" name="userId" value={userId}
                        onChange={this.changeHandler}
                        ></input>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title}
                         onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" value={body}
                         onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
