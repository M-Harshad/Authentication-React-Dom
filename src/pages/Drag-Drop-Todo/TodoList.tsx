// src/App.tsx
import { useState } from 'react';
import React from 'react';
import DragDrop from '../../components/Drag-Drop-Todo/DragDrop';


function DragDropTodo() {
  const [inputValue, setInputValue] = useState<string>('');
  const [storedInputs, setStoredInputs] = useState<string[]>([]);
  console.log(inputValue)
  console.log(storedInputs)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default action if necessary
    if (inputValue.trim() !== '') {
      setStoredInputs((prev) => [...prev, inputValue]);
      setInputValue(''); // Clear the input after submission
    }
  };

  return (
    <div>
      <DragDrop input={storedInputs} handleInputChange={handleInputChange} handleClick={handleClick} value={inputValue}/>
    </div>
  );
};

export default DragDropTodo;
