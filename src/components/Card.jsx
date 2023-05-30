import React, { useState } from 'react'

const Card = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
  return (
    <div className='app'>
        <h1>Soy Una Tarjeta</h1>
        <form style={}>
            <label>Nombre:</label>
            <input 
                type="text" 
                name='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label>Apellido:</label>
            <input 
                type="text" 
                name='apellido'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Card