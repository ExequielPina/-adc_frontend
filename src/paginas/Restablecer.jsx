import { Link } from 'react-router-dom'
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const Restablecer = () => {
  const [ email, setEmail ] = useState('');
  const [ alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault()

    if( email === '' || email.length < 6) {
      setAlerta({ msg: 'El email es obligatorio', error: true})
      return
    }

    try {
        const { data } = await clienteAxios.post('/mecanico/restablecer-pass', { email })
        console.log(data);

        setAlerta({msg: data.msg});
    } catch (error) {
      
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  };

  const { msg } = alerta

  return (
    <>
        <div>
            <h1 className="text-indigo-600 
              font-black text-6xl">
              Restablecer 
              <span className="text-black"> contraseña</span>
            </h1> 
          </div>

        <div className="mt:20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          { msg && <Alerta
                  alerta={ alerta } 
          />}
            <form onSubmit={ handleSubmit }>
                <div className="my-5">
                  <label className="uppercase text-gray-600 block text-xl font-bold">
                    Email:  
                  </label>
                    <input
                      type="email"
                      placeholder="Email de registro"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={ email }
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <p className='my-5 text-gray-500'>Te enviaremos las instrucciones por correo electrónico, para que puedas crear una nueva contraseña.</p>
                  <input 
                    type="submit"
                    value="Restablecer"
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
                      to="/registrar">¿No tienes cuenta? Regístrate aquí
                  </Link>
            </nav>
        </div>    
    </>
  );
};

export default Restablecer;


