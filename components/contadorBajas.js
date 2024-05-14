import React, { useState, useEffect } from 'react';
import { obtenerBajas } from '../api/compService.js';

function ContadorBajas() {
    const [cantidadBajas, setCantidadBajas] = useState(0);

    useEffect(() => {
        obtenerBajas()
            .then(response => {
                // Suponiendo que la respuesta es de la forma { bajas: 2 }
                const bajas = response.bajas; // Extraer el valor de bajas del objeto response
                setCantidadBajas(bajas);
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de bajas:', error);
            });
    }, []);

    return (
        <div>
            <h2>Cantidad de Bajas: {cantidadBajas}</h2>
        </div>
    );
}

export default ContadorBajas;
