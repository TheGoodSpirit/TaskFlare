import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          removeTodo={removeTodo} 
          editTodo={editTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
