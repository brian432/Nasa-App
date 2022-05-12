import { Route, Routes } from 'react-router-dom';

import './estilos/estilo.css';
import Header from './componentes/header';
import Inicio from './componentes/inicio';
import SistemaSolar from './componentes/sistema-solar';
import Planetas from './componentes/planetas';
import Nasa from './componentes/api-nasa';
import data from './data.json';
import { useState } from 'react'

function App() {
  const [state, setState] = useState("");

  return (
    <>
      <Header setState={setState} />
      <Routes>
        <Route path='/Nasa-App/' element={<Inicio setState={setState} />} />
        <Route path='/Nasa-App/sistema-solar' element={<SistemaSolar data={data[0].Sistema_Solar} setState={setState} />} /> :
        <Route path='/Nasa-App/planetas/:id' element={<Planetas state={state} data={data[0].Sistema_Solar.Planetas[state]} setState={setState} />} />
        <Route path='/Nasa-App/api-nasa' element={<Nasa />} />
        <Route
          path="*" //Si no hay conincidencia, devolvemos lo que hay en la propiedad element.
          element={
            <main style={{ display: "flex", padding: "1rem", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center" }}>
              <p>Sin coincidencia!</p>
            </main>
          }
        />
      </Routes>
    </>
  )
}

export default App;
