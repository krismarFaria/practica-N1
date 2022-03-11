import { useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {
const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const [error, setError] = useState(false)

const handleSubmit = (e) =>{
    e.preventDefault();

// Validacion De Formilario

if ([nombre, propietario, email, fecha, sintomas].includes('')){
    console.log('Completa el formulario correctamente');
    setError(true)

    return;
}

setError(false)

//Objeto de Pacientes

const objetoPaciente ={

    nombre, 
    propietario, 
    email, 
    fecha, 
    sintomas
}
// console.log(objetoPaciente);
  setPacientes([...pacientes, objetoPaciente]); 


//   Reiniciar form       


setNombre('')
setPropietario('')
setEmail('')
setFecha('')
setSintomas('')



}


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
{/* ***************************** Formulario ********************************************** */}
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg py-10 px-5">
            {error && <Error mensaje='Todos los campos son obligatorios'/>}
 {/* ***************************** Input 1 ********************************************** */}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>

                    <input value={nombre} onChange={ (e) => setNombre(e.target.value) } id="mascota" className="border-2 w-full p-2 mt-2 rounded-md" type="text" placeholder="Nombre" />
                </div>

 {/* ***************************** Input 2 ********************************************** */}

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>

                    <input  value={propietario} onChange={ (e) => setPropietario(e.target.value) }  id="propietario" className="border-2 w-full p-2 mt-2 rounded-md" type="text" placeholder="Nombre" />
                </div>

{/* ***************************** Input 3 ********************************************** */}

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Propietario</label>

                    <input  value={email} onChange={ (e) => setEmail(e.target.value) }  id="email" className="border-2 w-full p-2 mt-2 rounded-md" type="email" placeholder="Email" />
                </div>

{/* ***************************** Input 4 ********************************************** */}

<div className="mb-5">
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>

                    <input  value={fecha} onChange={ (e) => setFecha(e.target.value) }  id="alta" className="border-2 w-full p-2 mt-2 rounded-md" type="date" />
                </div>

{/* ***************************** Input 4 ********************************************** */}

<div className="mb-5">
<label htmlFor="intomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
<textarea  value={sintomas} onChange={ (e) => setSintomas(e.target.value) }  name="" id="sintomas" className="border-2 w-full p-2 mt-2 rounded-md" placeholder="Describe los síntomas"></textarea>
</div>

{/* ***************************** Botón ********************************************** */}


<input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800" value="Agregar Paciente" type="submit"  />


            </form>

        </div>
  

    )
}

export default Formulario;