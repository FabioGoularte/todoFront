import {
  Navigate,
  Route,
  RouteProps,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Tarefas from "./pages/tarefas/Tarefas";

import { useContext } from "react";
import { Context } from "./context/AuthContext";

type CustomRouteProps = RouteProps & {
  isPrivate?: boolean;
};

function CustomRoute({
  isPrivate,
  ...rest
}: CustomRouteProps): React.ReactElement | null {
  const { authenticated, loading } = useContext(Context);
  if (loading) {
    return <></>;
  }

  if (isPrivate && !authenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route element={<CustomRoute isPrivate />}>
            <Route path="/tarefas" element={<Tarefas />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
