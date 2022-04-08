import React from 'react'
import './MyStyle.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Greet from './Greet'
import Form from './Form'
import Counter from './Counter'

function Router1() {
    return (
        <Router>
        <div>
            <h2>Welcome to the router basic</h2>
            <ul className={'ul'}>
                <li><Link to="/Greet">Greet</Link> </li>
                <li><Link to="Form">Form</Link></li> 
                <li><Link to="Counter">Counter</Link></li>
            </ul>
            <Switch>
           
            <Route path="/Greet" component={Greet}></Route>
            <Route path="/Form" component={Form}></Route>
            <Route path="/Counter" component={Counter}></Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Router1
