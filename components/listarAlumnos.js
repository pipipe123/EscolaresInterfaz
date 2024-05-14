import React, { useState, useEffect } from 'react';
import { obtenerAlumnos, listarAlumnos } from '../api/compService.js';
import MenuAcciones from './menuAcciones';
import AgregarAlumno from './agregarAlumno.js';

function ListarAlumnos() {
    const [alumnos, setAlumnos] = useState([]);
    const [filaActiva, setFilaActiva] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    const [alumnoEncontrado, setAlumnoEncontrado] = useState(null);
    const [mostrarAgregarAlumno, setMostrarAgregarAlumno] = useState(false);

    useEffect(() => {
        cargarAlumnos();
    }, []);

    const cargarAlumnos = async () => {
        try {
            const data = await listarAlumnos();
            setAlumnos(data);
        } catch (error) {
            console.error('Error al cargar los alumnos:', error);
        }
    };

    const handleMostrarMenu = (alumnoId) => {
        setFilaActiva(filaActiva === alumnoId ? null : alumnoId);
    };

    const handleMostrarAgregarAlumno = () => {
        setMostrarAgregarAlumno(!mostrarAgregarAlumno); // Cambiar el estado para mostrar u ocultar el formulario
    };

    const buscarAlumno = async () => {
        try {
            const alumno = await obtenerAlumnos(busqueda);
            setAlumnoEncontrado(alumno);
        } catch (error) {
            console.error('Error al buscar el alumno:', error);
        }
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <div className="buscar">
                                <input 
                                    type="text" 
                                    placeholder="Buscar alumnos" 
                                    value={busqueda} 
                                    onChange={(e) => setBusqueda(e.target.value)} 
                                />
                                <button onClick={buscarAlumno}>Buscar</button>
                            </div>
                        </td>
                        <td colSpan="6">
                            <h2>Alumnos</h2>
                        </td>
                        <td>
                            <button onClick={handleMostrarAgregarAlumno}>Añadir</button>
                        </td>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Clave</th>
                        <th>Matrícula</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {alumnoEncontrado ? (
                        <tr key={alumnoEncontrado.alumno_id}>
                            <td>{alumnoEncontrado.alumno_id}</td>
                            <td>{alumnoEncontrado.clave}</td>
                            <td>{alumnoEncontrado.matricula}</td>
                            <td>{alumnoEncontrado.paterno}</td>
                            <td>{alumnoEncontrado.materno || '-'}</td>
                            <td>{alumnoEncontrado.nombre}</td>
                            <td>
                                <MenuAcciones alumno={alumno} />
                            </td>
                        </tr>
                    ) : (
                        alumnos.map(alumno => (
                            <tr key={alumno.alumno_id}>
                                <td>{alumno.alumno_id}</td>
                                <td>{alumno.clave}</td>
                                <td>{alumno.matricula}</td>
                                <td>{alumno.paterno}</td>
                                <td>{alumno.materno || '-'}</td>
                                <td>{alumno.nombre}</td>
                                <td>
                                    <button onClick={() => handleMostrarMenu(alumno.alumno_id)}>Mostrar Menú</button>
                                    {filaActiva === alumno.alumno_id && <MenuAcciones alumno={alumno}   />}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {mostrarAgregarAlumno && <AgregarAlumno />}
        </div>
    );
}

export default ListarAlumnos;
