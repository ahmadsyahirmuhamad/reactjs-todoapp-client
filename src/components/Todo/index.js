import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../../actions/todoActions';
import './index.css'



class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      todo: {
        title: "",
        description: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount(){
    getTodos()
      .then((data) => {
        console.log(data)
        return this.props.dispatch(data)
      });
  }

  handleChange(){
    const title = this.refs.title.value
    const description = this.refs.description.value
    this.setState({todo: {title, description }});
  }
  
  handleSubmit(event){
    event.preventDefault();
    addTodo(this.state.todo)
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  renderTodos() {
    const { todo } = this.props;
    if (todo.todo.todos) {
      const mapTodos = todo.todo.todos.map((x, index) => {
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
  }
  render() {
    const { todo } = this.state;
    return (
      <div className="Todo">
        <h1 className="center">Todos</h1>
        <div id="add-todo">
          
          <form id="todoForm" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="title" value={todo.title} onChange={this.handleChange} required="required" />
              <label className="mdl-textfield__label">Title...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" ref="description" value={todo.description} onChange={this.handleChange} required="required" />
              <label className="mdl-textfield__label">Description...</label>
            </div>
            <div>
              <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Submit" />
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
    );
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

const VisibleTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)


export default VisibleTodo

