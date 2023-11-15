import { useState } from 'react';
import TaskFormStyled from './TaskFormStyled';

const TaskForm = ({ addTask, styled }) => {
    const [taskName, setTaskName] = useState('');

    if (styled) {
        return <TaskFormStyled addTask={addTask} />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTask({
                id: Date.now(),
                name: taskName,
                completed: false,
            });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campo de texto para la nueva tarea */}
            <input
                type="text"
                placeholder="Nueva tarea"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            {/* Botón para agregar la tarea */}
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TaskForm;
