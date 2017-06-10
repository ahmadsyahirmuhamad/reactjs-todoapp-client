import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { testAction } from '../../actions/testActions';
import Foo from '../Foo';
import './index.css';

class Layout extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(testAction());
  }

  render() {
    const showMenu = () => { 
        const { foo } = this.props
        if (foo === "bar"){
            return privateRoute()
        } else {
            return publicRoute()
        }
    }
    const privateRoute = () => {
        return <div>
            <Link className="mdl-navigation__link" to="/foo">Logout</Link>
        </div>
    }
    const publicRoute = () => {
        return <div>
            <Link className="mdl-navigation__link" to="/bar">Login</Link>
        </div>
    }
    return (
      <div className="Layout">
        <Router>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Title</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <div>
                      { showMenu() } 
                  </div>
                </nav>
              </div>
            </header>
            <main className="mdl-layout__content">
              <div className="page-content">
                <Route path = "/foo" component = {Foo} />
                </div>
            </main>
          </div>
        </Router>        
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    foo: state.test.foo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)


export default VisibleLayout
