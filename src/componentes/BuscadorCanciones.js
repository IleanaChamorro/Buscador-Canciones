import React, { useState, useEffect } from 'react';
import CancionDetalles from './CancionDetalles';
import CancionForm from './CancionForm';
import Loader from './Loader';

const BuscadorCanciones = () => {
    const [buscador, setBuscador] = useState(null);
    const [letra, setLetra] = useState(null);
    const [bio, setBio] = useState(null);
    const [cargador, setCargador] = useState(false);

    //Manejador evento submit form

    const handleSearch = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h2>Buscador canciones</h2>
            {/*Solo se muestra cuando su valor cambia a true */}
            {cargador && <Loader/>}
            <CancionForm handleSearch={handleSearch}/>
            {/*Envio Datos Cancion */}
            <CancionDetalles
            buscador={buscador}
            letra={letra}
            bio={bio}
            />
        </div>
    )
}

export default BuscadorCanciones
