import React from "react";
import "../css/navbar.css";
import logoimg from "../images/Group6607.png";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="left">
        <img src={logoimg} alt="logo"></img>
      </div>
      <div className="right">
        <button className="addproduct">
          <i class="fa fa-plus"></i>Ürün Ekle
        </button>
        <button className="myaccount">
          <i class="fa fa-user"></i>Hesabım
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
