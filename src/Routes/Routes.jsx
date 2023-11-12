import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
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
      ]
    },
  ]);

export default router;