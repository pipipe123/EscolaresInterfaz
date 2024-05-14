import React from 'react';
import { useForm } from 'react-hook-form';
import { agregarAlumno } from '../api/compService.js';

function AgregarAlumno() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await agregarAlumno(data);
            alert('Alumno agregado exitosamente');
        } catch (error) {
            console.error('Error al agregar alumno:', error);
            alert('Error al agregar alumno');
        }
    };

    return (
        <div>
            <h2>Agregar Alumno</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Clave:</label>
                <input type="text" {...register('clave', { required: true, minLength: 18, maxLength: 18 })} placeholder="Clave (18 caracteres)" />
                {errors.clave && <span>La clave debe tener 18 caracteres</span>}

                <label>Matrícula:</label>
                <input type="text" {...register('matricula', { required: true })} placeholder="Matrícula" />
                {errors.matricula && <span>Este campo es requerido</span>}

                <label>Apellido Paterno:</label>
                <input type="text" {...register('paterno', { required: true })} placeholder="Apellido Paterno" />
                {errors.paterno && <span>Este campo es requerido</span>}

                <label>Apellido Materno:</label>
                <input type="text" {...register('materno')} placeholder="Apellido Materno" />

                <label>Nombre:</label>
                <input type="text" {...register('nombre', { required: true })} placeholder="Nombre" />
                {errors.nombre && <span>Este campo es requerido</span>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default AgregarAlumno;
