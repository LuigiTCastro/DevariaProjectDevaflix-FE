import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Home } from "../views/Home";
import { MyPage } from "../views/MyPage";
import { Movie } from "../views/Movie";
import SearchResultsPage from "../views/SearchResultsPage";


export const getRouter = (token: string | null) => {
  if (!token) {
    //telas publicas =>Rotas para usuários não autenticados
    return createBrowserRouter([
      {
        path: "*",
        id: "home",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/login",
        id: "login",
        element: <Login />,
      },
      {
        path: "/register",
        id: "register",
        element: <Register />,
      },
      {
        path: "/search-results/:query", 
        id: "SearchResultsPage",
        element: <SearchResultsPage />,
      },
    ]);
  } else {
    //telas privadas => Rotas para usuários autenticados
    return createBrowserRouter([
      {
        path: "*",
        id: "home",
        element: <Home />,
      },
      {
        path: "/me",
        id: "myPage",
        element: <MyPage />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/search-results/:query", 
        id: "SearchResultsPage",
        element: <SearchResultsPage />,
      },
    ]);
  }
};
