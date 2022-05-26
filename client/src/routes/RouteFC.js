import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Protected from "../routes/Protected";
// import AuthRedirect from "../../pages/Auth/AuthRedirect";

function RouteFC() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Protected />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default RouteFC;
