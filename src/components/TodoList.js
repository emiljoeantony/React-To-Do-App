import React from 'react';
//import components
import Todo from './Todo';

const TodoList = ({
  
  
  filteredTodos,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <div className='todo-container'>
      <div>
        <h1>Todays Task</h1>
      </div>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo  key={todo.id} todo={todo} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
