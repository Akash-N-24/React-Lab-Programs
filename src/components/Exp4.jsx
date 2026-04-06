import React, { useState } from 'react';
import './ToDoFunction.css';

export default function ToDoFunction() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: input,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="todo-container">
            <h1>My To-Do List</h1>
            
            <div className="input-section">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-btn">
                    Add Task
                </button>
            </div>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id)}
                            className="task-checkbox"
                        />
                        <span className="task-text">{task.text}</span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {tasks.length === 0 && <p className="empty-message">No tasks yet. Add one to get started!</p>}
        </div>
    );
}