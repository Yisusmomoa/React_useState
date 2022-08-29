import React, {useState} from 'react';

const ConditionalApp = () => {
    const [condition, setCondition]=useState(true);
    const toggleState=(e)=>{
        e.preventDefault();
        setCondition(!condition);
    }
    return (
        <div>
            <button onClick={toggleState}>Toggle</button>

            {/* Mostrar un mensaje si es verdadero o falso */}
            <h1>ConditionalApp</h1>
            {
                condition ? <h1>Verdadero</h1>:<h1>Falso</h1>
            }

            {/* Mostrar un elemento/mensaje unicamente cuando este en true */}
            {
                condition && <h1>En efecto es verdadero</h1>
            }

            {/* Imprimir el valor del state */}
            <h1>State value is: {condition.toString()}</h1>
        </div>
    );
}

export default ConditionalApp;
