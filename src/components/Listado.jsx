import { Pacientes } from "./Pacientes";

export const Listado = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll pt-10">
     <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
     <p className="text-xl mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            
{/* ***************************** Lista ********************************************** */}

<div className="m-3 shadow-xl  bg-white px-5 py-10 rounded-xl">

    <p className="font-bold mb-3 uppercase text-gray-700">Nombre de la Mascota: {''} <span className="font-normal normal-case"> Galletita</span></p>

 
    <p className="font-bold mb-3 uppercase text-gray-700">Nombre del Propietario: {''} <span className="font-normal normal-case"> Galletita con chispas</span></p>


    <p className="font-bold mb-3 uppercase text-gray-700">Email del Propietario: {''} <span className="font-normal normal-case"> Galletita@gmail.com</span></p>


    <p className="font-bold mb-3 uppercase text-gray-700">Fecha de Alta: {''} <span className="font-normal normal-case"> 10 de Diciembre de 2022</span></p>


    <p className="font-bold mb-3 uppercase text-gray-700">Síntomas: {''} <span className="font-normal normal-case"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nobis. Dolore dicta neque, animi eveniet blanditiis voluptatem vero pariatur.</span></p>

</div>


<Pacientes/>
<Pacientes/>
<Pacientes/>
<Pacientes/>


     </div>
    )
}

export default Listado;