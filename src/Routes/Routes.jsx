import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Wish from "../Pages/Wishlist/Wish";
import Featured from "../Pages/FeaturedBlog/Featured";
import AddBlogs from "../Pages/AddBlogs";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/add_blog',
          element: <AddBlogs></AddBlogs>,
        },
        {
            path: '/all_blogs/',
            element: <AllBlogs></AllBlogs>,
            
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/wishlist',
          element: <Wish></Wish>,
        },
        {
          path: '/featured',
          element: <Featured></Featured>,
        }
      ]
    },
  ]);

export default router;