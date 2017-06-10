import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class LoggedUser extends Component {
  componentDidMount(){
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
        return [
          <Link className="mdl-navigation__link" to="/account">Account</Link>,
          <Link className="mdl-navigation__link" to="/todos">Todo</Link>,
          <Link className="mdl-navigation__link" to="/logout">Logout</Link>
        ]
    }
    const publicRoute = () => {
        return [
          <Link className="mdl-navigation__link" to="/foo">Foo</Link>,
          <Link className="mdl-navigation__link" to="/login">Login</Link>,
          <Link className="mdl-navigation__link" to="/register">Register</Link>
        ]
    }
    return (
      <div className="LoggedUser">
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          { showMenu() } 
        </nav>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    foo: state.test.foo,
  }
}

const VisibleLoggedUser = connect(
  mapStateToProps,
  null
)(LoggedUser)


export default VisibleLoggedUser
