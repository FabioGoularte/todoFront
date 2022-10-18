import { createContext } from "react";

import useAuth from "./hooks/useAuth";

type ContextAuthProps = {
  authenticated: boolean;
  handleLogin: Function;
  handleLogout: Function;
  loading: boolean;
};

const Context = createContext({} as ContextAuthProps);

function AuthProvider({ children }: any) {
  const { authenticated, handleLogin, handleLogout, loading } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogout,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
