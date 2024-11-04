import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeStoredContent, removeCompleted, removeInProgress, removeTodo, setTodo, setInProgress, setCompleted } from '../../redux/slice/slice';

interface DragDropProps {
    input: string[]; // Array of strings
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Function to handle form submission
    value: string; // Current input value
}

const DragDrop = ({ input, handleInputChange, handleClick, value }: DragDropProps) => {
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.input.todo);
    const inProgress = useSelector((state: RootState) => state.input.inProgress);
    const completed = useSelector((state: RootState) => state.input.completed);

    useEffect(() => {
        dispatch(setTodo(input)); // Use dispatch to update the todo list
    }, [input, dispatch]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
        e.dataTransfer.setData('text/plain', item);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetList: string) => {
        const item = e.dataTransfer.getData('text/plain');
        if (item) {
            if (todo.includes(item)) {
                dispatch(removeTodo(item));
                dispatch(removeStoredContent(item));
            } else if (inProgress.includes(item)) {
                dispatch(removeInProgress(item));
                dispatch(removeStoredContent(item));
            } else if (completed.includes(item)) {
                dispatch(removeCompleted(item));
                dispatch(removeStoredContent(item));
            }

            switch (targetList) {
                case 'todo':
                    dispatch(setTodo([...todo, item]));
                    break;
                case 'inProgress':
                    dispatch(setInProgress([...inProgress, item]));
                    break;
                case 'completed':
                    dispatch(setCompleted([...completed, item]));
                    break;
                default:
                    break;
            }
        }
    };

    const handleDeleteDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const item = e.dataTransfer.getData('text/plain');
        if (item) {
            dispatch(removeTodo(item));
            dispatch(removeInProgress(item));
            dispatch(removeCompleted(item));
            dispatch(removeStoredContent(item));
        }
    };

    return (
        <>
            <div>
                <form onSubmit={(e) => e.preventDefault()} className='flex justify-center mt-5 mb-10'>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter some text"
                        value={value}
                        className="border p-2 w-[500px] rounded"
                    />
                    <button type="button" onClick={handleClick} className="ml-2 bg-blue-500 text-white p-2 rounded">Submit</button>
                </form>
            </div>

            <div className="flex justify-around mt-4">
                {/* Todo Section */}
                <div
                    onDrop={(e) => handleDrop(e, 'todo')}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-blue-500 bg-blue-100 rounded-lg shadow-md h-72 w-72 overflow-y-auto"
                >
                    <div className="sticky top-0 left-10 bg-blue-100 font-bold z-10 w-full h-10 flex items-center justify-center rounded-t-lg">
                        <div>Todo</div>
                    </div>
                    {todo.map((item) => (
                        <div 
                            key={item} 
                            draggable 
                            onDragStart={(e) => handleDragStart(e, item)} 
                            className="p-2 border border-black my-1 rounded"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* In Progress Section */}
                <div
                    onDrop={(e) => handleDrop(e, 'inProgress')}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-orange-500 bg-orange-100 rounded-lg shadow-md h-72 w-72 overflow-y-auto"
                >
                    <div className="sticky top-0 left-10 bg-orange-100 font-bold z-10 w-full h-10 flex items-center justify-center rounded-t-lg">
                        <div>In Progress</div>
                    </div>
                    {inProgress.map((item) => (
                        <div 
                            key={item} 
                            draggable 
                            onDragStart={(e) => handleDragStart(e, item)} 
                            className="p-2 border border-black my-1 rounded"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Completed Section */}
                <div
                    onDrop={(e) => handleDrop(e, 'completed')}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-green-500 bg-green-100 rounded-lg shadow-md h-72 w-72 overflow-y-auto"
                >
                    <div className="sticky top-0 left-10 bg-green-100 font-bold z-10 w-full h-10 flex items-center justify-center rounded-t-lg">
                        <div>Completed</div>
                    </div>
                    {completed.map((item) => (
                        <div 
                            key={item} 
                            draggable 
                            onDragStart={(e) => handleDragStart(e, item)} 
                            className="p-2 border border-black my-1 rounded"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Delete Section */}
            <div
                onDrop={handleDeleteDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-red-500 bg-red-100 rounded-lg shadow-md h-40 w-[1000px] flex items-center justify-center mt-10 m-auto"
            >
                <div className="text-red-500 font-bold">Drag items here to delete</div>
            </div>
        </>
    );
};

export default DragDrop;
