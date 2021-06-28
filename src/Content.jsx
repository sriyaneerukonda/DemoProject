import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import NewUserDetails from './NewUserDetails';


export default class Content extends Component{
    render(){
        return (
                
                <Switch>
<Route exact path='/update' component={NewUserDetails}></Route>




</Switch>

        )}
}