import React from 'react';

const TaskInfo = ()=>{
  
    return (
      <div className='info-bottom'>
        <div className='left'>
          <p className='count'>{}</p>
          <p className='tasks'>Total</p>
          
        </div>
        <div className='right'>
          <p className='count_done'></p>
          <p className='tasks_done'>Completed</p>
        </div>
        <div className='middle'>
          <p className='remaining_done'></p>
          <p className='remaining_tasks'>Remaining</p>
        </div>
      </div>
    );
}

export default TaskInfo;