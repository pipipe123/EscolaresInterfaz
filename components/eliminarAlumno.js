import React, { useState } from 'react';
import { eliminarAlumno } from '../api/compService';

function EliminarAlumno({ alumno, onEliminar }) {
    const [confirmado, setConfirmado] = useState(false);

    const handleEliminar = async() => {
        if (confirmado) {
            console.log("aaa"+alumno.alumno_id);
            const res = await eliminarAlumno(alumno.alumno_id);
            onEliminar();
        } else {
            setConfirmado(true);
        }
    };

    return (
        <div>
            <h3>Eliminar Alumno</h3>
            {confirmado ? (
                <button style={{ backgroundColor: 'red' }} onClick={handleEliminar}>¿Estás seguro?</button>
            ) : (
                <button onClick={handleEliminar} disabled={confirmado}>Eliminar</button>
            )}
            <p>ID: {alumno.alumno_id}</p>
        </div>
    );
}

export default EliminarAlumno;
