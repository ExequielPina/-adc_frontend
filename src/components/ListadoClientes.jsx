import useClientes from "../hooks/useClientes"
import Cliente from "./Cliente";


const ListadoClientes = () => {

  const { clientes } = useClientes()
  return (
      <>
        { clientes.length ? 
        (
            <>
              <h2 className="text-lg text-center mb-10 font-bold text-gray-700 uppercase">Listado de  {''} <span 
                  className="text-indigo-600 font-bold">clientes</span></h2>

              {clientes.map( cliente => (
                <Cliente 
                key={ cliente._id }
                cliente={ cliente }
               />
               ))}
            </>
          

        ) :
         
        (   
            <>
              <h2 className="font-black text-xl text-center">No hay clientes</h2>
            </> 


          
             
        )}
          
      </>
  )
};


export default ListadoClientes