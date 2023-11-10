import { Outlet } from "react-router-dom";
import Navbar from "../src/Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
