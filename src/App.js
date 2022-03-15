import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Menu from "./Components/Layout/Menu";
import NuevaCuenta from "./Components/auth/NuevaCuenta";
import UsuariosState from "./contex/Usuarios/UsuariosState";
import BingoState from "./contex/Bingo/BingoState";
import Principal from "./Components/Layout/Principal";
import Iniciar from "./Components/Layout/Bingo/Iniciar";
import Usuario from "./Components/Layout/Bingo/Usuario";
function App() {
  return (
    <>
      <UsuariosState>
        <BingoState>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Login />} />
                <Route path="nuevo-registro" element={<NuevaCuenta />} />
              </Route>
              <Route path="/menu" element={<Menu />}>
                <Route index element={<Principal />} />
                <Route path="iniciar" element={<Iniciar />} />
                <Route path="usuario" element={<Usuario />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BingoState>
      </UsuariosState>
    </>
  );
}

export default App;
