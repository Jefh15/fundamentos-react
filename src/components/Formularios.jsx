// rafce
import React from 'react'

const Formularios = () => {





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
                />
                {/* creo un boton */}
                <input
                    type="text"
                    placeholder='Ingrese Descripcion'
                    className='form-control mb-2'
                />
                {/* button.btn.btn-prymary.btn-block */}
                <button className="btn btn-primary btn-block">Agregar</button>
            </form>

        </div>
    )
}

export default Formularios