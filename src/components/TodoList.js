// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';

const ToDoList = props => {
  return(
    <div>
      {props.list.map(task => (
          <Task toggleCompleted = {props.toggleCompleted} key = {task.id} task = {task}/>
      ))}
      <button onClick ={() => {props.clearTask()}}> Clear Task </button>
    </div>
  )
}

export default ToDoList;