import { useState } from "react";

const Form = ({ addTask}) => {
    const [value, setValue] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        addTask(value);
        setValue("");
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='text' className='form-input' value={value} placeholder='Agrega aqui una tarea' onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='submit-btn'>Agregar</button>
        </form>
    )
}

export default Form;