import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home';
import Foo from '../Foo';
import Login from '../Login';
import Register from '../Register';
import Account from '../Account';
import ChangePassword from '../ChangePassword';
import Todo from '../Todo';

class Routes extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Routes">
          {/*public route*/}
          <Route exact path = "/" component = {Home} />
          <Route path = "/foo" component = {Foo} />
          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          
          {/*private route*/}
          <Route path = "/account" component = {Account} />
          <Route path = "/change_password" component = {ChangePassword} />
          <Route path = "/todos" component = {Todo} />
      </div>
    );
  }
}

export default Routes
