import React,{useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion


//aqui vienen las interactividades de la funcion useEffect
const Vehiculos=()=>{
 //de esta manera llamo al useState una variable dentro de la aplicacion que esta constantemente cambiando eso es un estado
 const[nombreVehiculo,setNombreVehiculo]=useState(''); //el set es para poder cambiar el nombre de ese vehiculo es como en java setters y getters getter leer informacion de la variable 
                                                        //seter cambiar informacion de la variable

  useEffect(()=>{
    console.log(
      'Hola soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacio');
    //paso2
    //paso3 
    //paso etc
  },[]);

  useEffect(() => {
    console.log('Esto es una funcion que se ejecuta cada que cambia el valor de nombre vehiculo')
    console.log('El valor de la variable vehiculo es: ',nombreVehiculo)
   },[nombreVehiculo]); //pongo a escuchar la variable nombreVehiculo

   //useEffect que se ejecuta siempre no es recomendable porque como no tiene ninbguna dependencia se puede volver un ciclo infinito y generar algun error o copar el servidor haciendo un ciclo infinito
   //rompiendo la página por completo
   //useEffect(() => {
    //console.log('Este es un useEffect que se ejecuta siempre que cambia una variable ')
   //}); se explica para saber que existe, no recomendable usarlo es como un ciclo while true se puede volver infinito

    const enviarDatosAlBackend = () => { //de esta manera pongo al useEffect a escuchar una variable
      console.log('El valor de la variable nombre vehiculo es',nombreVehiculo)
    }   
  return (
    <form className='flex flex-col'>
      <h2>Formulario para creacion de vehiculos</h2>
      {/** onChange sirve para recibir el valor de un evento cualquieraque es lo que esta ingresando en el formulario */}
      <input onChange={(e)=>{setNombreVehiculo (e.target.value)}} 
      type='text' placeholder='Nombre vehiculo'/> {/** el evento  onChange cada que el input cambie se puede ejecutar una funcion */}
      <input onChange={(e)=>{console.log('marca:',e.target.value)}} 
      type='text' placeholder='Marca Vehiculo'/> {/** como se ve en el console.log los valores cambian cuando se ponen los inputs */}
      <input type='text' placeholder='Modelo vehiculo'/>
      <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button> {/** onClick  para ejecutar una funcion o accion que quiero que se ejecute cunado hago click al boton*/}
    </form>
  )
};

export default Vehiculos
