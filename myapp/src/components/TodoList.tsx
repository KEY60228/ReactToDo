import React, { useState } from 'react';

function TodoList() {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];

  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState('');

  const handleNewTask = (event: any) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(task === '') return;
    setTodo(todos => [...todos, { task, isCompleted: false}]);
    setTask('');
  }

  const handleRemoveTask = (index: any) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={ handleSubmit }>
        Add Task : <input value={ task } placeholder="Add New Task" onChange={ handleNewTask }/>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={ index }>{ todo.task } <span onClick={ () => handleRemoveTask(index) }>X</span></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;