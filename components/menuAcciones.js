import React, { useState } from 'react';
import ModificarAlumno from './modificarAlumno';
import EliminarAlumno from './eliminarAlumno';

function MenuAcciones({alumno}) {
    const [pestañaActiva, setPestañaActiva] = useState('modificar'); // Estado para controlar la pestaña activa

    return (
        <div className="menu-editar">
            <div className="pestañas">
                <div 
                    className={`pestaña ${pestañaActiva === 'modificar' && 'activa'}`} 
                    onClick={() => setPestañaActiva('modificar')}
                >
                    Modificar
                </div>
                <div 
                    className={`pestaña ${pestañaActiva === 'eliminar' && 'activa'}`} 
                    onClick={() => setPestañaActiva('eliminar')}
                >
                    Eliminar
                </div>
            </div>
            <div className="contenido">
                {pestañaActiva === 'modificar' ? <ModificarAlumno alumno={alumno}/> : <EliminarAlumno alumno={alumno} />}
            </div>
        </div>
    );
}

export default MenuAcciones;
