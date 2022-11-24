import { useState } from 'react' 
import { Link } from "react-router-dom";
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';



 const Registrar = () => {
    // state del formulario de registro
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repetirPassword, setRepetirPassword ] = useState('');

    // State de aleta de errores
    const [alerta, setAlerta] = useState({});


    const handleSubmit = async e => {
      e.preventDefault();

      if([ nombre, email, password, repetirPassword].includes('')) {
        setAlerta({ msg: 'Hay campos vacios', error:true });
        return;
      }

      if (password !== repetirPassword) {
        setAlerta({ msg: 'La contraseña no coincide', error:true });
          return;
      }

      if (password.length < 6 ) {
           setAlerta({ msg: 'La contraseña debe tener al menos 6 caracteres.', error:true });
           return;
      }
      setAlerta({});

      // Crea el usuario en la API
      try { 
          await clienteAxios.post('/mecanico', { nombre, email, password })
          setAlerta({
            msg: 'Usuario creado correctamente, revisa tu email para verificar tu cuenta',
            error: false
          })

          // Limpia el formulario si se crea el usuario correctamente
          setNombre('');
          setEmail('');
          setPassword('');
          setRepetirPassword('');

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
      }
    }


    const { msg } = alerta;

    return (
      <>
        <div>
            <h1 className="text-indigo-600 
                font-black text-6xl">
                Crea tu {""}
                <span className="text-black">Cuenta</span>
            </h1> 
        </div>

        <div className="mt:20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          { msg && <Alerta
               alerta={alerta} 
          />}
            
            <form onSubmit={handleSubmit}>
                  <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                      Nombre:  
                    </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ nombre }
                        onChange={ e => setNombre( e.target.value )}
                      />
                  </div>

                  <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                      Email:  
                    </label>
                      <input
                        type="email"
                        placeholder="Email de registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ email }
                        onChange={ e => setEmail( e.target.value )}
                      />
                  </div>

                  <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                      Contraseña:  
                    </label>
                      <input
                        type="password"
                        placeholder="Crea tu contraseña"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ password }
                        onChange={ e => setPassword( e.target.value )}
                      />
                  </div>

                  <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                      Repetir contraseña:  
                    </label>
                      <input
                        type="password"
                        placeholder="Repite tu contraseña"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ repetirPassword }
                        onChange={ e => setRepetirPassword( e.target.value )}
                      />
                  </div>

                  <input 
                    type="submit"
                    value="Crear cuenta"
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl
                               text-white uppercase font-bold mt-5 hover: cursor-pointer
                               hover:bg-indigo-800 md:w-auto"
                  />

            </form>

                  <nav className="mt-10 lg:flex lg:justify-between">
                  <Link className="block text-center my-5 text-gray-500"
                        to="/">¿Ya estas registrado? inicia sesión aquí
                  </Link>

                  <Link className="block text-center my-5 text-gray-500"
                        to="/restablecer">Olvide mi contraseña
                  </Link>
                </nav>

        </div>
      </>
    );
  };

  export default Registrar;