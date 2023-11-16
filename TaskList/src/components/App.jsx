import { useState, useEffect } from 'react';
import Menu from './Menu';
import TaskList from './TaskList';
import TaskForm from './TaskForm';


const App = () => {
    const [taskLists, setTaskLists] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [currentList, setCurrentList] = useState(null);
    const [newTaskName, setNewTaskName] = useState(''); // Nuevo estado para el nombre de la tarea

    // Cargar datos desde localStorage al inicio
    useEffect(() => {
        const storedTaskLists = JSON.parse(localStorage.getItem('taskLists')) || [];
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTaskLists(storedTaskLists);
        setTasks(storedTasks);
    }, []);

    // Guardar datos en localStorage al actualizar taskLists o tasks
    useEffect(() => {
        localStorage.setItem('taskLists', JSON.stringify(taskLists));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [taskLists, tasks]);

    const switchList = (listId) => {
        setCurrentList(listId);
        setNewTaskName(''); // Limpiar el nombre de la nueva tarea al cambiar de lista
    };

    const addTask = () => {
        if (newTaskName.trim() !== '') {
            // Asignar la lista actual a la nueva tarea
            const newTask = { id: Date.now(), name: newTaskName, completed: false, list_id: currentList };
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskName(''); // Limpiar el nombre de la nueva tarea después de agregarla
        }
    };

    const handleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleTaskDeletion = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const createNewList = (newList) => {
        setTaskLists([...taskLists, { list_id: Date.now(), ...newList }]);
    };

    return (
        <div className="app">
            <h1>Tasks Reminder</h1>
            <Menu taskLists={taskLists} switchList={switchList} createNewList={createNewList} />
            {currentList && (
                <>
                    <TaskList
                        tasks={tasks.filter((task) => task.list_id === currentList)}
                        handleTaskCompletion={handleTaskCompletion}
                        handleTaskDeletion={handleTaskDeletion}
                    />
                    {/* Utiliza TaskForm en lugar de TaskFormStyled */}
                    {currentList?.someCondition ? (
                        <TaskForm
                            newTaskName={newTaskName}
                            setNewTaskName={setNewTaskName}
                            addTask={addTask}
                        />
                    ) : (
                        <TaskForm
                            newTaskName={newTaskName}
                            setNewTaskName={setNewTaskName}
                            addTask={addTask}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default App;
