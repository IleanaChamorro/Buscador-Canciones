const CancionLetra = ({title, lyrics}) => {
    return (
        <section className="form-lyrics">
            <h3>{title}</h3>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
        </section>
    )
}

export default CancionLetra
