import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Tarefas from "./pages/tarefas/Tarefas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;