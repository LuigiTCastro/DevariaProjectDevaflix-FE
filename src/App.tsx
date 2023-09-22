/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./router";


export const AuthorizeContext = createContext<any>(null);

export const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
    return (
      //criando um contexto onde todo lugar abaixo, daqui pra frente , vou ter acesso , tanto ao token como ao set token
    <AuthorizeContext.Provider value={{ token, setToken }}>
      <RouterProvider router={getRouter(token)} />
    </AuthorizeContext.Provider>
  );
};
