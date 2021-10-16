import CancionArtista from "./CancionArtista"
import CancionLetra from "./CancionLetra"

const CancionDetalles = ({buscador, letra, bio}) => {
    return (
        <div>
            <h2>Detalles</h2>
            <CancionArtista/>
            <CancionLetra/>
        </div>
    )
}

export default CancionDetalles
