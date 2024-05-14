import React from 'react';
import ContadorAltas from '../components/contadorAltas';
import ContadorBajas from '../components/contadorBajas';
import ListarAlumnos from '../components/listarAlumnos';
import ContadorAlumnos from '../components/totalAlumnos';
import '../css/contadores.css'
function HomeScreen() {
    return (
        <div className="header">
            <h1 className="title">EscolaresMX</h1>
            <table >
                <td className='contadores' id="contador_alumnos"><ContadorAlumnos/></td>
                <td className='contadores'><ContadorAltas/></td>
                <td className='contadores'><ContadorBajas/></td>
            </table>
        <ListarAlumnos/>
        </div>
    );
}

export default HomeScreen;
