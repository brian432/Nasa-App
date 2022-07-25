import { Route, Routes } from 'react-router-dom';
import { Header } from './componentes/header/header'
import { Home } from './componentes/views/home/Home';
import { SistemaSolar } from './componentes/views/planetas/sistema-solar';
import { Planetas } from './componentes/views/planetas/planetas';
import { Nasa } from './componentes/views/Api-nasa/api-nasa';
import { useState } from 'react'

function App() {
  const [state, setState] = useState("");
  return (
    <>
      <Header setState={setState} />
      <Routes>
        <Route path='/' element={<Home setState={setState} />} />
        <Route path='/sistema-solar' element={<SistemaSolar state={state} />} /> :
        <Route path='/planetas/:id' element={<Planetas state={state} setState={setState} />} />
        <Route path='/api-nasa' element={<Nasa />} />
        <Route
          path="*"
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
