import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import NovosJogos from './Catalogo/ListarCatalogo';
import Sobre from './Lugares/Sobre';
import Catalogo from './Lugares/Catalogo';
import Puts from './Lugares/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path='/' element={<Layout />}>
              <Route path='*' element={<Puts />} />
              <Route index element={<NovosJogos />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="catalogo" element={<Catalogo />} />[]
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;