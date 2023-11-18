// TaskItem.jsx

import '../styles/Taskitem.css';

const TaskItem = ({ task, handleTaskCompletion, handleTaskDeletion }) => {
    return (
        <div className="task">

            <div className={`custom-checkbox ${task.completed ? 'completed' : ''}`} onClick={() => handleTaskCompletion(task.id)}>
                <div className="check-mark">{task.completed ? '✓' : ''}</div>
            </div>

            <p className={`task-text ${task.completed ? 'completed-text' : ''}`}>{task.name}</p>

            <button className="delete-button" onClick={() => handleTaskDeletion(task.id)}>Eliminar</button>
        </div>
    );
};

export default TaskItem;
