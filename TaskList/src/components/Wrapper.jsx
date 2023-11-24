import { useState } from 'react';
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";
import EditForm from "./EditForm";

const Wrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
    };

    const toogleComplete = id => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = id => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
    };
    
    const editToDo = (task, id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, task: task, isEditing: !t.isEditing } : t));
    };

    return (
        <div className="wrapper">
            <h1>Crea tu lista de tareas</h1>
            <Form addTask={addTask} />
            {tasks.map((task, index) => (
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
        </div>
    );
};

export default Wrapper;
