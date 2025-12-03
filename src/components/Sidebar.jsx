
import React from 'react'
import { Link } from 'react-router-dom';
import ImagenLogo from '../components/ImagenLogo'
import { Projector,ChartSpline,Users,User } from 'lucide-react';



const Sidebar = () => {
  return (
  <nav className='w-72 border border-gray-300 h-full flex flex-col  bg-gray-400 p-4'>
    <Link to='/admin'>
      <ImagenLogo/>
    </Link>
      <Ruta icono={<User/>} ruta='/admin/perfil'nombre='Perfil' />
      <Ruta icono={<Projector/>} ruta='/admin/vehiculos'nombre='vehiculos' />
      <Ruta icono={<ChartSpline/>} ruta='/admin/ventas'nombre='Ventas' />
      <Ruta icono={<Users/>} ruta='/admin/usuarios'nombre='Usuarios' />
    <button>Cerrar Sesion </button>
  </nav>
  )
};

//voy a crear un componente para los botones del sidebar 
//le estoy pasando icono,ruta,nombre como props 
const Ruta = ({icono,ruta,nombre}) => {
  return(
    <Link to={ruta} className='w-full'>{/* Importando este link ya tengo navegabilidad en mi boton en este caso voy a daminiustracion de vehiculos */}
    < button className='p1 my-2 bg-indigo-700 hover:bg-indigo-900 flex w-full items-center justify-center gap-2 text-white rounded-md'>
    {/* CORRECTO: Renderizamos el componente directamente se renderiza directamente */}
        {icono} 
    {/* Renderizamos el nombre */}
      <span>{nombre}</span>
    </button>
    </Link>  
  )
}


export default Sidebar;
