export const helpHttp = () => {
    //Peticion fetch
    const fetchPet = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        //Manejador de Errores
        const controller = new AbortController();
        options.signal = controller.signal;

        //Si el usuario en opciones trae metodo, dejar metodo. En caso de no traer nada queda por default GET
        options.method = options.method || "GET";

        //Si el usuario especifico las cabeceras de esta peticion, se crea un nuevo objeto que mezcla cabeceras por defecto mas las del usuario, cuando no indica "DEFAULT"
        options.headers = options.headers
        ? {...defaultHeader, ...options.headers} 
        :  defaultHeader;

        //Peticiones con datos(Conversion objeto a cadena)
        options.body = JSON.stringify(options.body) || false;
        //Cuando el body tenga el valor de falso lo elimina
        if(!options.body) delete options.body;

        //Si despues de 3seg no hay respuesta por parte del servidor, se cancela la peticion 
        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
        .then((res) => 
        res.ok
            ? res.json()
            : Promise.reject({
                err:true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrio un error",
            })
        )
        .catch((err) => err);
    };

    //metodo get
    const get = (url, options = {}) => fetchPet(url, options);

    //Peticiones

    const post = (url, options) => {
        options.method = "POST";
        return fetchPet(url, options)
    };

    const put = (url, options = {}) => {
        options.method = "PUT";
        return fetchPet(url, options);
    };  

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return fetchPet(url, options);
    };

    return{
        get,
        post,
        put,
        del,
    };
}