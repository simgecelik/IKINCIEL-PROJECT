import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Categories from "../components/Categories";
import homeimage from "../images/Banner1.jpg";
import Logo from "../constants/Logo";
import '../scss/home.css'
import axios from "axios";
import {useState,useEffect} from "react";
import { getAllProduct, getProductById } from "../services/productsService";
import { Link } from "react-router-dom";
import Register from "./Register";
import { getCategories } from "../services/categoryListServices";

function Home() {
  const [list,setList] = useState([]); 
  const [offset, setOffset] = useState(0);
  const [categoryList,setCategoryList]=useState([]);
 

  const clicked = (item) => {
 
    //<Link to="/productdetail"></Link>
   
  }

  useEffect(()=> {
    fetchCategories();
    getData();

  },[]);
 
  const getData = async () => {
    const data = await getAllProduct();
    //console.log({data})
    setList(data)
  }

  const fetchCategories = async()=>{
    const categories =await getCategories();
    setCategoryList(categories);
  }

  const fetchProductsByCategories = async(id)=> {
      const products = await getProductById(id);
      console.log("productbyıd:",products)
      setList(products);
  }

console.log(list);




return (
  <div className="container" >
      
      <div className="row"> <Logo/></div>
       <div className="row"><img src={homeimage} alt="homeimage"></img></div>
        <div className="row row-cols-15 d-flex ">
        <nav class="navbar navbar-inverse">
         {
        
        categoryList.map((item,index) => 
        
        <div className="col" onClick={()=> fetchProductsByCategories(item.id)}>
           {item.name}
      </div>

        )
      
      }
      </nav>
          
        {/*<div className="col"> Hepsi</div>
        <div className="col"> Pantolon</div>
        <div className="col"> Gömlek</div>
        <div className="col"> Tişört</div>
        <div className="col"> Şort</div>
        <div className="col"> Sweatshirt</div>
        <div className="col">Kazak</div>
        <div className="col">Polar</div>
        <div className="col">Mont</div>
        <div className="col">Abiye</div>
        <div className="col">Ayakkabı</div>
        <div className="col">Aksesuar</div>
        <div className="col">Çanta</div>
        <div className="col">Triko</div>
        <div className="col">Diğer</div> */}
      </div>
    
    <div className="row row-cols-5 d-flex" >


      {
        
        list.map((item,index) => 
        
        <div className="col" onClick={()=> clicked(item.id)}>
          {/*<Link to ={"/productdetail"} item={item.id}> */}
          <Link to ="/productdetail" state={item.id}>
        <div className="card">
          <div className="card-body">
            <img
              className="cardimgtop"
              src ={item.image.formats.thumbnail.url}
              alt="i"
            ></img>
            <p style={{ float: "left" }}>{item.brand}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted" style={{float:"left"}}>{item.price}</small>
          </div>
        </div>
        </Link>
      </div>

        )
      
      }
      </div>
   </div>
  
)}

export default Home;
