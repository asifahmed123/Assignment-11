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
import ViewDetails from "../Pages/Shared/ViewDetails/ViewDetails";
import Error from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <Error></Error>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/viewDetails/:id',
                    element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://toy-haven-server.vercel.app/toys/${params.id}`)
               },
               {
                    path: '/alltoys',
                    element: <AllToys></AllToys>,
                    loader: () => fetch('https://toy-haven-server.vercel.app/allToys')
               },
               {
                    path: '/mytoys',
                    element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
               },
               {
                    path: '/toys/:id',
                    element: <MyToysUpdate></MyToysUpdate>,
                    loader: ({ params }) => fetch(`https://toy-haven-server.vercel.app/toys/${params.id}`)
               },
               {
                    path: '/addtoys',
                    element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
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