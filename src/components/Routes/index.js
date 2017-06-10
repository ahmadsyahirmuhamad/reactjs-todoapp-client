import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Foo from '../Foo';

class Routes extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Routes">
          <Route path = "/foo" component = {Foo} />
      </div>
    );
  }
}

export default Routes
