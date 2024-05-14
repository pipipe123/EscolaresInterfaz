import React, { useState, useEffect } from 'react';
import { totalAlumnos } from '../api/compService.js';

function ContadorAlumnos() {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        totalAlumnos()
            .then(total => {
                setTotal(total);
            })
            .catch(error => {
                console.error('Error al obtener el total de alumnos:', error);
            });
    }, []);

    return (
        <div >
            <h2>Total de Alumnos: {total}</h2>
        </div>
    );
}

export default ContadorAlumnos;
