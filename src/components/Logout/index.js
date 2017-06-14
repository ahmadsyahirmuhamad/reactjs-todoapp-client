import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  
  componentWillMount(){
    console.log("componentWillMount")
    this.props.dispatch(userLogout())
  }
  
  componentWillReceiveProps(nextProps, nextContext){
    console.log("componentWillReceiveProps")
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log("shouldComponentUpdate")    
    return true
  }

  componentWillUpdate(nextProps, nextState, nextContext){
    if (!nextProps.user.isLoggedIn) {
        userLogout();
        console.log("ComponentWillUpdate")
    }
  }

  render() {
    return (
      <Redirect to='/login'/>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleLogout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)


export default VisibleLogout
