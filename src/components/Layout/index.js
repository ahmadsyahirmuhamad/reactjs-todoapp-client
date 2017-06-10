import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../../actions/testActions';
import './index.css';

class Layout extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(testAction());
  }

  render() {
    return (
      <div className="Layout">
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Button
        </button>
        { this.props.foo }
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
