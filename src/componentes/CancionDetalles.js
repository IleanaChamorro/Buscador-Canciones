import CancionArtista from "./CancionArtista"
import CancionLetra from "./CancionLetra"
import Mensaje from "./Mensaje"

const CancionDetalles = ({buscador, letra, bio}) => {
    //Mientras letra o bio no traigan datos, retorna nulo
    if(!letra || !bio) return null;
    return (
        <>
            {/*Manejo de errores en caso de no existir la cancion */}
            {letra.error || letra.err || letra.name === "AbortError" ? (
            <Mensaje 
            msg={`Error: no existe la cancion ${buscador.song}`}
            bgColor="#dc3545"
            /> 
            ):( 
                <CancionLetra/>
            )}
            {bio.artists ? (
                <CancionArtista/>
            ) : (
            <Mensaje
                msg={`Error: no existe el artista ${buscador.artists}`}
                bgColor="#dc3545"
                />
            )}
        </>
    );
};

export default CancionDetalles
