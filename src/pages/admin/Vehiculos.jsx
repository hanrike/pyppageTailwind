import React,{use, useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion


//java siempre trabaja en formatos json voy a realizar una lista de vehiculos en este formato
//Estamos suponiendo que esta es la informacion que nos va a entrar desde la base de datos
const vehiculosBackend=[
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
  {
    nombre:'Captiva',
    marca:'Chevrolet',
    modelo:2011
  },
]

//Lo que quiero es ir a rutas pero esta vez utilizando renderizacion condicional y no a traves del router dom como ya se vio
const Vehiculos = () => {
  const[mostrarTabla,setMostrarTabla]=useState(true);
  const[vehiculos,setVehiculos]=useState([]); //creamos un use state vacio para poder traer el backend
  const[textoBoton,setTextoBoton]=useState('Crear nuevo Vehiculo')

  //cuando se trae base de datos del backen se hace un useEffect vacio
  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculosBackend)
  },[])

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
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos}/>
        ):(<FormularioCreacionVehiculos/>         
        )} {/**si mostrarTabla es verdadero entonces habilite  */}
      {/**renderizacion para el componente de tabla vehiculos */}
    </div>
  )
}

const TablaVehiculos = ({listaVehiculos}) => {
  useEffect(()=>{
      console.log('este es el listado de vehiculos en el componente de tabala',listaVehiculos); //lista vehiculos es un estado entonces se debe usar un useEffect
    },[listaVehiculos])
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
        {listaVehiculos.map((vehiculo)=>{
          return(
            <tr>
              <td>{vehiculo.nombre}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
            </tr>
          )
        })} {/**este es un for en java para cada y voy a copiar al front lo que viene de mi base de datos simulada asi retorna un array de lo que necesito
         * entro un array de tipo json y el meduelve un array de html esta funcion se llama .map
         */} 
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
