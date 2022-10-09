import { Paciente } from "./Paciente"


const ListadoPacientes = () => {
  return (

    <div className="sm:w-1/2 lg:w-3/5 sm:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra los {''}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
        </p>

        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />

    </div>

    
  )
}

export default ListadoPacientes