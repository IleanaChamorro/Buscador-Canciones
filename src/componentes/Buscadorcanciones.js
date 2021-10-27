import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHttp';
import Loader from './Loader';
import CancionDetalles from './CancionDetalles';
import CancionForm from './CancionForm';

const Buscadorcanciones = () => {
    const [buscador, setBuscador] = useState(null);
    const [lyric, setlyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [cargador, setCargador] = useState(false);

    useEffect(() => {
        //Mientras empieza la busqueda, se sale del renderizado
        if(buscador === null) return;

        const fetchData = async () => {
            //Destructuracion propiedades de buscador
            const {artist, song} = buscador;
         
            //Obtencion Informacion de artist y song
            let artistUrl =  `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        
            //console.log(artistUrl, songUrl);

            //Loader espera a respuesta peticion 
            setCargador(true);

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);

            //console.log(artistRes, songRes);
            
            setBio(artistRes);
            setlyric(songRes);
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
            <h2>¡Busca una canción!</h2>
            <article className="grid-1-3">
            {/*Solo se muestra cuando su valor cambia a true */}
            {cargador && <Loader/>}
            <CancionForm handleSearch={handleSearch}/>
            {/*Mientras Search tenga datos no debe mostrarse y Loading este en falso, renderiza los detalles de la song*/}
            {buscador && !cargador && (
            <CancionDetalles
            buscador={buscador}
            lyric={lyric}
            bio={bio}
            />
            )}
            </article>
        </div>
    )
}

export default Buscadorcanciones
