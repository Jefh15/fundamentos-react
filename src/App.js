// importo el componente
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
      {/* Pinto el componente */}
      <Eventos />
    </div>
  );
}

export default App;
