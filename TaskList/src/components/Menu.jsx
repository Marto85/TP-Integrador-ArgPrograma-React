import { useState } from 'react';
import '../styles/Menu.css'

const Menu = ({ taskLists, switchList, createNewList }) => {
    const [showForm, setShowForm] = useState(false);
    const [newListName, setNewListName] = useState('');
    const [newListDescription, setNewListDescription] = useState('');

    const handleCreateList = () => {
        createNewList({
            title: newListName,
            description: newListDescription,
        });
        // Ocultar el formulario después de crear la lista
        setShowForm(false);
        // Limpiar los campos del formulario
        setNewListName('');
        setNewListDescription('');
    };

    return (
        <div className="menu">
            {taskLists.map((list) => (
                <div key={list.list_id} className="card" onClick={() => switchList(list.list_id)}>
                    <h3>{list.title}</h3>
                </div>
            ))}
            {/* Botón para mostrar/ocultar formulario */}
            <button className="new-list" onClick={() => setShowForm(!showForm)}> Nueva lista de tareas</button>
            {/* Formulario para crear nueva lista */}
            {showForm && (
                <div className="tasklist-create">
                    <input
                        type="text"
                        placeholder="Nombre de la nueva lista"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descripción de la nueva lista"
                        value={newListDescription}
                        onChange={(e) => setNewListDescription(e.target.value)}
                    />
                    <button onClick={handleCreateList}>Crear Lista</button>
                </div>
            )}
        </div>
    );
};

export default Menu;
