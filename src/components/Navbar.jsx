
import React from 'react';
import { Link } from 'react-router-dom';
// el import link es para que el boton cuando se le hace click me lleve a la pagina de login
const Navbar = () => {
  return (
    <nav className='bg-red-400'>
      <ul className='flex  w-full justify-between my-3'>
        <li>Logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>Navegacion3</li>
        <li className='px-3'>
          {/**el import link es para que el boton cuando se le hace click ainiciar sesion me lleve a la pagina de login */}
          <Link to='/login'>
          <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
            Iniciar Sesion
          </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
