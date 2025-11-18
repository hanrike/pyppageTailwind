import React,{useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion


//java siempre trabaja en formatos json voy a realizar una lista de vehiculos en este formato
//Estamos suponiendo que esta es la informacion que nos va a entrar desde la base de datos
const vehiculos=[
  {
    nombre:'Corolla',
    marca:'Toyota',
    modelo:2014
  },
  {
    nombre:'Sandero',
    marca:'Reanault',
    modelo:2020
  },
  {
    nombre:'Corolla',
    marca:'Toyota',
    modelo:2014
  },
  {
    nombre:'Rav4',
    marca:'Toyota',
    modelo:2021
  },
  {
    nombre:'Fiesta',
    marca:'Ford',
    modelo:2017
  },
  {
    nombre:'Mazda 3',
    marca:'Mazda',
    modelo:2020
  },
]

//Lo que quiero es ir a rutas pero esta vez utilizando renderizacion condicional y no a traves del router dom como ya se vio
const Vehiculos = () => {
  const[mostrarTabla,setMostrarTabla]=useState(true);
  const[textoBoton,setTextoBoton]=useState('Crear nuevo Vehiculo')
 //creacion de useEffect con el fin de que el boton pueda cambiar tambien cuando se hace el evento click 
  useEffect(()=>{
    if (mostrarTabla){
      setTextoBoton('Crear nuevo Vehiculo');
    }else{
      setTextoBoton('Mostrar todos los vehiculos')
    }
  },[mostrarTabla]);
  return(
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>  
      <h2 className='text-3xl font-extrabold text-gray-900'>
        Pagina de administracion de vehiculos</h2>
      {/**con el evento onClick logro que cuando hago click en el boton me muestre la funcion TablaVehiculos o la funcion FormularioCreacionVehiculos */}
      <button onClick={()=>{
        setMostrarTabla(!mostrarTabla)
      }} className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'>
        {textoBoton}
        </button> {/**de esta manera se puede ejecutar codigo javascript {textoBoton} */}{/**estilo tailwind del boton */}
        </div>
      {mostrarTabla ? <TablaVehiculos/>:<FormularioCreacionVehiculos/> } {/**si mostrarTabla es verdadero entonces habilite  */}
      {/**renderizacion para el componente de tabla vehiculos */}
    </div>
  )
}

const TablaVehiculos = () => {
  return(
    //vamos a crear la tabla que muestra los vehiculos
    //centro el titulo todos los vehiculos y le doy el estilo tailwind h2
    <div className='flex flex-col items-center justify-center' >
      <h2 className='text-3xl font-extrabold text-gray-900'>Todos los Vehiculos</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre del Vehiculo</th>
          <th>Marca del Vehiculo</th>
          <th>Modelo del Vehiculo</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
        <tr>
            <td>Sandero</td>
            <td>Renault</td>
            <td>2020</td>
          </tr>
        <tr>
            <td>Duster</td>
            <td>Renault</td>
            <td>2014</td>
          </tr>
      </tbody>
    </table>
    </div>
  )
}

const FormularioCreacionVehiculos = () => {
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      <form className='grid grid-cols-2'>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'type="text" />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'type="text" />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'type="text" />
        <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>Guardar vehiculo</button>
      </form>
    </div>
  )
}


export default Vehiculos;
