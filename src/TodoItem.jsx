import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, removeTodo, editTodo }) => {
  const handleEdit = () => {
    const newTodoText = prompt('Enter new todo text:', todo);
    if (newTodoText && newTodoText.trim() !== '') {
      editTodo(index, newTodoText.trim());
    }
  };

  return (
    <li>
      <div className="todo-text">{todo}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
