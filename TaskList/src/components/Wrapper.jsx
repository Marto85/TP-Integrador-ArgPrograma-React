import { useState, useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";
import EditForm from "./EditForm";

const Wrapper = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    console.log("Renderizando Wrapper");
    // Cargar tareas desde LocalStorage al montar el componente
    useEffect(() => {
        console.log("Efecto de carga de tareas ejecutado");
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    // Guardar tareas en LocalStorage cuando cambian
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
    };

    const toogleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isEditing: !task.isEditing } : task
            )
        );
    };

    const editToDo = (task, id) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === id ? { ...t, task: task, isEditing: !t.isEditing } : t
            )
        );
    };

    const filterTasks = () => {
        switch (filter) {
            case "all":
                return tasks;
            case "active":
                return tasks.filter(task => !task.completed);
            case "completed":
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    };

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    return (
        <div className="wrapper">
            <h1>Crea tu lista de tareas</h1>
            <Form addTask={addTask} />
            {filterTasks().map((task, index) => (
                task.isEditing ? (
                    <EditForm 
                        key={index}
                        editTask={editToDo}
                        task={task}
                    />
                ) : (
                    <TaskList
                        key={index}
                        task={task}
                        toogleComplete={toogleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                )
            ))}
            <div className='filter-container'>
                <button type="button" className={`btn btn-primary ${filter === 'all' && 'active'}`} onClick={() => setFilter('all')}>All</button>
                <button type="button" className={`btn btn-info ${filter === 'active' && 'active'}`} onClick={() => setFilter('active')}>Active</button>
                <button type="button" className={`btn btn-success ${filter === 'completed' && 'active'}`} onClick={() => setFilter('completed')}>Completed</button>
                <button type="button" className="btn btn-warning" onClick={clearCompletedTasks}>Clear</button>
            </div>
        </div>
    );
};

export default Wrapper;
