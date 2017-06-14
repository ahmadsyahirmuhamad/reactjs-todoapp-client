import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Account from '../Account';
import ChangePassword from '../ChangePassword';
import Todo from '../Todo';
import Logout from '../Logout';

class Routes extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Routes">
          {/*public route*/}
          <Route exact path = "/" component = {Home} />
          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          
          {/*private route*/}
          <Route path = "/account" component = {Account} />
          <Route path = "/change_password" component = {ChangePassword} />
          <Route path = "/todos" component = {Todo} />
          <Route path = "/logout" component = {Logout} />
      </div>
    );
  }
}

export default Routes
