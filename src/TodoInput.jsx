import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    addTodo(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex'>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Add a new todo" 
      />
      <button className='add' onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
