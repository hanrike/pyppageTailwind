import React,{useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion


//aqui vienen las interactividades de la funcion useEffect
const Vehiculos=()=>{
 //de esta manera llamo al useState una variable dentro de la aplicacion que esta constantemente cambiando eso es un estado
 const[nombreVehiculo,setNombreVehiculo]=useState(''); //el set es para poder cambiar el nombre de ese vehiculo es como en java setters y getters

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
      <input onChange={(e)=>{console.log('nombre:',e.target.value)}} type='text' placeholder='Nombre vehiculo'/> {/** el evento  onChange cada que el input cambie se puede ejecutar una funcion */}
      <input onChange={(e)=>{console.log('marca:',e.target.value)}} type='text' placeholder='Marca Vehiculo'/> {/** como se ve en el console.log los valores cambian cuando se ponen los inputs */}
      <input type='text' placeholder='Modelo vehiculo'/>
      <button className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
};

export default Vehiculos
