import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { API } from "../../api";

type AuthInformationsProps = {
  email: string;
  senha: string;
};

export default function useAuth() {
  let navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.defaults.headers.Authorization = `Bearer ${JSON.parse(JSON.stringify(token))}`;
      setAuthenticated(true);
    }


    setLoading(false);
  }, []);

  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    authInformations: AuthInformationsProps
  ) {
    e.preventDefault();
    try {
      const { data } = await API.post("users/auth", authInformations);

      const { token } = data;

      localStorage.setItem("token", token);
      API.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      navigate("/tarefas");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    API.defaults.headers.Authorization = undefined as any;
    //history.push
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
