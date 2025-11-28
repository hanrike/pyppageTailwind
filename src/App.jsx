
import React, {useState,useEffect} from 'react'
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';
import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Clientes from "./pages/admin/Index";
import Vehiculos from './pages/admin/Vehiculos';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './styles/styles.css'
import { DarkModeContext } from './context/darkMode';
//importamos para poder usar los context de react


function App() {
  const [darkMode,setDarkMode]=useState(false);
  useEffect(()=>{
    console.log('modo Dark',darkMode)
  },[darkMode])//cada vez que se modifique darkMode se mostrara en la consola
  return (
    //Esto nos permite utilizar las variables en cualquier parte de la aplicacion con el fin de cambiar funcionalidades globaes como modo oscuro cambio de color general etc
    //como ejemplo se pondra el stado dark o uscuro en el navbar para realizar pruebas en consola empieza en false y en consola f12 se cambia a true
    <DarkModeContext.Provider value={{darkMode,setDarkMode}}> {/**Para el context se pone el provider el estado que quiero que se transmita en toda la aplicacion  */}
    {/**para eso instalamos el browser router */} 
     <Router>
      <Routes>
        {/**Esta es la manera de hacer las rutas para pasar a traves de las diferentes paginas es el enrutamiento*/} 
        {/**PublicLayout contiene solo el index */} 
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
        {/**PrivateLayout contiene admin general que es el index el admin vehiculos y el admin clientes */} 
        <Route element={<PrivateLayout />}> 
          <Route path='/admin' element={<Index />} /> 
          <Route path='/admin/vehiculos' element={<Vehiculos />} />   
          <Route path='/admin/clientes' element={<Clientes />} />         
        </Route>
        {/**AuthLayout contiene el login y el registro */} 
        <Route element={<AuthLayout />}>         
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
   </DarkModeContext.Provider>
    
  )
}

export default App;
