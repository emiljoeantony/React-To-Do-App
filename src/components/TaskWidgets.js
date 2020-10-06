import React from 'react';
import TodaysDate from './TodaysDate';


const TaskWidgets = ({todos}) => {
  return (
    <div className='widgets'>
      <div className='total-widget'>
        <p className='count'>{todos.length}</p>
        <p className='tasks'>Total Tasks</p>
      </div>
      <div className='total-widget'>
        <p className='count'>
          {
            todos.filter((todo) => {
              return todo.completed;
            }).length
          }
        </p>
        <p className='tasks_done'>Completed</p>
      </div>
      <div className='total-widget'>
        <p className='count'>
          {
            todos.filter((todo) => {
              return !todo.completed;
            }).length
          }
        </p>
        <p className='remaining_tasks'>Remaining</p>
      </div>
      <TodaysDate />
    </div>
  );
};

export default TaskWidgets;
