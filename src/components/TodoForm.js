import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = { taskName: '' }
  }

  handleChange = e => {
    this.setState({taskName: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
          <input onChange = {this.handleChange} value = {this.state.taskName} type='text' name='toDo' placeholder='Enter Task'/>
          <button>Add Task</button>
      </form>
    );
  }
}

export default ToDoForm