import { useState } from 'react';
// import backgroundImg from './assets/ToDo.png';

const TaskFormStyled = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            // Enviar nueva tarea al componente principal
            addTask({
                id: Date.now(),
                name: taskName,
                completed: false,
            });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form-styled">
            <div className="styled-background">
                {/* Campo de texto para la nueva tarea */}
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                {/* Botón para agregar la tarea */}
                <button type="submit">Agregar</button>
            </div>
        </form>
    );
};

export default TaskFormStyled;
