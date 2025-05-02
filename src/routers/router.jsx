import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home";
import AddReviews from "../assets/pages/AddReviews";
import Gamer from "../compontents/layout-components/Gamer";

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
      path:'/addReview',
      element:<AddReviews></AddReviews>
    }
  ]);

  export default router;