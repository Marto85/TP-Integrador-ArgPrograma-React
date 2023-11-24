import { useState } from "react";

const EditForm = ({ editTask, task}) => {
    const [value, setValue] = useState(task.task);
    
    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id);
        setValue("");
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='text' className='form-input' value={value} placeholder={'Modificar tarea'} onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='submit-btn'>Actualizar</button>
        </form>
    )
}

export default EditForm;