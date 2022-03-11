
export const Paciente = ({paciente}) => {
    return (
      <div className="mx-5 my-10  shadow-xl  bg-white px-5 py-10 rounded-xl">
  
      <p className="font-bold mb-3 uppercase text-gray-700">Nombre de la Mascota: {''} <span className="font-normal normal-case">{paciente.nombre}</span></p>
  
   
      <p className="font-bold mb-3 uppercase text-gray-700">Nombre del Propietario: {''} <span className="font-normal normal-case">{paciente.propietario}</span></p>
  
  
      <p className="font-bold mb-3 uppercase text-gray-700">Email del Propietario: {''} <span className="font-normal normal-case">{paciente.email}</span></p>
  
  
      <p className="font-bold mb-3 uppercase text-gray-700">Fecha de Alta: {''} <span className="font-normal normal-case">{paciente.fecha}</span></p>
  
  
      <p className="font-bold mb-3 uppercase text-gray-700">Síntomas: {''} <span className="font-normal normal-case"> {paciente.sintomas}</span></p>
  
  </div>
  
    )
  }
  
  
  export default Paciente;