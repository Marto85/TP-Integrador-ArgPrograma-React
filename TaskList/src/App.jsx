// App.jsx
import React, { useState } from 'react';
import Menu from './Menu';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskFormStyled from './TaskFormStyled';

const App = () => {
    const [taskLists, setTaskLists] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [currentList, setCurrentList] = useState(null);

    const switchList = (listId) => {
        setCurrentList(listId);
        const tasksForList = tasks.filter((task) => task.list_id === listId);
        setTasks(tasksForList);
    };

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
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
            <Menu taskLists={taskLists} switchList={switchList} createNewList={createNewList} />
            {currentList && (
                <>
                    <TaskList
                        tasks={tasks}
                        handleTaskCompletion={handleTaskCompletion}
                        handleTaskDeletion={handleTaskDeletion}
                    />
                    <TaskForm addTask={addTask} />
                </>
            )}
        </div>
    );
};

export default App;
