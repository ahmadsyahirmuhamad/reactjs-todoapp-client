import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../../actions/todoActions';
import './index.css'
import TodoList from '../TodoList';

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
  componentWillMount(){
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
        const title = ""
        const description = ""
        this.setState({todo: {title, description }});
        return this.props.dispatch(data)
      });
  }


  renderTodos() {
    const { todo } = this.props;
    if (todo.todo.todos) {
      return <TodoList todos={this.props.todo} />
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
        { this.renderTodos() }
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

