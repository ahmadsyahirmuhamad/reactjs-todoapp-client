import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'

class Todo extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="Todo">
        <h1 className="center">Todos</h1>
        <hr/>
        <div id="todo-table">
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">Title</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Complete</button></td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Complete</button></td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Complete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

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

const VisibleTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)


export default VisibleTodo

