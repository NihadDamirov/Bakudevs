import { useEffect, useState } from "react";
import "./MemberAreaProfil.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberAreaProfil = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5050/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          localStorage.removeItem("token");
          navigate("/signin");
        }
      });
  }, []);

  return (
    <div style={{ display: "flex", gap: "58px" }}>
      <div className="form-div-left">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Adınız və Soyadınız</label>
          <input
            className="profil-input"
            type="text"
            placeholder={user?.profile?.fullname}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">E-mail</label>
          <input
            className="profil-input"
            type="text"
            placeholder="nihad.damirov@gmail.com"
          />
        </div>

        <div>
          <button className="save-btn">
            Yadda saxla{" "}
            <img
              src="/right-arrow.svg"
              width="24px"
              height="24px"
              style={{ margin: "0" }}
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="form-div-left">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Mövcud şifrə</label>
          <input
            className="profil-input"
            type="password"
            placeholder="***********"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Yeni şifrə</label>
          <input
            className="profil-input"
            type="text"
            placeholder="***********"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Yeni şifrənin təkrarı</label>
          <input
            className="profil-input"
            type="text"
            placeholder="***********"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberAreaProfil;
