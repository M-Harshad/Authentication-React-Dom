import React, { useState, useEffect } from 'react';

interface DragDropProps {
    input: string[]; // Array of strings
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Function to handle form submission
    value: string; // Current input value
}

const DragDrop = ({ input, handleInputChange, handleClick, value }: DragDropProps) => {
    const [todo, setTodo] = useState<string[]>([]);
    const [inProgress, setInProgress] = useState<string[]>([]);
    const [completed, setCompleted] = useState<string[]>([]);

    useEffect(() => {
        setTodo(input);
    }, [input]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
        e.dataTransfer.setData('text/plain', item);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetList: React.Dispatch<React.SetStateAction<string[]>>, currentList: string[]) => {
        const item = e.dataTransfer.getData('text/plain');
        if (item && !currentList.includes(item)) {
            // Check if the item exists in the original input (Todo list)
            if (todo.includes(item) || inProgress.includes(item) || completed.includes(item)) {
                // Remove the item from all other lists
                setTodo((prev) => prev.filter(i => i !== item));
                setInProgress((prev) => prev.filter(i => i !== item));
                setCompleted((prev) => prev.filter(i => i !== item));
                // Add the item to the target list
                targetList((prev) => [...prev, item]);
            }
        }
    };

    const handleDeleteDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const item = e.dataTransfer.getData('text/plain');
        if (item) {
            // Remove the item from all lists
            setTodo((prev) => prev.filter(i => i !== item));
            setInProgress((prev) => prev.filter(i => i !== item));
            setCompleted((prev) => prev.filter(i => i !== item));
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
                    onDrop={(e) => handleDrop(e, setTodo, todo)}
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
                    onDrop={(e) => handleDrop(e, setInProgress, inProgress)}
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
                    onDrop={(e) => handleDrop(e, setCompleted, completed)}
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
