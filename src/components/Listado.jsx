import { Paciente } from "./Paciente";

export const Listado = ({pacientes}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll pt-10">
     <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
     <p className="text-xl mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
          

{ pacientes.map( ( paciente, index ) => (
          <Paciente
          key={index}
          paciente={paciente}
          
          />
           ) ) }





     </div>
    )
}

export default Listado;