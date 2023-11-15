// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, handleTaskCompletion, handleTaskDeletion }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            {/* Checkbox para marcar la tarea como completada */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
            />
            <p>{task.name}</p>
            <button onClick={() => handleTaskDeletion(task.id)}>Eliminar</button>
        </div>
    );
};

export default TaskItem;
