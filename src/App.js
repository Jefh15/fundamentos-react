// importo el componente
import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo React</h1>
      {/* Pinto el componente */}
      <Parrafo />
      {/* Pinto el componente */}
      <Variables />
    </div>
  );
}

export default App;
