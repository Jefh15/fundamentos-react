// rafce
import React, { Fragment } from 'react'

const Eventos = () => {

    // anfn
    // funcion para poder hacer click
    const eventoClick = () => {
        console.log('Me diste un clic')
    }



    return (
        // Esto es un fragment para poder meter mas de un componente <Fragment></Fragment>
        <Fragment>
            <hr />
            <h2>Eventos</h2>
            {/* creo un boton */}
            <button
                // llamo mi evento clic con una funcion de tipo flecha
                onClick={() => eventoClick()}
            >Clickea</button>
        </Fragment>
    )
}

export default Eventos