import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCompleteTodo } from '../../actions/todoActions';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, boolean){
        updateCompleteTodo(id, !boolean)
            .then((data) => {
                return this.props.dispatch(data)
            });

    }

    renderTodos() {
        const { todos } = this.props;
        const mapTodos = todos.todo.todos.map((x, index) => {
            return (
                <tr key={ x.id }>
                    <td className="mdl-data-table__cell--non-numeric">{ x.title }</td>
                    <td>
                    { (x.complete) ? <button onClick={() => this.handleSubmit(x.id, x.complete)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">True</button> : <button onClick={() => this.handleSubmit(x.id, x.complete)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">False</button> }
                    </td>
                </tr>
            )
        });
        return mapTodos;
    }
    
    render() {
        return (
            <tbody>
                { this.renderTodos() }  
            </tbody>
        )
    }
}


const mapStateToProps = state => {
  return {
    user: state.user,
    todo: state.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList


