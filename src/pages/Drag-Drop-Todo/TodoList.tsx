// src/App.tsx

import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { setInput, setStoredContent } from '../../redux/slice/slice';
import DragDrop from '../../components/Drag-Drop-Todo/DragDrop';

function DragDropTodo() {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.input.content);
  const StoredContent =  useSelector((state: RootState) => state.input.StoredContent);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(e.target.value));
  };

  // Handle form submission
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default action if necessary
    if (content.trim() !== '') {
      // setStoredInputs((prev) => [...prev, content]);
      dispatch(setStoredContent(content));
      console.log(StoredContent)
      dispatch(setInput('')); // Clear the input after submission
    }
  };

  return (
    <div>
      <DragDrop input={StoredContent} handleInputChange={handleInputChange} handleClick={handleClick} value={content}/>
    </div>
  );
};

export default DragDropTodo;
