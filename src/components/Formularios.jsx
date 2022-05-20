// rafce
import React, { useState } from 'react'

const Formularios = () => {

    // EStado de fruta
    const [fruta, setFruta] = useState('')
    // EStado de descripcion
    const [descripcion, setDescripcion] = useState('')



    return (
        <div>
            <hr />
            <h2>FORMULARIOS</h2>
            {/*  */}
            <form>
                {/* creo un boton */}
                <input
                    type="text"
                    placeholder='Ingrese Fruta'
                    className='form-control mb-2'
                    // e.target.value --> detecta lo que el usuario escribio en el input
                    onChange={(e) => setFruta(e.target.value)}
                />
                {/* creo un boton */}
                <input
                    type="text"
                    placeholder='Ingrese Descripcion'
                    className='form-control mb-2'
                    // e.target.value --> detecta lo que el usuario escribio en el input
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                {/* button.btn.btn-prymary.btn-block */}
                <button className="btn btn-primary btn-block">Agregar</button>
            </form>

        </div>
    )
}

export default Formularios