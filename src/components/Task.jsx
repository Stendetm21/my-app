import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`task${task.completed ? ' completed' : ''}`}>
            <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
                {task.text}
            </span> 
        </div>
    );
};

export default Task;