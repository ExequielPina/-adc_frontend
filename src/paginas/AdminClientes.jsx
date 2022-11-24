import Formulario from "../components/Formulario"
import ListadoClientes from "../components/ListadoClientes"
import { useState } from "react"


export const AdminClientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState( false )

  return (
      <div className="flex flex-col md:flex-row">
        <button
          className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
          type="button"
          onClick={() => setMostrarFormulario( !mostrarFormulario )}
          >{ mostrarFormulario ? 'Ocultar formulario' : 'Ver formulario' }
        </button>
        <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5`}>
          < Formulario />
        </div>

        <div className="md:w-1/2 lg:w-3/5">
          < ListadoClientes />
        </div>  
      </div>
    
    

  )
}



export default AdminClientes
