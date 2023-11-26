import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Wish from "../Pages/Wishlist/Wish";
import Featured from "../Pages/FeaturedBlog/Featured";
import AddBlogs from "../Pages/AddBlogs";
import Details from "../Pages/Details";
import UpdateBlog from "../Pages/UpdateBlog";
import PrivateRoutes from "../Routes/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>;
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/add_blog',
          element: <PrivateRoutes><AddBlogs></AddBlogs></PrivateRoutes>,
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
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ()=> fetch('http://localhost:3000/allblogs/'),
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>,
          loader: ()=> fetch('http://localhost:3000/allblogs/'),
        }

      ]
    },
  ]);

export default router;