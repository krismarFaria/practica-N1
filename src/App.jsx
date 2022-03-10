import { useState } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"



function App() {
  // Antes del return se escribe código JS, funciones o validaciones

const [pacientes, setPacientes] = useState([]);

  // Después del return se escribe el código que se refleja en pantalla
  return (

    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">

        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}        
         />

        <Listado />
      </div>

    </div>

  );
}

export default App;