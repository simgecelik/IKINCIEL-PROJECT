import React, { useState,useEffect } from "react";
import clsx from "clsx";
import { Formik } from "formik";
import * as yup from "yup";
import "../scss/form.css";
import { LoginSchema } from "../constants/yupSchema";
import { Link } from "react-router-dom";
import Logo from "../constants/Logo";
import { fetchRegister } from "../api";
import { createToken } from "../services/tokenServices";
import LoadingSvg from "../constants/loading";

function Form() {
    const [loading,setLoading] = useState(false);
    const [isAuth,setIsAuth] =useState(false);

  useEffect(() => {
    //onSubmit();
  }, []);


  const setServer  = (auth)=>{
     setIsAuth(true);
  }

  const token = (auth) => {
    const registerResponse = createToken(auth);
    console.log("hello:", registerResponse);
  };

  return (
    <>
      <div className="formContainer">
        <div className="formi">
          <h3 className="title">Üye Ol</h3>
          <p>Fırsatlardan yararlanmak için üye ol!</p>

          {
                        isAuth ? <div> Hoşgeldiniz </div> : 
                        <Formik
                          initialValues={{
                            email: "sm@gmail.com",
                            password: "12345678",
                          }}
            
                          onSubmit = { auth => {
                            setLoading(true)
                            setServer(auth);
                            token(auth);
                             //console.log(auth)
            
                          }
                          }
                           
                        
                          validationSchema={LoginSchema}
                        >
                          {({ values, handleChange, handleSubmit, errors, touched }) => (
                            <form >
                              <div>
                                <div
                                  className={clsx("formGroup", {
                                    formError: !!errors.email,
                                  })}
                                >
                                  <label className="required title">Email </label>
                                  <input
                                    type="text"
                                    name="email"
                                    placeholder="Email@example.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    
                                  />
                                  <br></br><span>{errors.email}</span>
                                </div>
            
                                <div
                                  className={clsx("formGroup", {
                                    formError: !!errors.password,
                                  })}
                                >
                                  <label className="required title">Şifre</label>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Şifrenizi girin"
                                    value={values.password}
                                    onChange={handleChange}
                                  />
                                  <br></br><span>{errors.password}</span>
                                </div>
            
                                <div
                                  className="formGroup formButton"
                                  style={{ clear: "both" }}
                                >
                                  <br></br>
                                  <button
                                    className="loginButton"
                                    type="submit"
                                    onClick={handleSubmit} 
                                    disabled={loading}
                                  >
                                    <Link to="/" style={{textDecoration:"none"}}><p>Üye Ol</p></Link>
                                    
                                  </button>
                                  
                                  <span></span>
                                </div>
                                <br></br>
                               <p>Hesabın var mı? <Link to="/login" style={{textDecoration:"none"}}>Giriş Yap</Link></p> 
                              </div>
                            </form>
                          )}
                        </Formik>
          }
          
          
        </div>
      </div>
    </>
  );
}

export default Form;
