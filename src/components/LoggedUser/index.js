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
      <div className="LoggedUser">
        <div>
            { showMenu() } 
        </div>
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
