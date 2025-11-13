import { Outlet } from "react-router-dom";
import React from 'react'

const AuthLayout = () => {
  //Debo importar el outlet para que con el react router dom queden quemados los layouts con las rutas especificas en este caso registro
  // y login
  return (
    <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'>
      <main className='flex w-full'>
        <Outlet/>
      </main>
    </div>
  )
}

export default AuthLayout
