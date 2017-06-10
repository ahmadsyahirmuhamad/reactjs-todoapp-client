import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home';
import Foo from '../Foo';
import Login from '../Login';

class Routes extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Routes">
          <Route exact path = "/" component = {Home} />
          <Route path = "/foo" component = {Foo} />
          <Route path = "/login" component = {Login} />
      </div>
    );
  }
}

export default Routes
