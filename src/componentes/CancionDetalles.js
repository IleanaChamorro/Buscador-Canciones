import CancionArtista from "./CancionArtista"
import CancionLetra from "./CancionLetra"
import Mensaje from "./Mensaje"

const CancionDetalles = ({buscador, lyric, bio}) => {
    //Mientras lyric o bio no traigan datos, retorna nulo
    if(!lyric || !bio) return null;
    return (
        <>
            {/*Manejo de errores en caso de no existir la song */}
            {lyric.error || lyric.err || lyric.name === "AbortError" ? (
            <Mensaje 
            msg={`Error no existe la canción ${buscador.song}`} 
            bgColor="#dc3545"
            /> 
            ):( 
            <CancionLetra title={buscador.song} lyrics={lyric.lyrics}/>
            )}
            {bio.artists ? (
            <CancionArtista artist={bio.artists[0]}/>
            ):( 
            <Mensaje
            msg={`Error no existe el interprete ${buscador.artist}`} 
            bgColor="#dc3545"
            />
            )}
        </>
    );
};

export default CancionDetalles
