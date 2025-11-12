import React from 'react'
import PublicLayout from './layouts/PublicLayout';
import Admin from './pages/Admin';
import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './styles/styles.css'

function App() {
  return (
    //para eso instalñamos el browser router
    <Router>
      <Routes>
        {/**Esta es la manera de hacer las rutas para pasar a traves de las diferentes paginas es el enrutamiento*/} 
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </Router>
    
      
    
  )
}

export default App;
