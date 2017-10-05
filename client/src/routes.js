import React from "react";
import { Route} from 'react-router-dom';
import Home from './Containers/Home';
import Dashboard from './Containers/Dashboard'
import NavBar from './Components/NavBar';
import {connect} from 'react-redux';
import * as action from './action/index';
import { BrowserRouter } from 'react-router-dom';
class AppRoutes extends React.Component{
    componentWillMount() {
        this.props.fetchUser();
      }
    render(){
        return(
            <BrowserRouter>
                <div>  
                    <NavBar/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/Pokemon' component={Home}/>                    
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(null, action)(AppRoutes);