import { useDarkMode } from '../context/darkMode'
import React from 'react'

//Aqui viene el contenido principal de mi aplicacion el que todos los usuarios ven
const Index = () => {
  const {darkMode}=useDarkMode()
  return (
    //para modificar las clases utlizamos el string literal y asi podemos hacer ciclof if u otros 
    //{/**utilizamos el string literal y hacemos si es darkMode el valor es 900 si no 50   */}
    <div className={`flex min-h-screen bg-gray-${darkMode ? "900" : "50"} ${darkMode ? "text-white":"text-black"}`}> 
      Contenido landing concesionario
    </div>
  )
}

export default Index
