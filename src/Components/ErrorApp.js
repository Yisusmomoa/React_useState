import React, {useState} from 'react';


//el usestate también lo puedo usar para almacenar errores,
//y mmostrar diferentes mensajes dependiendo de la respuesta de la api 
const ErrorApp = () => {
    const [error, setError]=useState("");
    return (
        <div>
            <button onClick={()=>setError("Error con la api")}>
                Error
            </button>
            <button onClick={()=>setError("Error inesperado")}>
                Another Error
            </button>
            <button onClick={()=>setError("")}>
                Proceso exitoso
            </button>
            <h1>Error app</h1>
            {error && <h1>{error}</h1>}
        </div>
    );
}

export default ErrorApp;
