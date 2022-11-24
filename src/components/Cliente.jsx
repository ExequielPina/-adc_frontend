import useClientes from "../hooks/useClientes";

const Cliente = ({cliente}) => {

    const { setEdit, deleteCliente } = useClientes()

    const { nombre, matricula, email, fecha, averia, _id } = cliente

    const formatfecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (

    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl      ">
        <p className="font-bold uppercase text-indigo-800  my-1">Nombre: {''}<span className="font-normal normal-case text-black">{ nombre }</span></p>
        <p className="font-bold uppercase text-indigo-800 my-1">Matricula: {''}<span className="font-normal normal-case text-black">{ matricula }</span></p>
        <p className="font-bold uppercase text-indigo-800 my-1">Email: {''}<span className="font-normal normal-case text-black">{ email }</span></p>
        <p className="font-bold uppercase text-indigo-800 my-1">Fecha: {''}<span className="font-normal normal-case text-black">{formatfecha (fecha) }</span></p>
        <p className="font-bold uppercase text-indigo-800 my-1">Averia: {''}<span className="font-normal normal-case text-black">{ averia }</span></p>
        <p className="font-bold uppercase text-indigo-800 my-1">Id: {''}<span className="font-normal normal-case text-black">{ _id }</span></p>

        <div className="flex justify-between my-5">
            <button
                className="bg-indigo-600  p-3 text-white uppercase font-bold 
                           hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg py-2 px-10"
                type="button" 
                onClick={() => setEdit( cliente )}          
            >Editar
            </button>
            <button
                className="bg-indigo-600  p-3 text-white uppercase font-bold 
                           hover:bg-red-800 cursor-pointer transition-colors rounded-lg py-2 px-10"
                type="button" 
                onClick={() => deleteCliente( _id )}           
            >Eliminar cliente
            </button>

        </div>
        
    </div>
  );
};


export default Cliente
