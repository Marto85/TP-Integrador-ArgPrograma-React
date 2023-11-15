// TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleTaskCompletion, handleTaskDeletion }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleTaskCompletion={handleTaskCompletion}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </div>
    );
};

export default TaskList;
