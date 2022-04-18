import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./Componenet/Pages/About/About";
import Home from "./Componenet/Pages/Home/Home/Home";
import Navbar from "./Componenet/Shared/Navbar/Navbar";
import Footer from "./Componenet/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
