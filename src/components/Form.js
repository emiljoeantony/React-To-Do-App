import React, { useState } from 'react';

const Form = ({ onNewTask }) => {
   
  const [inputText, setInputText] = useState('');
  

   const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    if (inputText === '') {
      alert('please enter a task');
      e.preventDefault();
    } else {
      onNewTask(
        
        { text: inputText, completed: false, id: Math.random() * 1000 },
      );
      setInputText('');
      
    }
  };

  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <form onSubmit={submitTodoHandler}>
      <div className='input-bar'>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type='text'
          className='todo-input'
          placeholder='Enter your task here...'
          autofocus
        />

        <button className='todo-button' type='submit'>
          <span className='fas fa-plus-square'></span>
        </button>
      </div>
    </form>
  );
};

export default Form;
