import React from "react";
import { useEffect, useState } from "react";
import { createToken } from "../services/tokenServices";
import { Formik } from "formik";
import clsx from "clsx";
import { LoginSchema } from "../constants/yupSchema";
import { Link } from "react-router-dom";

function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    
  }, []);

  const setServer = (auth) => {
    setIsAuth(true);
  };

  const token = (auth) => {
    const registerResponse = createToken(auth);
  };
  return (
    <>
      <div className="formContainer">
        <div className="formi">
          <h3 className="title">Giriş Yap</h3>
          <p>Fırsatlardan yararlanmak için giriş yap!</p>

          {isAuth ? (
            <div> Hoşgeldiniz </div>
          ) : (
            <Formik
              initialValues={{
                email: "sm@gmail.com",
                password: "12345678",
              }}
              onSubmit={(auth) => {
                setLoading(true);
                setServer(auth);
                token(auth);
              }}
              validationSchema={LoginSchema}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <form>
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
                      <br></br>
                      <span>{errors.email}</span>
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
                      <br></br>
                      <span>{errors.password}</span>
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
                        <Link to="/" style={{ textDecoration: "none" }}>
                          <p>Giriş Yap</p>
                        </Link>
                      </button>

                      <span></span>
                    </div>
                    <br></br>
                    <p>
                      Hesabın yok mu?{" "}
                      <Link to="/register" style={{ textDecoration: "none" }}>
                        Üye Ol
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
}

export default FormLogin;
