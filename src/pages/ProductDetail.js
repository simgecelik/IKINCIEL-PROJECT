import React, { useState,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { getProduct } from "../services/productsService";
import logo from '../images/Banner1.jpg';
import '../scss/productdetail.css'
 
function ProductDetail(props) {
  const [data,setData] = useState([]);

  useEffect(()=> {
    getData();
  },[]);
 

  
  const item2=props.item;
  console.log("props",item2);
  const location = useLocation();
  const state = location.state;
  console.log( "SATE:",state);


  const getData = async () => {
    const data = await getProduct(state);
    setData(data);
    console.log("data:",data)
    
  }
  console.log("dataaaaa");
  return (
    
    <div className='containerproduct' style={{display:'flex',flexDirection:"row"}}> 
    
     <div className='imageproduct'>
      <img src={logo} style={{width:"800px",height:"800px"}} alt="hello" />

     </div>

     <div className='productdetail'>
     <h1>{data.name}</h1>
     <ul style={{listStyleType:"none",textAlign:"left"}}>
      <li>
      Marka:{data.brand}
      </li>
      <li>
      Renk:{data.color}
      </li>
      <li>
      Kullanım Durumu:{data.description}
      </li>
     </ul>
     <h2>{data.price}</h2>

     </div>

    
    </div>
  )
}

export default ProductDetail