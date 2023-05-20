import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import MyToysUpdate from "../Pages/MyToys/MyToysUpdate";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/alltoys',
                    element: <AllToys></AllToys>
               },
               {
                    path: '/mytoys',
                    element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
               },
               {
                    path: '/toys/:id',
                    element: <MyToysUpdate></MyToysUpdate>,
                    loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
               },
               {
                    path: '/addtoys',
                    element: <AddToys></AddToys>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               }
          ]
     },
]);

export default router;