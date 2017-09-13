import React from 'react';

class ToDoForm extends React.Component {
  createToDo(event){
    event.preventDefault();
    console.log("You clicked!")
    const todo = {
      level: this.level,
      title: this.title.value,
      Description: this.description.value
    }
    console.log(this);
    this.props.addToDo(todo);
    this.todoform.reset();
  }
  render(){
    return (
      <form ref={(input)=> this.todoform = (input)}className="todo-create" onSubmit={(e) => this.createToDo(e)}>
        <select ref={(input) => this.level = input}>
          <option value="urgent">Urgent</option>
          <option value="normal">Normal</option>
          <option value="optional">Optional</option>
        </select>
        <br/>
        <input ref={(input) => this.title = input} type="text" placeholder='Title'/>
        <br/>
        <textarea ref={(input) => this.description = input} placeholder='Description'></textarea>
        <br/>
        <button type='submit'>Create To Do</button>
      </form>
    )
  }
}

export default ToDoForm;
