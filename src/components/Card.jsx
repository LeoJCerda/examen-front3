import React, { useState } from 'react'
import '../App.css'

const Card = (props) => {
    
  return (
    <div className='card'>
      <h1>Gracias { props.nombre } !</h1>
      <h2>su animal favorito es {props.animal}</h2>
    </div>
  )
}

export default Card