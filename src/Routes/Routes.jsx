import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
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
            path: '/all_blogs',
            element: <AllBlogs></AllBlogs>,
            
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;