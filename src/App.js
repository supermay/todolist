import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  constructor(){
    super();
    this.addToDo = this.addToDo.bind(this);
    this.state = {
      todos: {}
    }
  }

  addToDo(todo){
    const todos = {...this.state.todos};
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = todo;
    this.setState({todos: todos})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         <ToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
