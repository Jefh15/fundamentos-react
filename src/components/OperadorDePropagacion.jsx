// rafce
import React, { useState } from 'react'

const OperadorDePropagacion = () => {

    // OPERADOR DE PROPAGACION ES (...PROPIEDAD)

    // Array de String
    // const arrayUno = ['Chile', 'Argentina']
    // Array de String
    // const arrayDos = ['Cambolla', 'Bolivia']


    // Unir los array Uno y Dos
    // aqui uso proppagacion
    // const Unidos = [...arrayUno, ...arrayDos]
    // console.log(Unidos)

    // variable de array de objetos
    const estadoInicial = [
        { id: 1, texto: 'Tarea 1' },
        { id: 2, texto: 'Tarea 2' },
        { id: 3, texto: 'Tarea 3' },
    ]

    // un array
    const [lista, setLista] = useState(estadoInicial)


    // me croe la funcion
    const agregarElemento = () => {
        // console.log('clic');
        // NOTA: SI OCUPAMOS AGREGAR UN ELEMENTO A UN ARRAY
        // TOMAMOS UNA COPIA Y LE AGREGAMOS EL ELEMENTO ASI
        // ...VARIABLE, ELEMENTO A AGREGAR
        setLista(
            // como es un array lo que estoy usando uso array
            [
                // ...lista ---> para que no se borren los eleentos cuando agrego el nuevo elemento
                ...lista,
                // le agrego este elemento
                { id: 4, texto: 'Tarea 4' },
            ]
        )
    }


    return (
        <div>
            <hr />
            <h2>(Operador De Propagacion) Y Listas y Keys</h2>
            {/* pintamos nuestro array */}
            {
                // recorremos la lista
                // map---> hace un mapeo o recorrido po cda uno de nuestros estados
                // item -> cada uno de nuestros elementos
                // index -> es nuestra key
                // .map((nombredelitem, index o key)
                lista.map((item, index) => (
                    // le ponemos la key a nuestro item
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            {/* Creo un boton */}
            <button
                onClick={() => agregarElemento()}
            >Agregar</button>
        </div>
    )
}

export default OperadorDePropagacion