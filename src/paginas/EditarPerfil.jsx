import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import useAuth from '../hooks/useAuth'
import Alerta from "../components/Alerta";

  const EditarPerfil = () => {

  const { auth, actualizarPerfil } = useAuth()
  const [ perfil, setPerfil ] = useState({})
  const [ alerta, setAlerta ] = useState({})

  useEffect(() => {
    setPerfil(auth)

  }, [auth])

  const handleSubmit = async e => {
    e.preventDefault()

    const { nombre, email } = perfil

    if([nombre, email ].includes('')) {
      setAlerta({
        msg: 'El email y el nombre son obligatorios',
        error: true
      })
      return
    }

    const resultado = await actualizarPerfil(perfil)

    setAlerta(resultado)
  }

  const { msg } = alerta

  return (
    <>
        <AdminNav/>
        
        <h2 className="text-gray-600 font-black uppercase mb-10 text-3xl text-center mt-10">Editar perfil</h2>

        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

            { msg && <Alerta  alerta ={ alerta }/>}
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label className="uppercase font-bold text-gray-600">Nombre</label>
                    <input
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                      type="text"
                      name="nombre"
                      value={perfil.nombre || ''}
                      onChange={ e => setPerfil({
                        ...perfil,
                        [e.target.name] : e.target.value
                      })}
                    />
                </div>

                <div className="my-3">
                    <label className="uppercase font-bold text-gray-600">Web</label>
                    <input
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                      type="text"
                      name="web"
                      value={perfil.web || ''}
                      onChange={ e => setPerfil({
                        ...perfil,
                        [e.target.name] : e.target.value
                      })}
                    />
                </div>

                <div className="my-3">
                    <label className="uppercase font-bold text-gray-600">Teléfono</label>
                    <input
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                      type="text"
                      name="telefono"
                      value={perfil.telefono || ''}
                      onChange={ e => setPerfil({
                        ...perfil,
                        [e.target.name] : e.target.value
                      })}
                    />
                </div>

                <div className="my-3">
                    <label className="uppercase font-bold text-gray-600">Email</label>
                    <input
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                      type="text"
                      name="email"
                      value={perfil.email || ''}
                      onChange={ e => setPerfil({
                        ...perfil,
                        [e.target.name] : e.target.value
                      })}
                    />
                </div>

                <input
                  className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer"
                  type="submit"
                  value="Guardar cambios"
                />
            </form>
          </div>
        </div>
    </>
  )
}


export default EditarPerfil;