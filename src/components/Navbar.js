import React from "react";
import Logo from "../constants/Logo";
import '../scss/navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid col-12">
      <span className="navbar-brand mb-0 h1"><Logo/></span>
      <span className="navbar-brand mb-0 h1"> Ürün Ekle </span>
      <span className="navbar-brand mb-0 h1"> Giriş Yap</span>
    </div>
  </nav>
  );
}

export default Navbar;
