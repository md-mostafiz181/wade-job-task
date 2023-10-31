import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Blog from "../Pages/Home/Blog/Blog";
import Service from "../Pages/Home/Service/Service";
import Business from "../Pages/Home/Business/Business";
import Testimonial from "../Pages/Home/Testimonial/Testimonial";
import Contact from "../Pages/Home/Contact/Contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/Service",
          element:<Service></Service>
        },
        {
          path:"/Business",
          element:<Business></Business>
        },
        {
          path:"/Testimonial",
          element:<Testimonial></Testimonial>
        },
        {
          path:"/Contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);