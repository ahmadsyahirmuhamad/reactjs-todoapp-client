import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../../actions/userActions';
import './index.css'


class Account extends Component {
  constructor(props){
    super(props);
    console.log("first", this.props.user)
    this.state = {
      user: {
        first_name: this.props.user.user.users.first_name,
        last_name: this.props.user.user.users.last_name,
        email: this.props.user.user.users.email
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();
    updateUser(this.state.user)
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  handleChange(event) {
    const first_name = this.refs.first_name.value
    const last_name = this.refs.last_name.value
    const email = this.refs.email.value
    this.setState({user: {first_name, last_name, email}});
  }

  render() {
    return (
      <div className="Account">
        <h1 className="center">Account</h1>
        <form id="accountForm" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="first_name" value={this.state.user.first_name} onChange={this.handleChange} required="required"/>
              <label className="mdl-textfield__label">First Name...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="last_name" value={this.state.user.last_name} onChange={this.handleChange} required="required"/>
              <label className="mdl-textfield__label">Last Name...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="email" value={this.state.user.email} onChange={this.handleChange} required="required"/>
              <label className="mdl-textfield__label">Email...</label>
            </div>
            <div>
              <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Update" />
            </div>
        </form>
      </div>
    );
  }
}

// Account.propTypes = {
//   token: PropTypes.string,
//   email: PropTypes.string,
//   id: PropTypes.string
// };


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

const VisibleAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)


export default VisibleAccount
