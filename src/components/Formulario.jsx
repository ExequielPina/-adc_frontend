import { useState, useEffect } from "react"
import Alerta from './Alerta'
import useClientes from "../hooks/useClientes"

const Formulario = () => {
    const [nombre, setNombre] = useState ('')
    const [matricula, setMatricula] = useState ('')
    const [email, setEmail] = useState ('')
    const [fecha, setFecha] = useState ('')
    const [averia, setAveria] = useState ('')
    const [alerta, setAlerta] = useState({})
    const [ id, setId ] = useState(null)

    const { guardarCliente, cliente } = useClientes()

    useEffect(() => {
        if (cliente?.nombre) {
            setNombre(cliente.nombre)
            setMatricula(cliente.matricula)
            setEmail(cliente.email)
            setFecha(cliente.fecha)
            setAveria(cliente.averia)
            setId(cliente._id)
        }
    }, [cliente])

    

    const handleSubmit = e => { e.preventDefault()
    
    // Validación del formulario
    if ([ nombre, matricula, email, fecha, averia ].includes('')) {
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        })
        return;
    }
    
    guardarCliente({ nombre, matricula, email, fecha, averia, id })
    setAlerta({
        msg: 'Editado correctamente'
    })
    setNombre('')
    setMatricula('')
    setEmail('')
    setFecha('')
    setAveria('')
    setId('')

}


    const { msg } = alerta
  return (

    <>
        <p className="text-lg text-center mb-10 font-bold text-gray-700 uppercase">Añade tus {''} <span 
        className="text-indigo-600 font-bold">clientes</span>
        </p>
        
        { msg && <Alerta alerta = { alerta } /> }
        <form  
            className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
            onSubmit={ handleSubmit }>
            
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold" 
                        htmlFor="nombre">Nombre
                    </label>

                    <input
                        className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                        id="nombre"
                        type="text"
                        placeholder="Nombre del cliente"    
                        value={ nombre }    
                        onChange={ e => setNombre (e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold" 
                        htmlFor="matricula">Matricula
                    </label>

                    <input
                        className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                        id="matricula"
                        type="text"
                        placeholder="Matricula del vehículo"  
                        value={ matricula }      
                        onChange={ e => setMatricula (e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold" 
                        htmlFor="email">Email
                    </label>

                    <input
                        className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                        id="matricula"
                        type="email"
                        placeholder="Email del cliente"
                        value={ email }  
                        onChange={ e => setEmail (e.target.value)}      
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold" 
                        htmlFor="fecha">Fecha de alta
                    </label>

                    <input
                        className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                        id="fecha"
                        type="date"    
                        value={fecha }  
                        onChange={ e => setFecha (e.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold" 
                        htmlFor="averia">Avería
                    </label>

                    <textarea
                        className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                        id="averia"
                        placeholder="Descripción de la avería "    
                        value={ averia }  
                        onChange={ e => setAveria (e.target.value)}      
                    />
                </div>

                <input
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                    hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
                    type="submit"
                    value= { id ? 'editar cliente' : "Crear cliente" }
                />
        </form>

    </>
  )
}


export default Formulario