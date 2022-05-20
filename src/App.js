// importo el componente
import Contador from "./components/Contador";
import Eventos from "./components/Eventos";
import Formularios from "./components/Formularios";
import ListasANDKeys from "./components/ListasANDKeys";
import OperadorDePropagacion from "./components/OperadorDePropagacion";
import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";


function App() {
  return (
    // usando bootstrap
    <div className="container m-5 ">
      <h1>Hola Mundo React</h1>
      {/* Pinto el componente */}
      {/* <Parrafo /> */}
      {/* Pinto el componente con JSX */}
      {/* <Variables /> */}
      {/* Pinto el componente con HOOKS useState */}
      {/* <Eventos /> */}
      {/* Pinto el componente con Hooks useState de contador */}
      {/* <Contador /> */}
      {/* Pinto el componente de listas y keys */}
      {/* <ListasANDKeys /> */}
      {/* Pinto el componente Operador de propagacion */}
      {/* <OperadorDePropagacion /> */}
      {/* Pinto el componente Formularios */}
      <Formularios />
    </div>
  );
}

export default App;
