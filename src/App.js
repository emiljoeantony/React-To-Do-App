import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
import TaskWidgets from './components/TaskWidgets';
import TodaysDate from './components/TodaysDate';
import TaskInfo from './components/TaskInfo';

function App() {
  //states
  
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [editTask, setEditTask] = useState('');

  //to run only once the app starts
  useEffect(() => {
    getFromLocal();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'pending':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const onNewTask = (newTask) => {
    setTodos((previous) => {
      return [...previous, newTask];
    });
  };


  const onDeleteTask = (deleteTask) =>{

    setTodos((previous) => {
      return previous.filter((todo)=>{
        if(deleteTask.id === todo.id){
          return false;
        }else{
          return true;
        }
      })
    })
  }

  

  const onEditTask = (editedTask) =>{

    let editTaskId =  editedTask.id;

    setTodos((previous) =>{
      return previous.map((todo)=>{
        let todoId = todo.id;
        if(editTaskId === todoId){
          return editedTask;

        }else{
          return todo;
        }
      })

    })

  }
 // [{id}{id}]


  //save to local storage
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getFromLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosFromLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosFromLocal);
    }
  };

  return (
    <div className='App'>
      <div className='app-name'>
        To-Do
      </div>
      

      <Form onNewTask={onNewTask} />

      

      <TodoList
        setTodos={setTodos}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        filteredTodos={filteredTodos}
      />
      <div className='Footer'>
        <h1>Overview</h1>
      </div>

      <TaskWidgets todos={todos} filteredTodos={filteredTodos} />

      {/* <TaskInfo /> */}
    </div>
  );
}

export default App;
