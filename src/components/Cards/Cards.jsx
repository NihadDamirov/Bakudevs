import axios from "axios";
import "./Cards.css";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_data":
      return {
        ...state,
        allCourses: action.payload,
        filteredCourses: action.payload,
      };
    case "ctg-filter":
      const filtered =
        action.payload === "Hamısı"
          ? state.allCourses
          : state.allCourses.filter(
              (course) => course.course_name === action.payload
            );
      return { ...state, filteredCourses: filtered };
    default:
      return state;
  }
};

const courses_url = `http://localhost:3000/courses`;
const likes_url = `http://localhost:3000/likes`;

const Cards = () => {
  const [state, dispatch] = useReducer(reducer, {
    allCourses: [],
    filteredCourses: [],
  });
  const [active, setActive] = useState("hamisi");
  const [data, setData] = useState([]);

  const postData = (course) => {
    const item = data.data.find((item) => item.id == course.id);
    if (!item) {
      return axios.post(likes_url, course);
    }
  };
  useEffect(() => {
    axios.get(likes_url).then((data) => {
      setData(data);
    });
  }, [data]);

  useEffect(() => {
    axios.get(courses_url).then(({ data }) => {
      dispatch({ type: "get_data", payload: data });
    });
  }, []);

  return (
    <div className="course-container">
      <div className="button-div">
        <Link
          className={`btn ${active == "hamisi" && "active"}`}
          onClick={() => {
            setActive("hamisi"),
              dispatch({ type: "ctg-filter", payload: "Hamısı" });
          }}
        >
          Hamısı
        </Link>
        <Link
          className={`btn ${active == "frontend" && "active"}`}
          onClick={() => {
            setActive("frontend"),
              dispatch({ type: "ctg-filter", payload: "Frontend" });
          }}
        >
          Frontend
        </Link>
        <Link
          className={`btn ${active == "backend" && "active"}`}
          onClick={() => {
            setActive("backend"),
              dispatch({ type: "ctg-filter", payload: "Backend" });
          }}
        >
          Backend
        </Link>
        <Link
          className={`btn ${active == "ui" && "active"}`}
          onClick={() => {
            setActive("ui"), dispatch({ type: "ctg-filter", payload: "UI/UX" });
          }}
        >
          UI/UX
        </Link>
      </div>

      <div>
        <div className="home-part-two-middle">
          {state.filteredCourses.map((course, id) => (
            <div className="home-card" key={id}>
              <div style={{ marginTop: "15px", position: "relative" }}>
                <img src={course.course_img} alt="" style={{ zIndex: "-2" }} />
              </div>
              <div>
                <img
                  src="/heart-icon(3).svg"
                  className="heart-icon-three"
                  alt=""
                  onClick={() => {
                    postData(course, id);
                  }}
                />
              </div>
              <div
                className="course-name-and-time"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p className="coursename">{course.course_name}</p>
                </div>
                <div>
                  <p className="coursetime">
                    <img src="/min-icon.png" alt="" />
                    {course.course_lesson_time} min
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "237px",
                  height: "1px",
                  backgroundColor: "#D9D9D9",
                  marginTop: "20px",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Link
                  className="card-link"
                  to={`/coursesingle/${course.id}`}
                  style={{ width: "170px" }}
                >
                  <h5 className="coursetitle">Lorem ipsum dolor sit amet</h5>
                </Link>
                <div
                  className="pause-disc"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <img src="/pause-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
