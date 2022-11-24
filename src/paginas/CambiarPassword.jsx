import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

 const CambiarPassword = () => {

      const { guardarPassword } = useAuth()

      const [alerta, setAlerta] = useState({})
      const [password, setPassword] = useState({
        passActual: '',
        nuevaPass: ''
      })

      const handleSubmit = async e => {
          e.preventDefault();

          if(Object.values(password).some(campo => campo === '')) {
            setAlerta({
              msg: 'Todos los campos son obligatorios',
              error: true
            })
            
            return
          }

          if(password.nuevaPass.length < 6) {
            setAlerta({
              msg: 'La nueva contraseña debe tener mínimo 6 caracteres',
              error: true
            })
            return
          }

        const respuesta = await guardarPassword(password)

        setAlerta(respuesta)
      }
    
    
      const { msg } = alerta


    return (
      <>
          <AdminNav />

          <h2 className="text-gray-600 font-black uppercase mb-10 text-3xl text-center mt-10">Cambiar contraseña</h2>
          <p className="text-xl mt-5 mb-10 text-center text-gray-600">Modifica tu contraseña {''}
          <span className="text-indigo-600 font-bold text-xl text-center">aquí</span></p>

            <div className="flex justify-center">
              <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                { msg && <Alerta  alerta ={ alerta }/>}
                <form onSubmit={handleSubmit}>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Contraseña actual</label>
                        <input
                          className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                          type="password"
                          name="passActual"
                          placeholder="Escribe tu contraseña actual"
                          onChange={e => setPassword({
                            ...password,
                            [e.target.name] : e.target.value
                          })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Tu nueva contraseña</label>
                        <input
                          className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                          type="password"
                          name="nuevaPass"
                          placeholder="Escribe tu nueva contraseña"
                          onChange={e => setPassword({
                            ...password,
                            [e.target.name] : e.target.value
                          })}
                        />
                    </div>

                    <input
                  className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer"
                  type="submit"
                  value="Actualizar contraseña"
                   
                    />
                </form>
              </div>
            </div>
      </>
    )
   
};




export default CambiarPassword