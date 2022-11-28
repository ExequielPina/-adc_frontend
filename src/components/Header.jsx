import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserXmark} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const {cerrarSesion } = useAuth()
  return (
    <header className="py-10 bg-indigo-600">
        
        <div className=" container mx-auto flex-col lg:flex-row flex justify-between items-center">
            <h1 className="font-bold text-xl text-indigo-200 text-center">ADC - Administrador de {''} 
                <span className="text-white font-black">clientes</span>
            </h1>
        <nav className="flex gap-4 flex-col lg:flex-row items-center mt-5 lg:mt-0">
            <Link to="/admin" className="text-white text-sm uppercase font-bold">Clientes</Link>
            <Link to="/admin/perfil" className="text-white text-sm uppercase font-bold">Perfil</Link>

            <div>
            
                <button type="button" 
                        className="text-white text-sm uppercase font-bold"
                        onClick={ cerrarSesion }
                    >Cerrar sesión
                </button>    
                <FontAwesomeIcon className="ml-2 text-white" icon={faUserXmark} />
            </div>
         
            
        </nav>
        </div>
    </header>
  )
}



export default Header