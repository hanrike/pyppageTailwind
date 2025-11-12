import { Outlet } from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//aqui van a estar los layout de toda la pagina
const PublicLayout = () => {
  {/**Lo primero que requiero es definir los componenetes que voy a tener y necesitamos */}
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex-grow bg-blue-400'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default PublicLayout;

