import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import homeimage from "../images/Banner1.jpg";
import Logo from "../constants/Logo";
import "../css/home.css";

import { useState, useEffect } from "react";
import { getAllProduct, getProductById } from "../services/productsService";
import { Link } from "react-router-dom";
import { getCategories } from "../services/categoryListServices";
import images from "../images/Group52.jpg";

function Home() {
  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const clicked = (item) => {
    //<Link to="/productdetail"></Link>
  };

  useEffect(() => {
    fetchCategories();
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllProduct();
    setList(data);
  };

  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategoryList(categories);
  };

  const fetchProductsByCategories = async (id) => {
    const products = await getProductById(id);
    console.log("productbyıd:", products);
    setList(products);
  };

  console.log(list);

  return (
    <div className="container">
      <div className="row">
        {" "}
        <Logo />
      </div>
      <div className="row">
        <img src={homeimage} alt="homeimage"></img>
      </div>
      <div className="row row-cols-15 d-flex ">
        <nav class="navbar navbar-inverse">
          {categoryList.map((item, index) => (
            <div
              className="col"
              onClick={() => fetchProductsByCategories(item.id)}
            >
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      <div className="row row-cols-5 d-flex">
        {list.map((item, index) => (
          <div className="col" onClick={() => clicked(item.id)}>
            <Link to="/productdetail" state={item.id}>
              <div className="card">
                <div className="card-body">
                  {/*<img
              className="cardimgtop"
              src ={item.image?.formats?.thumbnail?.url}
              alt="i"
            ></img>*/}
                  <img
                    className="cardimg"
                    src={images}
                    alt="img"
                    style={{ width: "200px", height: "200px" }}
                  ></img>
                  <p
                    style={{
                      float: "left",
                      color: "#4B9CE2",
                      fontWeight: "bold",
                    }}
                  >
                    {item.brand}
                  </p>
                  <p style={{ float: "right", color: "#3E3E3E" }}>
                    <span style={{ fontWeight: "bold", color: "#3E3E3E" }}>
                      Renk:
                    </span>
                    {item.color}
                  </p>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  <p
                    style={{
                      float: "left",
                      color: "#3E3E3E",
                      fontWeight: "bold",
                    }}
                  >
                    {item.price}TL
                  </p>
                </div>
              </div>
              <br></br>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
