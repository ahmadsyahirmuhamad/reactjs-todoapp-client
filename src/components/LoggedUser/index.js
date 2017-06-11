import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class LoggedUser extends Component {

  render() {
    const showMenu = () => { 
        const token = window.sessionStorage.getItem("token")
        if (token) {
            return privateRoute()
        } else {
            return publicRoute()
        }
    }
    const privateRoute = () => {
        return [
          <Link key="account" className="mdl-navigation__link" to="/account">Account</Link>,
          <Link key="todos" className="mdl-navigation__link" to="/todos">Todo</Link>,
          <Link key="logout" className="mdl-navigation__link" to="/logout">Logout</Link>
        ]
    }
    const publicRoute = () => {
        return [
          <Link key="login" className="mdl-navigation__link" to="/login">Login</Link>,
          <Link key="register" className="mdl-navigation__link" to="/register">Register</Link>
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
    user: state.user,
  }
}

const VisibleLoggedUser = connect(
  mapStateToProps,
  null
)(LoggedUser)


export default VisibleLoggedUser
