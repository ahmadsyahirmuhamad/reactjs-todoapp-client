import React, { Component } from 'react';
// import './index.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    renderTodos() {
        const { todos } = this.props;
        const mapTodos = todos.todo.todos.map((x, index) => {
            return (
                <tr key={ x.id }>
                    <td className="mdl-data-table__cell--non-numeric">{ x.title }</td>
                    <td>
                    { (x.complete) ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Completed</button> : <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Complete</button> }
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


export default TodoList
