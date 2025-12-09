import React, {use, useEffect,useState,useRef} from 'react';// el useRef se utiliza para poder utilizr codigo html en javscript para utilizar codigo como referencia 
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
 //importo libreria para mensajes y nitificaciones al presioanr un boton o realizar una accion
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
    const ObtenerVehiculos=async()=>{
       const options={
  method:'GET',
  url:'https://vast-waters-45728.herokuapp.com/vehicle/',
}
    await axios //aqui estoy ya haciendo parte del backend y requiero que mi funcion sea asincrona por eso el await
        .request(options)
        .then(function(response){
          //console.log(response.data)
          setVehiculos(response.data)
        })
        .catch(function(error){
          console.error(error)
        })
      }
    if (mostrarTabla){
      ObtenerVehiculos()
    }
      },[mostrarTabla])

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
      <div className='flex flex-col w-full'>  
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
          setMostrarTabla={setMostrarTabla} 
          listaVehiculos={vehiculos} // a esta lista de vehiculos le vamos a realizar un append como se hacia en python pero con estructura java script
          setVehiculos={setVehiculos}/>// prop set mostrar tabla para que el hijo que es FormularioCreacionVehiculos se cambie con el set mostrar tabla     
        )} {/**si mostrarTabla es verdadero entonces habilite  */}{/**renderizacion para el componente de tabla vehiculos */}
        {/**De esta manera ya tenemos el contenedor con la funcion  */}
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}/> {/**se debe poner para que funcione la libreria y el modulo de mensajes con el comando o funcion toast se puede utilizar la herramienta  */}
    </div> 
  )
}
//aqui necesitamos traer la base de dsatos de la tabla vehiculos leer esa informacion la TablaVehiculos tiene renderizacion condicional
const TablaVehiculos = ({listaVehiculos}) => {
  useEffect(()=>{
      console.log('este es el listado de vehiculos en el componente de tabala',listaVehiculos); //lista vehiculos es un estado entonces se debe usar un useEffect
    },[listaVehiculos])
  return(
    //vamos a crear la tabla que muestra los vehiculos
    //centro el titulo todos los vehiculos y le doy el estilo tailwind h2
    <div className='flex flex-col items-center justify-center w-full' >
      <h2 className='text-3xl font-extrabold text-gray-900'>Todos los Vehiculos</h2>
    <table className='tabla'> {/**para hacer la tabla no es recomendable usar tailwind entonces en este caso voy a realizar la tabla con css puro */}
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
            <tr key={vehiculo._id}> {/**forma de poner identificador unico en las filas de la tabla no es muy recomendado porque no se puede poner id en ninguna otra */}
              <td>{vehiculo.name}</td>
              <td>{vehiculo.brand}</td>
              <td>{vehiculo.model}</td>
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
//el formulario tambien tiene renderizacion condicional
const FormularioCreacionVehiculos = ({setMostrarTabla,listaVehiculos,setVehiculos}) => {
  const form=useRef(null) //este es const o funcion para uso de useRef el null es para q no pponga ningun parametro al principioo
  //esta es una forma de hacer que el boton guardar vehiculo funcione controlar un input con estados
//la (e) quiere decir q le entra un evento a la funcion forma recomendada de trabajar con formularios 
//aqui se pone el async para el await
  const submitForm=async (e)=>{
    e.preventDefault(); //con esto se controlan los inputs y con el onSubmit en el formulkario
    const fd=new FormData(form.current) //debo hacerlo de esta manera con la funcion para que trabaje FormData con esto se evita tener un estado para cada input se puede omitir

    //creo la nueva funcion donde quedaran almacenados los datos
    const nuevoVehiculo={} //aqui queda mi array vacio listo para almacenar datos, se cre una nueva variable nuevoVehiculo y se inicializo como un objeto vacio
                            //nuevoVehiculo en el key que me sta trayendo este forEach igual al value que me esta trayendo el forEach
    fd.forEach((value,key)=>{ //en el forEach esta el valor y elemento 
      nuevoVehiculo[key]=value //para cada elemento que se inicializo como un objeto vacio cons nuevoVehicuolo
     })

     const options={
  method:'POST',
  url:'https://vast-waters-45728.herokuapp.com/vehicle/create',
  headers:{'content-Type':'application/json'},
  data:{name:nuevoVehiculo.name,brand:nuevoVehiculo.brand,model:nuevoVehiculo.model},
}

     await axios //aqui estoy ya haciendo parte del backend y requiero que mi funcion sea asincrona por eso el await
        .request(options)
        .then(function(response){
          console.log(response.data)
          toast.success('Vehiculo agrgado con exito')
          //aqui se deberia hacer el toast de error e identifucar el caso de error
        })
        .catch(function(error){
          console.error(error)
          toast.error('Error creando un vehiculo')////
        })


     setMostrarTabla(true) //aqui lo debugueo con el fin de que no interfiera en mi consola f12 y poder hacr pruebas
     
  };
  
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      {/**Formulario para la creacion de Vehiculos el boton ejecuta una accion del formulario  los formularios tienen acciones que nos pueden redirigir a otras paginas*/}
      {/**el evento onSubmit me permite ejecutar una funcion que hace que se sepa cuando se le aplica submit al formulario*/}
      <form ref={form} onSubmit={submitForm} className='flex flex-col'> 
        {/**Nombre vehiculo con opcion de texto para agrgar formulario  */}
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehiculo
        <input 
        name='name'
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
         type="text"
         placeholder='Corolla'
         required //funcion html para que tenga que requrir el dato si no no deja avanzar en ele formulario
         />
        </label>
        {/**marca vehiculo con opcion select para eleccion de marca  */}
        <label  className='flex flex-col' htmlFor='marca'>
          Marca del Vehiculo
        <select
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        name='brand'
        required //funcion html para que tenga que requrir el dato si no no deja avanzar
        defaultValue={0} //con el fin de que inicialice la marca vehiculo sin valores iniciales quemadops
         >
          <option disabled value={0}>Seleccione una Opción</option>
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
        name='model'
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
         type="number"
         min={2005}
         max={2025}
         placeholder='2014'
         required //funcion html para que tenga que requrir el dato si no no deja avanzar en el formulario
         />
        </label>
        <button 
        type='submit' //cambiando el type de boton a submit hago que con solo propiedades html se tenga que poner toda la informacion requerida y poniendo en cada uno de los labels e inputs 
        className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar vehiculo</button>
      </form>
    </div>
  )
}


export default Vehiculos;

