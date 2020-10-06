import React, { useState, useEffect } from 'react';

const Todo = ({ todo, onEditTask, onDeleteTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.text);
  const [isOpen, openModal] = useState(false);

  const togglePopup = () => {
    openModal((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  const modalTemplate = (
    <div className='todo'>
      <label className='todo-label'>Are you sure</label>
      <div className='btn-group'>
        <button
          onClick={() => onDeleteTask(todo)}
          className='confirm-delete-btn'
        >
          <i className='fas fa-check'></i>
          <span className='visually-hidden'>{todoTitle}</span>
        </button>
        <button
          type='button'
          className='cancel-delete-btn'
          onClick={() => openModal(false)}
        >
          <span className='visually-hidden'>{todoTitle}</span>
          <i class='fas fa-window-close'></i>
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form
      onSubmit={(e) => {
        console.log('save');
        e.preventDefault();
        onEditTask({ ...todo, text: todoTitle });
        setEditing(false);
      }}
      className='stack-small'
    >
      <div className='form-group'>
        <label className='todo-label' htmlFor={todo.id}>
          Edit Task
        </label>
        <input
          onChange={(e) => setTodoTitle(e.target.value)}
          id={todo.id}
          className='todo-text'
          type='text'
          value={todoTitle}
          autofocus
        />
      </div>
      <div className='btn-group'>
        <button
          type='button'
          className='todo-cancel'
          onClick={() => setEditing(false)}
        >
          <span className='visually-hidden'>{todoTitle}</span>
          <i class='fas fa-window-close'></i>
        </button>
        <button type='submit' className='todo-edit'>
          <span className='visually-hidden'>{todoTitle}</span>
          <i class='fas fa-save'></i>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed-status' : ''}`}>
        {todoTitle}
      </li>

      <button onClick={() => setEditing(true)} className='edit-btn'>
        <i class='fas fa-edit'></i>
      </button>

      <button
        onClick={() => onEditTask({ ...todo, completed: !todo.completed })}
        className='complete-btn'
      >
        <i className='fas fa-check'></i>
      </button>

      {/* <button onClick={() => onDeleteTask(todo)} className='trash-btn'> */}
      <button onClick={togglePopup} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
      
    </div>
    
  );

  return (
    <li className='edit-todo'>
      {isEditing ? editingTemplate : viewTemplate && isOpen ? modalTemplate : viewTemplate}
      
    </li>
  );
};
export default Todo;
