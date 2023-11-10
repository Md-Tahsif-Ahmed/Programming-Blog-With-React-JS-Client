import { Outlet } from "react-router-dom";
import Navbar from "../src/Pages/Shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
