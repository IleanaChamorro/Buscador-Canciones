import React, { useState } from 'react';

const initialForm = {
    artista: "",
    cancion:"",
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
        if(!form.artista || !form.cancion){
            alert("Datos Incompletos");
            return;
        }
        //Si vienen con datos, pasa la informacion al componente padre y se actualiza el form a su valor inicial
        handleSearch(form);
        setForm(initialForm);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="artista" 
                placeholder="Nombre del interprete" 
                onChange={handleChange} 
                value={form.artista}
                />
                <input 
                type="text" 
                name="cancion" 
                placeholder="Nombre de la cancion" 
                onChange={handleChange}
                value={form.cancion}
                />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default CancionForm
