// Importar Axios
import axios from 'axios';

// URL base de la API
const URL_API = 'http://localhost:3000/test';
const URL_API2 = 'http://localhost:3000/api';

// Función para agregar un alumno
export function agregarAlumno(alumno) {
    return axios.post(`${URL_API}/alumnos/agregar`, alumno)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Función para listar alumnos
export function listarAlumnos() {
    return axios.get(`${URL_API}/alumnos/listar`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}


export function totalAlumnos() {
    return axios.get(`${URL_API}/alumnos/total`)
        .then(response => response.data.total)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Función para obtener alumnos
export function obtenerAlumnos(id) {
    return axios.get(`${URL_API}/alumnos/obtener?id=${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Función para modificar un alumno
export function modificarAlumno(alumno) {
    return axios.put(`${URL_API}/alumnos/modificar`, alumno)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Función para eliminar un alumno
export function eliminarAlumno(id) {
    return axios.delete(`${URL_API}/alumnos/eliminar/${id}`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}


// Función para obtener el contador de altas
export function obtenerAltas() {
    return axios.get(`${URL_API2}/obtenerAltas`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Función para obtener el contador de bajas
export function obtenerBajas() {
    return axios.get(`${URL_API2}/obtenerBajas`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}
