// rafce
import React, { useState } from 'react'

const ListasANDKeys = () => {

    // variable de array de objetos
    const estadoInicial = [
        { id: 1, texto: 'Tarea 1' },
        { id: 2, texto: 'Tarea 2' },
        { id: 3, texto: 'Tarea 3' },
    ]

    // un array
    const [lista, setLista] = useState(estadoInicial)



    return (
        <div>
            <hr />
            <h2>Listas y Keys</h2>
            {/* pintamos nuestro array */}
            {
                // recorremos la lista
                // map---> hace un mapeo o recorrido po cda uno de nuestros estados
                // item -> cada uno de nuestros elementos
                // index -> es nuestra key
                // .map((nombredelitem, index o key)
                lista.map((item, index) => (
                    // le ponemos la key a nuestro item
                    <h4 key={item.id}>{item.texto}</h4>
                ))
            }
        </div>
    )
}

export default ListasANDKeys