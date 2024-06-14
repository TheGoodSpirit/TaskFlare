import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './App.css';

function App() {
  const initialTodos = ['Learn React', 'Build a Todo App', 'Deploy to Heroku'];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([ newTodo, ...todos]);
  };

  const isEmpty = () => {
    return todos.length === 0; 
  };
  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  const editTodo = (indexToEdit, newTodoText) => {
    const updatedTodos = [...todos];
    updatedTodos[indexToEdit] = newTodoText;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      {!isEmpty() && <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />}
    </div>
  );
}

export default App;
