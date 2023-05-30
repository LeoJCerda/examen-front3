import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  

  return (
    <>
      <div className='app'>
        <h1>Carga de Estudiantes</h1>
        <form>
          <label>Nombre:</label>
          <input 
            type="text"
            name='nombre'
            value={nombre}
            onChange = setNombre() 
                 
          />
        </form>
        <Card/>
      </div>
      
    </>
  )
}

export default App
