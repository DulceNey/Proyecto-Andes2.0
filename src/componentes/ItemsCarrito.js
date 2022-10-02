import React from 'react'



const ItemsCarrito = ({data,deleteFromCart}) => {
    const {id,nombre,precio,cantidad}=data
  return (
    <div>
        <h3 className='text-md font-semibold'>{nombre}</h3>
        <h4>{cantidad}</h4>
        <h4>${precio}={precio * cantidad }</h4>
        <h5>${precio}</h5>
        <button onClick={()=>deleteFromCart(id)} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Eliminar uno</button>
        <button onClick={()=>deleteFromCart(id,true)} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Eliminar todos</button>

        

    </div>
  )
}

export default ItemsCarrito