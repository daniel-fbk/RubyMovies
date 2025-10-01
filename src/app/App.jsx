import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Header";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
