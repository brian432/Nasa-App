import './estilos/estilo.css';
import Header from './componentes/header';
import Inicio from './componentes/inicio';
import Planetas from './componentes/planetas';
import Nasa from './componentes/api-nasa';
import data from './data.json';
import { useState} from 'react'

function App() {
  const [state, setState] = useState("");

  return (
    <div className="App">
      <Header setState={setState} />
      {(state === "" || state === "Inicio") ? <Inicio setState={setState} /> :
        state === "Sistema Solar" ? <Planetas state={state} data={data[0].Sistema_Solar} setState={setState} /> :
          state === "Api NASA" ? <Nasa /> :
            <Planetas state={state} data={data[0].Sistema_Solar.Planetas[state]} />}
    </div>
  );
}

export default App;
