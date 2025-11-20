import React, {use, useEffect,useState} from 'react';
import { ToastContainer, toast } from 'react-toastify'; //importo libreria para mensajes y nitificaciones al presioanr un boton o realizar una accion
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
  const[colorBoton,setColorBoton]=useState('bg-indigo-500')//quiero cambiar el color de los del botones cuando saque el formulario esto se llama clases pongo como verdadero bg-indigo
                                                           //y si no no se cumple la condicion el color cambia rojo con el estilo llamado tailwind

  //cuando se trae base de datos del backen se hace un useEffect vacio
  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculosBackend)
  },[])

 //creacion de useEffect con el fin de que el boton pueda cambiar tambien cuando se hace el evento click 
  useEffect(()=>{
    if (mostrarTabla){
      setTextoBoton('Crear nuevo Vehiculo');
      setColorBoton('bg-indigo-500')
    }else{
      setTextoBoton('Mostrar todos los vehiculos')
      setColorBoton('bg-blue-500')
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
      }} className={`text-white ${colorBoton} p-5 rounded-full m-6 w-28 self-end`}> {/**Aqui meti un java script forma  adecuada de hacerlo aunque funciona */}
        {textoBoton} {/**Estoy cambiando el boton de color de forma correcta apropiada esto se llama concatenacion de strings */}
        </button> {/**de esta manera se puede ejecutar codigo javascript {textoBoton} */}{/**estilo tailwind del boton */}
        </div>
        {/**En esta variable mostrar tabla es donde se muestra la tabla o el vehiculo cuando hacemos el evento */}
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos}/>
        ):(<FormularioCreacionVehiculos 
          funcionParaMostrarLaTabla={setMostrarTabla} 
          listaVehiculos={vehiculos} // a esta lista de vehiculos le vamos a realizar un append como se hacia en python pero con estructura java script
          funcionParaAgregarUnVehiculo={setVehiculos}/>// prop set mostrar tabla para que el hijo que es FormularioCreacionVehiculos se cambie con el set mostrar tabla     
        )} {/**si mostrarTabla es verdadero entonces habilite  */}{/**renderizacion para el componente de tabla vehiculos */}
        {/**De esta manera ya tenemos el contenedor con la funcion  */}
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}/> {/**se debe poner para que funcione la libreria y el modulo de mensajes con el comando o funcion toast se puede utilizar la herramienta  */}
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
//aqui llamo al prop directamenet en el formulario dentro de los parentesisis poniendo la funcionParaMostrarTabla
const FormularioCreacionVehiculos = ({funcionParaMostrarLaTabla,listaVehiculos,funcionParaAgregarUnVehiculo}) => {
  //esta es una forma de hacer que el boton guardar vehiculo funcione controlar un nput con estados
  const [nombre,setNombre]=useState();
  const [marca,setMarca]=useState();
  const [modelo,setModelo]=useState();

  //Creamos la funcion enviarAlBackend
  const enviarAlBackend=()=>{
    console.log('nombre',nombre,'marca',marca,'modelo',modelo)
    toast.success('Vehiculo creado con exito')
    funcionParaMostrarLaTabla(true) //aqui paso la funcion y le paso un true para que funcione
    //asi se hace el append y se agraga los nuevos datos a la lista q se ve en el front del formulario con los vehiculos
    funcionParaAgregarUnVehiculo([...listaVehiculos,{nombre:nombre,marca:marca,modelo:modelo}])//ejecuto el set de la lista completa y con ..., des pues de la coma pongo el dato q quiero agregar y lo de mas hacemos el append en java
  }
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      {/**Formulario para la creacion de Vehiculos el boton ejecuta una accion del formulario  los formularios tienen acciones que nos pueden redirigir a otras paginas*/}
      <form className='flex flex-col'>
        {/**Nombre vehiculo con opcion de texto para agrgar formulario  */}
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehiculo
        <input 
        name='nombre'
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
         type="text"
         placeholder='Corolla'
         //control de inputs para manejo del boton guardar vehiculo en este caso el nombre
         //cada uno de los inputs tiene su propio estado, a los inputs se le puso un estado asociado
         value={nombre}
         onChange={(e)=>{
          setNombre(e.target.value)
         }} />
        </label>
        {/**marca vehiculo con opcion select para eleccion de marca  */}
        <label  className='flex flex-col' htmlFor='marca'>
          Marca del Vehiculo
        <select
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        name='marca'
        //control de inputs para manejo del boton guardar vehiculo  en este caso la marca
        //cada uno de los inputs tiene su propio estado, a los inputs se le puso un estado asociado
         value={marca}
         onChange={(e)=>{
          setMarca(e.target.value)
         }} >
          <option disabled>Seleccione una Opción</option>
          <option>Renault</option>
          <option>Toyota</option>
          <option>Ford</option>
          <option>Mazda</option>
          <option>Chevrolet</option>
        </select>
        </label>
        {/**modelo vehiculo con opcion tipo numero con valor maximo 2025 y minimo 2005  */}
        <label className='flex flex-col' htmlFor='modelo'>
         Modelo del Vehiculo
        <input 
        name='modelo'
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
         type="number"
         min={2005}
         max={2025}
         placeholder='2014'
          //control de inputs para manejo del boton guardar vehiculo en este caso el modelo 
          //cada uno de los inputs tiene su propio estado, a los inputs se le puso un estado asociado
         value={modelo}
         onChange={(e)=>{
          setModelo(e.target.value)
         }} />
        </label>
        <button 
        type='button'
        className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        //cuando se le hace click al boton se utiliza onClick para ejecutar una funcion en este caso la funcion enviar al backend //
        onClick={()=>{
          enviarAlBackend() //dse esta manera por medio de la funcion enviar al backend a traves de la consola console.log estoy enviando toda la informacion enviar al backend debe ir () para que
        }}
        >
          Guardar vehiculo</button>
      </form>
    </div>
  )
}


export default Vehiculos;

