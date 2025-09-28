const Task = ({ task, onToggle, onDelete, onOpen }) => {
    return (
        <div className={`task${task.completed ? ' completed' : ''}`}>
            <div
                className={`task-text${task.opened ? ' opened' : ''}`}
                onClick={() => onOpen(task.id)}  // отдельный хендлер для открытия
                style={{ cursor: 'pointer' }}
            >
                {task.text}
            </div>

            {task.opened && (   // кнопки появятся только при task.opened === true
                <div className="buttons">
                    <button onClick={() => onToggle(task.id)}>Completed</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Task;
