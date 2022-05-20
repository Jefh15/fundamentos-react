import React, { useState } from 'react'

const Contador = () => {

    //useState
    // me creo un hook se estado
    // texto ---> estado que va a contener nuestro estado
    // setTexto --> estado que va a modificar ese estado en cuestion
    // useState() ---> entre los () va el valor que queremos que tenga po defecto
    const [contador, setContador] = useState(0);


    //Funcion para aumentar contador 
    const aumentarContador = () => {
        // le sumo 1
        setContador(contador + 1)
    }

    // Funcion para restar contador
    const restarContador = () => {
        if (contador === 0) {
            console.log('Ya estas en 0');
        } else {
            // le resto 1
            setContador(contador - 1)
        }
    }

    // Funcion para restar contador
    const resetearContador = () => {
        // reseteo el contador a 0
        setContador(0)
    }


    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero aumentando: {contador}</h3>
            {/* Creo el boton */}
            <button
                onClick={() => aumentarContador()}
            >
                Aumentar +
            </button>
            {/* Creo el boton */}
            <button
                onClick={() => restarContador()}
            >
                Restar -
            </button>
            {/* Creo el boton */}
            <button
                onClick={() => resetearContador()}
            >
                Resetear contador
            </button>
        </div>
    )
}

export default Contador