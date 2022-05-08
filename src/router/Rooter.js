import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";

function Rooter() {

  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Home />} />
      <Route path="/productdetail" element={<ProductDetail/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Rooter;