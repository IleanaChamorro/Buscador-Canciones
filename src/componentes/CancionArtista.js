const CancionArtista = ({artist}) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
            <p>Nacimiento: {artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>Pais de Nacimiento: {artist.strCountry}</p>
            <p>Género: {artist.strGenre} - {artist.strStyle}</p>
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Sitio web Oficial</a>
            <p>{artist.strBiographyEN}</p>
        </section>
    )
}

export default CancionArtista
