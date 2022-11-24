import { createContext, useState, useEffect } from "react"
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";


const ClientesContext = createContext()

const ClientesProvider = ({ children }) => {
    const { auth } = useAuth();

    const [clientes, setClientes] = useState([])

    const [cliente, setCliente] = useState([])

    useEffect(() => {
        const obtenerClientes = async () => {

            try {
               const token = localStorage.getItem('token') 
               if ( !token ) return

               const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`
                 }
               }

               const { data } = await clienteAxios('/clientes', config)
               setClientes( data )
            } catch (error) {
                
            }
        }
        obtenerClientes()

    }, [auth])

    const guardarCliente = async (cliente) => {

        const token = localStorage.getItem('token') 
                const config = {
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${ token }`
                    }
                }
        if (cliente.id) {
            try {
                const { data } = await clienteAxios.put(`/clientes/${cliente.id}`, cliente, config)

                const clientesUpdate = clientes.map ( clienteState => clienteState._id === data._id ? data : clienteState ) 
                setClientes(clientesUpdate)
            } catch (error) {
                
            }

        } else {
            try {           
                const { data } = await clienteAxios.post('/clientes', cliente, config ) 
                const { createdAt, updatedAt, __v, ...GuardarCliente } = data
     
                setClientes([ GuardarCliente, ...clientes ])
             } catch (error) {
                 
             }

        }

        
    }

    const setEdit = (cliente) => {
        setCliente(cliente)
    }

    const deleteCliente = async id => {
        const confirmar = confirm('¿Estás seguro que deseas eliminar este cliente?')
        if (confirmar) {
            try {
                const token = localStorage.getItem('token') 
                const config = {
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${ token }`
                    }
                }

                const { data } =await clienteAxios.delete(`/clientes/${id}`, config)
                
                const clientesUpdate = clientes.filter( clientesState => clientesState._id !== id)
                setClientes(clientesUpdate)
            } catch (error) {
                
            }
        }
    }

    return(
        <ClientesContext.Provider
            value={{
               clientes,
               guardarCliente,
               setEdit,
               cliente,
               deleteCliente
            }}
        >
            { children }
        </ClientesContext.Provider>
    )

}






export { ClientesProvider }
export default ClientesContext 