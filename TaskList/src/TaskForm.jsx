const TaskForm = ({ newTaskName, setNewTaskName, addTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskName.trim() !== '') {
            addTask();
            setNewTaskName(''); // Limpiar el nombre de la nueva tarea después de agregarla
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campo de texto para la nueva tarea */}
            <input
                type="text"
                placeholder="Nueva tarea"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            {/* Botón para agregar la tarea */}
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TaskForm;
