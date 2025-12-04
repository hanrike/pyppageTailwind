import React, { useState } from 'react'
// 1. Importa los dos iconos que necesitas
import { ArrowDownNarrowWide,OctagonX } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
    //creamos un estado para mostrar la navegacion y utilizamos condicio0nales 
    const[mostrarNavegacion,setMostrarNavegacion]=useState(false)
  return (
      <div 
        className="sm:hidden cursor-pointer p-2 hoover:text-yellow-600" // hover va aquí en el contenedor o en el icono si cambio al principio md por sm es para 
                                                                        //que se pueda ver el sidebar en tabletas cuando es md solo se ve en pantallas dse pec o mayor a 600px
        onClick={()=>{
            setMostrarNavegacion(!mostrarNavegacion)
        }}
        > {/**creando enta clase md:hidden logro que no aparezcan el sidebar y el burguer a la vez */}    
        {/* 2. Renderizado condicional: Si mostrarNavegacion es true, muestra X, si no, la flecha/hamburguesa */}   
        {mostrarNavegacion ? (
            <OctagonX size={30} />
        ):(
            <ArrowDownNarrowWide size={30}/>
        )}
        {mostrarNavegacion && 
        <ul className='bg-gray-900'>
          <ResponsiveRoute nombre='Vehiculos' ruta='/admin/vehiculos'/>
          <ResponsiveRoute nombre='Ventas' ruta='/admin/ventas'/>
          <ResponsiveRoute nombre='Usuarios' ruta='/admin/usuarios'/>
        </ul>}
    </div>    
  )
}
  const ResponsiveRoute = ({ruta,nombre}) => {
    return(
    <Link to={ruta}>
    <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
    </Link>
    )
  }
  


export default SidebarResponsive
