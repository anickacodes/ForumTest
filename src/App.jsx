import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Replies from "./components/Replies";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id/replies" element={<Replies />} />
      </Routes>
    </>
  );
};

export default App;
