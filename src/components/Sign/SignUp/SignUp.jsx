import React, { useState } from "react";
import PageContainer from "./../../../PageContainer";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name) {
      setRegister((pre) => ({ ...pre, [name]: value }));
    }
  };

  const navigate =  useNavigate()
  

  const signUpHandler = () => {
    axios
      .post("http://localhost:5050/auth/signup",register)
      .then((res) => {
        if(res.status === 201) {
          alert(res.data.message)
          navigate("/signin")
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message)
      });
  };

  return (
    <PageContainer>
      <div className="sign-up-container">
        <div className="sign-up">
          <h1>Qeydiyyatdan keçin</h1>
        </div>
        <div className="form">
          <div className="circle-shape">
            <img src="/circle-shape.png" alt="" />
          </div>
          <div className="star-shape">
            <img src="/star-shape.png" alt="" />
          </div>

          <div className="left-img">
            <img src="/man-wave.svg" alt="" />
          </div>

          <div className="sign">
            <div style={{ zIndex: "-1", position: "absolute" }}>
              <img src="/sign-bg.svg" alt="" />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div fb">
                <img src="/logos_facebook.svg" alt="" />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Facebook ilə daxil ol"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div google">
                <img src="/google-plus.svg" alt="" />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Google ilə qeydiyyatdan keç"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div mail">
                <img src="/profile-icon.svg" alt="" />
              </div>
              <input
                type="text"
                name="fullname"
                value={register.fullname}
                onChange={inputChangeHandler}
                placeholder="Adınız və Soyadınız"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div mail">
                <img src="/mail-logo.svg" alt="" />
              </div>
              <input
                name="email"
                value={register.email}
                onChange={inputChangeHandler}
                type="email"
                placeholder="Email ünvanı"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div lock">
                <img src="/lock-logo.svg" alt="" />
              </div>
              <input
                type="password"
                name="password"
                value={register.password}
                onChange={inputChangeHandler}
                placeholder="Şifrə"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="logo-div lock">
                <img src="/lock-logo.svg" alt="" />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Şifrəni yenidən daxil edin"
              />
            </div>

            <div className="checkbox">
              <div>
                <input type="checkbox" name="" id="" />
                <p>Yadda saxla</p>
              </div>
              <div>
                <Link className="forget-password" to={`/resetpassword`}>
                  Şifrənizi unutmusunuz?
                </Link>
              </div>
            </div>

            <div>
              <button onClick={signUpHandler} className="daxil-ol">
                Daxil ol
                <img
                  src="/right-arrow.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0" }}
                  alt=""
                />
              </button>
            </div>

            <div className="last-div-form">
              <p>Hesabınız yoxdur?</p>
              <Link to={`/signin`}>Daxil olun</Link>
            </div>
          </div>
          <div className="right-img">
            <img src="/girl-using-laptop.svg" alt="" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
