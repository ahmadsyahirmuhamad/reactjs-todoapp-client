import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home';
import Foo from '../Foo';
import Login from '../Login';
import Register from '../Register';
import Account from '../Account';
import Todo from '../Todo';

class Routes extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Routes">
          <Route exact path = "/" component = {Home} />
          <Route path = "/foo" component = {Foo} />
          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          <Route path = "/account" component = {Account} />
          <Route path = "/todos" component = {Todo} />
      </div>
    );
  }
}

export default Routes
