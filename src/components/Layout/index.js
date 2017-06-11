import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import Routes from '../Routes';
import LoggedUser from '../LoggedUser';
import { getUser } from '../../actions/userActions';
import './index.css';

class Layout extends Component {
  componentDidMount(){
    console.log("getUser")
     getUser()
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  render() {
    return (
      <div className="Layout">
        <Router>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Title</span>
                <div className="mdl-layout-spacer"></div>
                <LoggedUser />
              </div>
            </header>
            <main className="mdl-layout__content">
              <div className="page-content">
                <Routes />
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
    user: state.user,
  }
}

const VisibleLayout = connect(
  mapStateToProps,
  null
)(Layout)


export default VisibleLayout
