import { useContext } from "react";
import ClientesContext from '../context/ClientesProvider';



const useClientes = () => {
    return useContext( ClientesContext )
    
}


export default useClientes;