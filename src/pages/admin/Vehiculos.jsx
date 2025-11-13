import React,{useEffect} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion


//aqui vienen las interactividades de la funcion useEffect
const Vehiculos=()=>{
  useEffect(()=>{
    console.log(
      'Hola soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacio');
    //paso2
    //paso3 
    //paso etc
  },[]);

  return (
    <form className='flex flex-col'>
      <h2>Formulario para creacion de vehiculos</h2>
      <input type='text' placeholder='Nombre vehiculo'/>
      <input type='text' placeholder='Marca Vehiculo'/>
      <input type='text' placeholder='Modelo vehiculo'/>
      <button className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
};

export default Vehiculos
