import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Card(item,index) {
  console.log("item:",item)
  const [item1,setItem] = useState(item);
  const [index1,setIndex]= useState(index);
  
  const display = (item1,index1) => {
    console.log("basıldı",index1);
  }


 


  return (
    <>
      <div className="col" onClick={display}>
        <div className="card">
          <div className="card-body">
            <img
              className="cardimgtop"
              
              alt="i"
            ></img>
            <p style={{ float: "left" }}>{item.brand}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
