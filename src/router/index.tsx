import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Home } from "../views/Home";
import { MyPage } from "../views/MyPage";
import { Movie } from "../views/Movie";


export const getRouter = (token: string) => {
   
   if (!token) {
      //telas publicas
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
      ]);
   } else {
//telas privadas
      return createBrowserRouter([
         {
            path: '*',
            id: 'home',
            element: <Home />
         },
         {
            path: '/me',
            id: 'myPage',
            element: <MyPage />
         }     
            
      ]);
   }
}
