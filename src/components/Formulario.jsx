import React from 'react'
import Card from './Card'
import { useState } from 'react'
import '../app.css'

const Formulario = (props) => {

    const [nombre, setNombre] = useState('')
    const [animal, setAnimal] = useState('')
    const [error, setError] = useState(false)
    const [show, setShow] = useState(false)

    const onChangeNombre = e => {
        setNombre(e.target.value)
    }

    const onChangeAnimal = e => {
        setAnimal(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(nombre.length > 3 && animal.length > 6) {
            setShow(true)
            setError(false)
        }else {
            setError(true)
            setShow(false)
        }

        
    }


    
    return (
    <div>
        <form onSubmit={handleSubmit} className='form' > 
            <label htmlFor="nombre">Nombre:</label>
            <input 
                type="text" 
                name='nombre'
                disabled={show}
                id='nombre'
                placeholder='ingrese su nombre'
                value={nombre}
                onChange={onChangeNombre}
                
            />
            <label htmlFor="animal">Animal Favorito:</label>
            <input 
                type="text" 
                name='animal'
                disabled={show}
                id='animal'
                placeholder='ingrese su animal favorito'
                value={animal}
                onChange={onChangeAnimal}
                
            />
            <button className='button'>Enviar</button>

            {error && 'Por favor chequea que la información sea correcta'}
        </form>

        {show ? <Card nombre={nombre} animal={animal} /> : null}

    </div>
    )
}

export default Formulario