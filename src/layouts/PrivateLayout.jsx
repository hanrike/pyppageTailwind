import { Outlet } from "react-router-dom";
import React from 'react'
import Sidebar from "../components/Sidebar";


const PrivateLayout = () => {
  //Debo importar el oulet para que con el react router dom queden quemados los layouts con las rutas especificas en este caso index,
  //vehiculos y clientes
  return (
    //con esta clase divido el sidebar de todos los private layout de admin clientes y vehiculos con sus rutas funcionando
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <main className='flex w-full  overflow-y-scroll'>
        <Outlet/>
      </main>
    </div>
  )
}

export default PrivateLayout
