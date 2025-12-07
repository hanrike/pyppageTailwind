import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

//La ventaja de los hooks persomnnlizados es que se pueden utilizar codigos de javascsript normales
//a este useActiveRoute se le debe pasar la ruta como parametro
const useActiveRoute = (ruta) => {
  //todo lo que devuelven los hooks como estos son funciones o estados, en este caso este devuelve un objeto q es un estado
  const location=useLocation()
  const[isActive,setIsActive]=useState(false)

  useEffect(()=>{
    if(location.pathname.includes(ruta)){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  },[location,ruta])

  return isActive
}

export default useActiveRoute
