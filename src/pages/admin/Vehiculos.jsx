import React from 'react'

const Vehiculos = () => {
  return (
    <form className='flex flex-col'>
      <h2>Formulario para creacion de vehiculos</h2>
      <input type='text' placeholder='Nombre vehiculo'/>
      <input type='text' placeholder='Marca Vehiculo'/>
      <input type='text' placeholder='Modelo vehiculo'/>
      <button className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
}

export default Vehiculos
