import { lazy, Suspense } from "react";
import Home1 from "../../views/Home1";

//lazy load component with lazy react
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
//import Login from "../../views/auth/Login";
//import Register from "../../views/auth/Register";
const publicRoutes = [
  {
    path:"/",
    element: <Home1/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
];

export default publicRoutes;
