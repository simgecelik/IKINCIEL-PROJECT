import React from "react";
import image from "../images/Group52.jpg";
import "../css/register.css";
import Logo from "../constants/Logo";
import Form from "../components/Form";
function Register() {
  return (
    <div className="containerregister">
      <div className="imageregister">
        <img
          src={image}
          alt="womanphoto"
          style={{ width:"52.188rem",
            height: "67.5rem" }}
        ></img>
      </div>
      <div className="formRegister">
        <Logo style={{position:"absolute"}}/>
        <Form />
      </div>
    </div>
  );
}

export default Register;
