import { useState } from "react";
const Task = ({ task, onToggle, onDelete, onOpen }) => {
    const [stateButtons, setStateButtons] = useState(['Completed', 'Reopen']);
    function toggleButtons() {
        if (stateButtons[0] === 'Completed') {
            setStateButtons(['Reopen', 'Completed']);
        }
        if (stateButtons[0] === 'Reopen') {
            setStateButtons(['Completed', 'Reopen']);
        }
    }
    return (
        <div className={`task${task.completed ? ' completed' : ''}`}>
            <div
                className={`task-text${task.opened ? ' opened' : ''}`}
                onClick={() => onOpen(task.id)}  // отдельный хендлер для открытия
                style={{ cursor: 'pointer' }}
            >
                {task.text}
            </div>
            <div className="description">
                {task.opened && task.description}
            </div>

            {task.opened && (   // кнопки появятся только при task.opened === true
                <div className="buttons">
                    <button onClick={() => {onToggle(task.id); toggleButtons()}}>
                        {stateButtons[0]}
                    </button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Task;
