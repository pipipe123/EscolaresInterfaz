import React from 'react';
import { useForm } from 'react-hook-form';
import { modificarAlumno } from '../api/compService';

function ModificarAlumno({ alumno }) { // Recibe el objeto alumno y la clave como prop
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const {  clave, matricula, paterno, materno, nombre} = alumno; // Desestructura el objeto alumno para acceder a sus atributos

    const onSubmit = async (data) => {
        // Aquí puedes enviar los datos del formulario al servidor o realizar cualquier otra acción necesaria
        const res = await modificarAlumno({ clave, ...data }); // Añade la clave al objeto de datos
        console.log(res)
    };

    return (
        <div>
            <h3>Modificar Alumno</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre:</label>
                <input {...register("nuevoNombre", { required: true })} defaultValue={nombre} />
                {errors.nombre && <span>El nombre es requerido</span>}

                <label>Matrícula:</label>
                <input {...register("nuevaMatricula", { required: true })} defaultValue={matricula} />
                {errors.matricula && <span>La matrícula es requerida</span>}

                <label>Apellido Paterno:</label>
                <input {...register("nuevoPaterno", { required: true })} defaultValue={paterno} />
                {errors.paterno && <span>El apellido paterno es requerido</span>}

                <label>Apellido Materno:</label>
                <input {...register("nuevoMaterno")} defaultValue={materno} />

                <button type="submit">Confirmar</button>
            </form>
            <p>Clave: {clave}</p>
        </div>
    );
}

export default ModificarAlumno;
