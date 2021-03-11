// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDoTask from './Todo';


const ToDoList = props => {
  return(
    <div className = 'to-do-list'>
      {props.tasks.map(task => (
        <ToDoTask key={task.id} task={task} toggleTask = {props.toggleTask}/>
      ))}
      <button onClick = {props.clearTask}> 
        Clear Task 
      </button>
    </div>
  )
}
export default ToDoList;