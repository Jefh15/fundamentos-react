// importo el componente
import Contador from "./components/Contador";
import Eventos from "./components/Eventos";
import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";


function App() {
  return (
    <div className="App">
      <h1>Hola Mundo React</h1>
      {/* Pinto el componente */}
      <Parrafo />
      {/* Pinto el componente con JSX */}
      <Variables />
      {/* Pinto el componente con HOOKS useState */}
      <Eventos />
      {/* Pinto el componente con Hooks useState de contador */}
      <Contador />
    </div>
  );
}

export default App;
