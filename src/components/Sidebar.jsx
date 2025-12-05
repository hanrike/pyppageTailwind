
import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import ImagenLogo from '../components/ImagenLogo'
import { Projector,ChartSpline,Users,User,ArrowDownNarrowWide } from 'lucide-react';



//si cambio al principio md por sm es para que se pueda ver el sidebar en tabletas cuando es md solo se ve en pantallas dse pec o mayor a 600px
const Sidebar = () => {
  return (
    
    <nav className='hidden sm:flex md:w-72 border border-gray-300 h-full flex flex-col  bg-gray-400 p-4 sidebar'>
    <Link to='/admin'>
      <ImagenLogo/>
    </Link>
    {/* queremos separar las rutas de la imagen y del cerrar sesion por eso vienen en el div */}
    <div className=''>
      <Ruta icono={<User/>} ruta='/admin/perfil'nombre='Perfil' />
      <Ruta icono={<Projector/>} ruta='/admin/vehiculos'nombre='vehiculos' />
      <Ruta icono={<ChartSpline/>} ruta='/admin/ventas'nombre='Ventas' />
      <Ruta icono={<Users/>} ruta='/admin/usuarios'nombre='Usuarios' />
    </div>
    <button>Cerrar Sesion </button>
    </nav>

  )
};

//voy a crear un componente para los botones del sidebar 
//le estoy pasando icono,ruta,nombre como props 
const Ruta = ({icono,ruta,nombre}) => {
  //todo lo que devuelven los hooks como estos son funciones o estados, en este caso este devuelve un objeto q es un estado
  const location=useLocation()
  const[isActive,setIsActive]=useState(false)

  useEffect(()=>{
    console.log(location,ruta)
    if(location.pathname===ruta){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  },[location,ruta])
  //useEffect para hacer prueba de consola de porque al profe no le esta funcionando
  useEffect(()=>{
    console.log(isActive,ruta)
  },[isActive,ruta])
  return(
    <Link to={ruta} className='w-full'>{/* Importando este link ya tengo navegabilidad en mi boton en este caso voy a daminiustracion de vehiculos */}
    < button 
    className={`p1 my-2 bg-${isActive ? 'indigo':'gray'}-700 hover:bg-indigo-900 flex w-full items-center justify-center gap-2 text-white rounded-md`}>{/* ponemos el stringliteral con el fin de poner una variable */}
    {/* CORRECTO: Renderizamos el componente directamente se renderiza directamente */}
        {icono} 
    {/* Renderizamos el nombre */}
      <span>{nombre}</span>
    </button>
    </Link>  
  )
}


export default Sidebar;
