import { Link } from "react-router-dom";



const AdminNav = () => {
  return (
    <nav className="flex gap-6">
        <Link
        to="/admin/perfil"
        className="font-bold uppercase text-gray-500"
        >Perfil
        </Link>

        <Link
        to="/admin/cambiarPassword"
        className="font-bold uppercase text-gray-500"
        >Cambiar contraseña
        </Link>
    </nav>
  )
}




export default AdminNav;