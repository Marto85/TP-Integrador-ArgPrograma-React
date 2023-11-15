import './TaskItem.css';

const TaskItem = ({ task, handleTaskCompletion, handleTaskDeletion }) => {
    return (
        <div className="task">
            {/* Checkbox para marcar la tarea como completada */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
            />
            {/* Aplica el estilo condicional solo al nombre de la tarea */}
            <p className={task.completed ? 'completed' : ''}>{task.name}</p>
            {/* Botón de eliminar sin aplicar el estilo condicional */}
            <button onClick={() => handleTaskDeletion(task.id)}>Eliminar</button>
        </div>
    );
};

export default TaskItem;
