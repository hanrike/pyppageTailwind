import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import pyp from '../media/pyp.png'


// Asume que tienes tu logo importado o una url
// import logo from '../assets/logo.png'; 

const AuthLayout = () => {
  return (
    // Contenedor principal: centra todo el contenido vertical y horizontalmente
    // bg-gray-50 da ese fondo gris claro suave
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      
      {/* Icono de Home flotando o en la esquina (opcional según tu diseño) */}
      <div className="absolute top-5 left-5">
        <Link to='/'>
          <i className="fas fa-home text-2xl text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"/>
        </Link>
      </div>

      {/* Contenedor de la tarjeta central */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        
        {/* Sección del Logo y Título */}
        <div className="text-center">
            {/* Reemplaza src con tu variable de imagen real */}
            <img 
              className="mx-auto h-24 w-auto" 
              src={pyp} 
              alt="Logo Empresa" 
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Concesionario Multimarca
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              El mejor de la ciudad
            </p>
        </div>

        {/* Aquí se renderizan Login o Registro según la ruta */}
        <Outlet />
        
      </div>
    </div>
  );
}

export default AuthLayout;
