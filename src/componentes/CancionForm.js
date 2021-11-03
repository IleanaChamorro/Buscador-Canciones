import React, { useState } from 'react';

const initialForm = {
    artist: "",
    song:"",
}  

const CancionForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        //Actualiza el formulario
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        //Prevencion envio de form
        e.preventDefault();

        //En caso de que los forms esten vacios se envia una alerta al usuario
        if(!form.artist || !form.song){
            alert("Datos Incompletos");
            return;
        }
        //Si vienen con datos, pasa la informacion al componente padre y se actualiza el form a su valor inicial
        handleSearch(form);
        setForm(initialForm);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="formgroup">
                    <label for="artist" className="form-label">Nombre del interprete</label>
                <input 
                className="form-control"
                type="text" 
                name="artist" 
                placeholder="Nirvana" 
                onChange={handleChange} 
                value={form.artist}
                />
                <label for="artist" className="form-label">Nombre de la Canción</label>
                <input
                className="form-control"
                type="text" 
                name="song" 
                placeholder="The man who sold the world" 
                onChange={handleChange}
                value={form.song}
                />
                <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default CancionForm
