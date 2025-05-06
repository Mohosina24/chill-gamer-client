import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home";
import AddReviews from "../assets/pages/AddReviews";
import Gamer from "../compontents/layout-components/Gamer";
import AllReview from "../assets/pages/AllReview";
import Register from "../assets/pages/Register";
import Login from "../assets/pages/Login";
import MyReview from "../assets/pages/MyReview";
import GameWatch from "../assets/pages/GameWatch";
import ReviewDetails from "../assets/pages/ReviewDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../assets/pages/ErrorPage";
import UpdateGame from "../compontents/layout-components/UpdateGame";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/gamers')
        },
       
      ]
    },
    
    {
      path:'/allReviews',
      element:<AllReview></AllReview>,
      loader: () => fetch('http://localhost:5000/gamers')
    },
    {
      path:'/addReview',
      element:<PrivateRoutes><AddReviews></AddReviews></PrivateRoutes>
    },
    {
      path:'/myReviews',
      element:<PrivateRoutes><MyReview></MyReview></PrivateRoutes>,
      loader: ()=>fetch('http://localhost:5000/gamers')

    },
    {
      path:'/updateGame/:id',
      element:<UpdateGame></UpdateGame>,
      loader: ({params})=>fetch(`http://localhost:5000/gamers/${params.id}`)
    },
    {
      path:'/review/:id',
      element:<PrivateRoutes><ReviewDetails></ReviewDetails></PrivateRoutes>,
      loader: ({params}) =>fetch(`http://localhost:5000/gamers/${params.id}`)
    },
    {
      path:'/watchList',
      element:<PrivateRoutes><GameWatch></GameWatch></PrivateRoutes>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
   {
    path:'*',
    element:<ErrorPage></ErrorPage>
   } 
  ]);

  export default router;