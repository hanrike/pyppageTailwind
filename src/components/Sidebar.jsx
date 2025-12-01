
import React from 'react'
import ImagenLogo from '../components/ImagenLogo'


const Sidebar = () => {
  return (
  <nav className='w-72 border border-gray-300 h-full flex flex-col  bg-gray-400'>
    <ImagenLogo/>
    <button>Perfil</button>
    <button>Admnistracion de Vehiculos</button>
    <button>Admnistracion de Vehiculos</button>
    <button>Admnistracion de Vehiculos</button>
    <button>Cerrar Sesion </button>
  </nav>
  )
};

export default Sidebar;
