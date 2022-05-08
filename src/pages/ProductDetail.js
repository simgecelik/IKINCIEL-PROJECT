import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProduct } from "../services/productsService";
import logo from "../images/Banner1.jpg";
import "../css/productdetail.css";
import Navbar from "../components/Navbar";
import Offer from "../modals/Offer";
import Buy from "../modals/Buy";

function ProductDetail(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const item2 = props.item;
  const location = useLocation();
  const state = location.state;

  const getData = async () => {
    const data = await getProduct(state);
    setData(data);
  };

  return (
    <div className="productdetailpage">
      <Navbar />
      <div
        className="containerproduct"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="imageproduct">
          <img
            src={logo}
            style={{
              width: "700px",
              height: "737px",
              top: "116px",
              left: "14.688rem",
            }}
            alt="hello"
          />
        </div>

        <div className="productdetail">
          <h1>{data.name}</h1>
          <ul style={{ listStyleType: "none", textAlign: "left" }}>
            <li>
              <span>Marka: </span>
              {data.brand}
            </li>
            <br></br>
            <li>
              <span>Renk: </span>
              {data.color}
            </li>
            <br></br>
            <li>
              <span>Kullanım Durumu: </span>
              {data.description}
            </li>
            <br></br>
          </ul>
          <h2 style={{ fontWeight: "bold" }}>{data.price} TL</h2>
          <br></br>
          <div className="buttons">
            <Buy />
            <Offer productdata={data} />
          </div>
          <br></br>
          <h3>Açıklama</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
