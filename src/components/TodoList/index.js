import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCompleteTodo } from '../../actions/todoActions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSubmit(id, boolean){
        updateCompleteTodo(id, !boolean)
            .then((data) => {
                return this.props.dispatch(data)
            });

    }

    handleSearchChange(){
        const searchTerm = this.refs.searchTerm.value
        this.setState({searchTerm});
    }

    renderTodos() {
        const { todos } = this.props;
        const mapTodos = todos.todo.todos.map((x, index) => {
            if (x.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())!==-1) {
                return (
                    <tr key={ x.id }>
                        <td className="mdl-data-table__cell--non-numeric">{ x.title }</td>
                        <td>
                        { (x.complete) ? <button onClick={() => this.handleSubmit(x.id, x.complete)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">True</button> : <button onClick={() => this.handleSubmit(x.id, x.complete)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">False</button> }
                        </td>
                    </tr>
                )        
            }
        });
        return mapTodos;
    }
    
    render() {
        return (
            <div>
                <div id="search-todo">
                    <form id="todoSearchForm">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" ref="searchTerm" value={this.state.searchTerm} onChange={this.handleSearchChange} required="required" />
                        <label className="mdl-textfield__label">Search...</label>
                        </div>
                    </form>
                </div>
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
                            { this.renderTodos() }  
                        </tbody>  
                    </table>
                </div>
            </div> 
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



