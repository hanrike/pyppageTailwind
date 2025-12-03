
import React from 'react'
import { Link } from 'react-router-dom';
import ImagenLogo from '../components/ImagenLogo'
import { Projector } from 'lucide-react';



const Sidebar = () => {
  return (
  <nav className='w-72 border border-gray-300 h-full flex flex-col  bg-gray-400 p-4'>
    <Link to='/admin'>
      <ImagenLogo/>
    </Link>
    <button>Perfil</button>
      <Ruta/> {/* pongo la ruta aqui con el componente que cree llamado tuta  */}
      <Ruta/>
      <Ruta/>
    <button>Admnistracion de Vehiculos</button>
    <button>Admnistracion de Vehiculos</button>
    <button>Cerrar Sesion </button>
  </nav>
  )
};

//voy a crear un componente para los botones del sidebar 
const Ruta = () => {
  return(
    <Link to='/admin/vehiculos'>{/* Importando este link ya tengo navegabilidad en mi boton en este caso voy a daminiustracion de vehiculos */}
    < button className='p1 bg-indigo-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md'>
    <Projector size={20} className="text-white w-10" />
      Vehiculos
    </button>
    </Link>
  )
}


export default Sidebar;
