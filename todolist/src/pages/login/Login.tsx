import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/AuthContext'

const Login = () => {
    interface Login {
        email: string | null,
        password: string | null
    }

    const [form, setForm] = useState({
        email: null,
        password: null
    } as Login)

    const handleform = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    const { handleLogin } = useContext(Context)

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            <strong>To Do List!</strong> <br /> Bem vindo(a)
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                onChange={handleform}
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Senha
              </label>
              <input
                onChange={handleform}
                name="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(e, form);
                }}
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
  
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Não possui uma conta?{" "}
            <Link
              to="/cadastro"
              className="font-medium text-purple-600 hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    )
}

export default Login
