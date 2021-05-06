import React from "react";;

class ToDoFrom extends React.Component {
  state = {
    newTaskName: ''
  }

  handleChanges = e => {
    this.setState({
      newTaskName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addList(this.state.newTaskName);
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <input value = {this.state.newTaskName} type = 'text' name = 'task' onChange = {this.handleChanges}/>
        <button>Submit Task</button>
      </form>
    )
  }
}

export default ToDoFrom;