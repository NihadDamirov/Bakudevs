import { useState } from "react";
import PageContainer from "./../../../PageContainer";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name) {
      setLogin((pre) => ({ ...pre, [name]: value }));
    }
  };

  const signInHandler = () => {
    axios
      .post("http://localhost:5050/auth/signin", login)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/areanav");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <PageContainer>
      <div className="sign-in-container">
        <div className="daxilol-div">
          <h1>Daxil olun</h1>
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
                <img src="/mail-logo.svg" alt="" />
              </div>
              <input
                type="email"
                name="email"
                value={login.email}
                onChange={inputChangeHandler}
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
                value={login.password}
                onChange={inputChangeHandler}
                placeholder="Şifrə"
              />
            </div>

            <div className="checkbox">
              <div>
                <input type="checkbox" name="" id="" />
                <p>Yadda saxla</p>
              </div>
              <div>
                <p>Şifrənizi unutmusunuz?</p>
              </div>
            </div>

            <div>
              <button onClick={signInHandler} className="daxil-ol">
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
              <Link to={`/signup`}>Qeydiyyatdan keçin</Link>
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
