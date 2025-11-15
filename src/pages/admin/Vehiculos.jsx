import React,{useEffect,useState} from 'react';
//importacion de la funcion useEFFect con el fin de que el codigo pueda estar pendiente de lo que el ususario va a realizar primero 
//no como en python que todo es secuencial aqui se puede ejecutar de primero cualquier accion
//funcion useState nos permite definir las variables que vamos a utilizar dentro de nustra funcion

//EJERCICIO DE PRUEBA REALIZAR UN FORMULARIO QUE LE PIDA AL USUSARIO LA EDAD Y MUSTRE UN MENSAJE QUE LE DIGA SI ES MAYOR DE EDAD O NO EJMPLO RAPIDO DE UNA RENDERIZACION

//aqui vienen las interactividades de la funcion useEffect
const Vehiculos=()=>{
    const [edad,setEdad]=useState(0);
    const [esMenorDeEdad,setEsMenorDeEdad]=useState(false) //para la renderizacion condicional se hace la funcion const useState y la inicializo en falso para que no aparezca inicialmente
    const [mostrarCamposAdicionales,setMostrarCamposAdicionales]=useState(false)
  useEffect(()=>{  //El useeFFECT ME SIRVE PARA HACER LOS CONTROLES Q yo necesite
    if(edad>=18){ //si edad es mayor a 18 setEsMenorDeEdad(false) si no setEsMenorDeEdad(true)
      setEsMenorDeEdad(false)
      }else{
      setEsMenorDeEdad(true)
    }
  },[edad])
    
     
  return (
    <form className='flex flex-col'>
      <h2>Formulario para creacion de vehiculos</h2>
      <label htmlFor='edad'>
      Por favor ingrese su edad
      <input value={edad} onChange={(e)=>{setEdad(e.target.value)}} className='border-gray-600' name='edad' type='number'/>
      </label>
      {esMenorDeEdad ? ( //renderizacion condicional en react es: si es esMenorDeEdad (?)=es menor de edad y el else (:) si no no puede hacer pagos esta es la sintaxis
        <span className='text-3xl text-red-500'>Usted es menor de edad no puede hacer pagos</span>
      ):(
        <span className='text-3xl text-green-500'>Usted es menor de edad no puede hacer pagos</span>
      )} 
      <button onClick={()=>setMostrarCamposAdicionales(!mostrarCamposAdicionales)} type='button' className='text-white bg-indigo-500'>
        Mostrar campos adicionales
      </button>
      {mostrarCamposAdicionales && (
        <div>
          <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'/>
          <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'/>
          <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'/>
          <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'/>
          <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'/>
        </div>
      )}
    </form>
  )
};

export default Vehiculos;
