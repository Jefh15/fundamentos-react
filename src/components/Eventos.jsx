// rafce
import React from 'react'

const Eventos = () => {

    // anfn
    // funcion para poder hacer click
    const eventoClick = () => {
        console.log('Me diste un clic')
    }



    return (
        <div>
            <hr />
            <h2>Eventos</h2>
            {/* creo un boton */}
            <button
                // llamo mi evento clic con una funcion de tipo flecha
                onClick={() => eventoClick()}
            >Clickea</button>
        </div>
    )
}

export default Eventos