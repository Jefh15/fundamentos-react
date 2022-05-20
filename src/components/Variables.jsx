// rafce
import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const imagen = 'https://image.shutterstock.com/image-illustration/2d-illustration-business-network-concept-600w-1727365897.jpg'


    return (
        <div>
            {/* Esto es JSX {} */}
            <h2>Nuevo Componente: {saludo}</h2>
            <img src={imagen} alt="imagen" />
        </div>
    )
}

export default Variables