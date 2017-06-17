import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        email: "",
        password: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount(){
    console.log("componentWillMount")
  }
  
  componentWillReceiveProps(nextProps, nextContext){
    console.log("componentWillReceiveProps")
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log("shouldComponentUpdate")    
    return true
  }

  componentWillUpdate(nextProps, nextState, nextContext){
    if (nextProps.user.isLoggedIn) {
      console.log("ComponentWillUpdate")
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    userLogin(this.state.session)
      .then((data) => {
        if(!data.payload.error) {
        window.sessionStorage.setItem("token", data.payload.token);
        window.sessionStorage.setItem("user_id", data.payload.users.id);
          return this.props.dispatch(data)
        }
      });
  }

  handleChange(event) {
    const email = this.refs.email.value
    const password = this.refs.password.value
    this.setState({session: {email, password}});
  }

  render() {
    const { isLoggedIn } = this.props.user;
     if (isLoggedIn) {
       return <Redirect to='/account'/>;
     }
    return (
      <div className="Login">
        <h1 className="center">Login</h1>
        <form id="loginForm" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="email" value={this.state.session.email} onChange={this.handleChange} />
              <label className="mdl-textfield__label">Email...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" ref="password" value={this.state.session.password} onChange={this.handleChange} />
              <label className="mdl-textfield__label">Password...</label>
            </div>
            <div>
              <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Submit" />
            </div>
        </form>
      </div>
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

const VisibleLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default VisibleLogin
