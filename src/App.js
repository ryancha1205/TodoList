import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoform';
import Todolist from './todolist';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:['clean whiteboard','drink water','sleep']
    }
  }

  addNewTodo(todo){
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
        <div className="container">
        <h3>My Todos</h3>
        <TodoForm todo_data={this.state.todos}
        addNewTodoFunc={this.addNewTodo.bind(this)}/>
      <Todolist todo_data={this.state.todos}/>
        </div>
  );
  }
}

export default App;
