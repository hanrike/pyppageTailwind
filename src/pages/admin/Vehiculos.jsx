import React,{useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion


//Lo que quiero es ir a rutas pero esta vez utilizando renderizacion condicional y no a traves del router dom como ya se vio
const Vehiculos = () => {
  const[mostrarTabla,setMostrarTabla]=useState(true);
  return(
    <div>
      <h2>Pagina de administracion de vehiculos</h2>
      {/**con el evento onClick logro que cuando hago click en el boton me muestre la funcion TablaVehiculos o la funcion FormularioCreacionVehiculos */}
      <button onClick={()=>{
        setMostrarTabla(!mostrarTabla)
      }} className='text-white bg-indigo-500 p-5'>Crear nuevo vehiculo</button>{/**estilo tailwind del boton */}
      {mostrarTabla ? <TablaVehiculos/>:<FormularioCreacionVehiculos/> } {/**si mostrarTabla es verdadero entonces habilite  */}
      {/**renderizacion para el componente de tabla vehiculos */}
    </div>
  )
}

const TablaVehiculos = () => {
  return(
    <div>
      Esto es un div pero deberia ser una tabla mostrando todos losd vehiculos
    </div>
  )
}

const FormularioCreacionVehiculos = () => {
  return(
    <div>
      Esto es un div pero deberia ser un formulario para creacion de un nuevo vehiculo
    </div>
  )
}


export default Vehiculos;
