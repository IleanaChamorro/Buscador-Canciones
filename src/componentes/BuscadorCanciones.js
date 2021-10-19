import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHttp';
import CancionDetalles from './CancionDetalles';
import CancionForm from './CancionForm';
import Loader from './Loader';

const BuscadorCanciones = () => {
    const [buscador, setBuscador] = useState(null);
    const [letra, setLetra] = useState(null);
    const [bio, setBio] = useState(null);
    const [cargador, setCargador] = useState(false);

    useEffect(() => {
        //Mientras empieza la busqueda, se sale del renderizado
        if(buscador === null) return;

        const fetchData = async () => {
            //Destructuracion propiedades de buscador
            const {artista, cancion} = buscador;
         
            //Obtencion Informacion de Artista y Cancion
            let artistaUrl =  `theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
            let cancionUrl = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        
            console.log(artistaUrl, cancionUrl);

            //Loader espera a respuesta peticion 
            setCargador(true);

            const [artistaRes, cancionRes] = await Promise.all([
                helpHttp().get(artistaUrl),
                helpHttp().get(cancionUrl),
            ]);

            console.log(artistaRes, cancionRes);

            setBio(artistaRes);
            setLetra(cancionRes);
            setCargador(false);
        };
        fetchData();
    }, [buscador]);
    
    
    //Manejador evento submit form
    const handleSearch = (data) => {
        //console.log(data);
        setBuscador(data);
    };
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
