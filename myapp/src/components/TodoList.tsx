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

  return (
    <div>
      <h1>Todo List</h1>
      Add Task : <input value={ task } placeholder="Add New Task" onChange={ handleNewTask }/>
      <ul>
        {todos.map((todo, index) => (
          <li key={ index }>{ todo.task }</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;