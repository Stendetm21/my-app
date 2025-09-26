const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`task${task.completed ? ' completed' : ''}`}>
            <span 
                onClick={() => onToggle(task.id)} 
                style={{ cursor: 'pointer' }}
            >
                {task.text}
            </span> 
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
