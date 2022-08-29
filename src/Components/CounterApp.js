import React, {useState} from 'react';

const CounterApp = () => {
    const [counter, setCounter]=useState(0)
    const incrementCounter=()=>{
        //setCounter(counter+1)

        //¿por qué no mejoor hago esto?
        //counter++;
        //si se actualiza el valor, pero no genera una nueva renderización del componente y por lo tanto no se "actualiza" en el html
        
        //setCounter no es sincrona
        //si quisieramos actualizar o usar el set varias veces en el scope, o sea en el cuerpo de la función
        //tendriamos que hacer algo como esto
        setCounter(counter+1);
        setCounter(prevCounter=>prevCounter+1);
        //y se epueede hacer tantas veces como quieras
        // setCounter(prevCounter=>prevCounter+1);
        // setCounter(prevCounter=>prevCounter+1);
        // setCounter(prevCounter=>prevCounter+1);

    }
    const decrementar=()=>{
        setCounter(counter-1);
    }
    return (
        <div>
            <h1>Counter app</h1>
            <button onClick={incrementCounter}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <p>Clicks: {counter}</p>
        </div>
    );
}

export default CounterApp;
