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
      element:<AddReviews></AddReviews>
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
    element: <h1>Error</h1>
   } 
  ]);

  export default router;