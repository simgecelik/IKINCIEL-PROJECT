import React from "react";
import "../css/navbar.css";
import logoimg from "../images/Group6607.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light" >
      <div className="left">
        <img src={logoimg} alt="logo"></img>
      </div>
      <div className="right">
        <button className="addproduct">
          <i class="fa fa-plus"></i>Ürün Ekle
        </button>
        <Link to="/login">
        <button className="myaccount">
          <i class="fa fa-user"></i>Giriş Yap
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
