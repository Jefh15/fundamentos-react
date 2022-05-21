// rafce
import React, { useState } from 'react'

const Formularios = () => {

    // EStado de fruta
    const [fruta, setFruta] = useState('')
    // EStado de descripcion
    const [descripcion, setDescripcion] = useState('')

    // estado que va a aser un array
    const [lista, setLista] = useState([])


    // funcion para poder guardar los datos de mi formulario
    // recibe un evento (e) como parametro en la funciond de flecha
    const guardarDatosFormulario = (e) => {
        // evito que haga por defecto
        e.preventDefault()


        // Verifico si los campos estan vacios

        // verifico los datos
        // fruta.trim() ----> limpia los datos
        if (!fruta.trim()) {
            console.log('Esta vacio el campo fruta')
            // cuando lea el return sale del if
            return
        }

        // verifico los datos
        // fruta.trim() ----> limpia los datos
        if (!descripcion.trim()) {
            console.log('Esta vacio el campo descripcion')
            // cuando lea el return sale del if
            return
        }

        // Si todo esta ok
        // procesar los datos
        console.log('Procesando datos... ' + fruta + " " + descripcion)
        setLista(
            // Como toma un array toma corchetes
            [
                // por si ya existe un elemento para que no lo borre
                // uso OPERADOR DE PROPAGACION
                ...lista,
                // { nombrePropiedad: VALOR-PROPIEDAD, nombrePropiedad: VALOR-PROPIEDAD}
                { nombreFruta: fruta, nombreDescripcion: descripcion }
            ]
        )


        // limpio los campos despues de dar clic al boton y que los datos esten bien
        e.target.reset()
        // limpio los estados para que sea un string vacio
        setFruta('')
        // limpio los estados para que sea un string vacio
        setDescripcion('')

    }



    return (
        <div>
            <hr />
            <h2>FORMULARIOS</h2>
            {/*  */}
            <form
                // evento que recibe una funcion
                onSubmit={guardarDatosFormulario}
            >
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
                <button
                    className="btn btn-primary btn-block"
                    // type='submit' ---> para que cada vez que se estripe la tecla enter se vaya a procesar los datos
                    type='submit'
                >Agregar</button>
            </form>

            {/* recorremos el formulario del array lista */}
            <hr />
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            Fruta: {item.nombreFruta} - Descripcion: {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Formularios