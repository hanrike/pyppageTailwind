import React, { useState } from 'react'
// 1. Importa los dos iconos que necesitas
import { ArrowDownNarrowWide,OctagonX } from 'lucide-react';

const SidebarResponsive = () => {
    //creamos un estado para mostrar la navegacion y utilizamos condicio0nales 
    const[mostrarNavegacion,setMostrarNavegacion]=useState(false)
  return (
      <div 
        className="md:hidden cursor-pointer p-2 hoover:text-yellow-600" // hover va aquí en el contenedor o en el icono
        onClick={()=>{
            setMostrarNavegacion(!mostrarNavegacion)
        }}
        > {/**creando enta clase md:hidden logro que no aparezcan el sidebar y el burguer a la vez */}    
        {/* 2. Renderizado condicional: Si mostrarNavegacion es true, muestra X, si no, la flecha/hamburguesa */}   
        {mostrarNavegacion ? (
            <OctagonX size={30}/>
        ):(
            <ArrowDownNarrowWide size={30}/>
        )}
        {mostrarNavegacion && 
        <ul>
            <li>usuarios</li>
            <li>graficos</li>
            <li>estadisticas</li>
        </ul>}
    </div>    
  )
}

export default SidebarResponsive
