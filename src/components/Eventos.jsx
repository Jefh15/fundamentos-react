// rafce
import React, { Fragment, useState } from 'react'

const Eventos = () => {

    // me creo un hook se estado
    // texto ---> estado que va a contener nuestro string mi nombre de estado
    // setTexto --> estado que va a modificar ese texto en cuestion
    // useState() ---> entre los () va el valor que queremos que tenga po defecto
    const [texto, setTexto] = useState('Texto desde estado')

    // anfn
    // funcion para poder hacer click
    const eventoClick = () => {
        console.log('Me diste un clic')
        // Cambio el texto con el setText
        setTexto('cambiando el texto....')
    }



    return (
        // Esto es un fragment para poder meter mas de un componente <Fragment></Fragment>
        <Fragment>
            <hr />
            <h2>{texto}</h2>
            {/* creo un boton */}
            <button
                // llamo mi evento clic con una funcion de tipo flecha
                onClick={() => eventoClick()}
            >Clickea</button>
        </Fragment>
    )
}

export default Eventos