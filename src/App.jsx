import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

import AdminClientes from './paginas/AdminClientes'
import Login from './paginas/Login'
import Confirmar from './paginas/Confirmar'
import Registrar from './paginas/Registrar'
import Restablecer from './paginas/Restablecer'
import NuevoPassword from './paginas/NuevoPassword'
import EditarPerfil from './paginas/EditarPerfil'
import CambiarPassword from './paginas/CambiarPassword'

import { AuthProvider } from './context/AuthProvider'
import { ClientesProvider } from './context/ClientesProvider'

function App() {
  

  return (  
   <BrowserRouter>
     <AuthProvider>
        <ClientesProvider>
            <Routes> 
                <Route path="/" element={< AuthLayout />}>
                    <Route index element={< Login />} />
                    <Route path= "registrar" element= {< Registrar />} />
                    <Route path= "restablecer" element= {< Restablecer />} />
                    <Route path= "restablecer/:token" element= {< NuevoPassword />} />
                    <Route path= "confirmar/:id" element= {< Confirmar />} />
                </Route>

                
                <Route path="/admin" element={< RutaProtegida />}>
                    <Route index element={< AdminClientes />} />
                    <Route path="perfil" element={< EditarPerfil />} />
                    <Route path="CambiarPassword" element={< CambiarPassword />} />
                </Route>
            </Routes>
        </ClientesProvider>
     </AuthProvider>
   </BrowserRouter>
  )
}

export default App
