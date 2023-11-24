import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const TaskList = ({ task, toogleComplete, deleteTask, editTask }) => {
    return (
        <div className='task-list'>
            <p onClick={() => toogleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}> { task.task }</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    )
}

export default TaskList;