import React, { useState, useEffect } from 'react';
import { obtenerAltas } from '../api/compService.js';

function ContadorAltas() {
    const [cantidadAltas, setCantidadAltas] = useState(0);

    useEffect(() => {
        obtenerAltas()
            .then(response => {
                // Suponiendo que la respuesta es de la forma { altas: 4 }
                const altas = response.altas; // Extraer el valor de altas del objeto response
                setCantidadAltas(altas);
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de altas:', error);
            });
    }, []);

    return (
        <div>
            <h2>Cantidad de Altas: {cantidadAltas}</h2>
        </div>
    );
}

export default ContadorAltas;
