import { Outlet } from "react-router-dom";
import React from 'react'

const AuthLayout = () => {
  //Debo importar el outlet para que con el react router dom queden quemados los layouts con las rutas especificas en este caso registro
  // y login
  return (
    <main className='flex-grow bg-blue-400'>
      <Outlet/>
    </main>
  )
}

export default AuthLayout
