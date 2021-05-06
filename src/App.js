import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Organize Room',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      list: list
    }

    addList = newItem => {
      this.setState({
        list: [...this.state.list, {
          task: newItem,
          id: Date.now(),
          completed: false
        }]
      })
    }

    toggleCompleted = taskId => {
      this.setState({
        list: this.state.list.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task;
        })
      })
    }

    clearTask = () => {
      this.setState({
        list: this.state.list.filter(task => !task.completed)
      })
    }
  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addList = {this.addList}/>          
        </div>
        <ToDoList clearTask = {this.clearTask} list = {this.state.list} toggleCompleted = {this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
