import "./App.css";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Directory from "./Pages/Directory";
import Navbar from "./Components/Navbars";

function App() {
  return (
    <div className="App">
      <div className="navbar-main">
        <Navbar></Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default App;
