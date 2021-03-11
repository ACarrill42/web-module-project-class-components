import React from 'react';
import ToDoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const tasks =[
  {
    task: 'Laundry',
    id: 0,
    completed: false
  },
  {
    task: 'Cleaning',
    id: 1,
    completed: false
  },
  {
    task: 'Homework',
    id: 2,
    completed: false
  },
  {
    task: 'Carwash',
    id: 3,
    completed: false
  },
  {
    task: 'Study',
    id: 4,
    completed: false
  },
  {
    task: 'Organize House',
    id: 5,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {tasks:tasks};
  };

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks,
      {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId) {
          return {
            ...task, completed : !task.completed
          }
        }
        return task;
      })
    })
  }

  clearTask = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask = {this.addTask}/>
        <div>
        <TodoList clearTask={this.clearTask} tasks={this.state.tasks} toggleTask = {this.toggleTask}/>
        </div>
      </div>
    );
  }
}

export default App;
