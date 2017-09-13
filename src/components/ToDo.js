import React from 'react';
import ToDoForm from './ToDoForm'

class Todo extends React.Component {
  render(){
    return (
      <div className="todo">
        <h2>To Do List</h2>
        <ToDoForm addToDo={this.props.addToDo} />
      </div>
    )
  }
}

export default Todo;
