import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';

const reducer = (state,action) =>{
  switch (action.type) {
    case "get_data":
      return {...state, allCourses:action.payload}

    default:
      return state    
  }
}

const likes = `http://localhost:3000/likes`;

const MemberAreaIstek = () => {
  const [state,dispatch]=useReducer(reducer,{allCourses:[]})

  useEffect(() => {
    axios.get(likes).then(({ data }) => {
      dispatch({ type: "get_data", payload: data });
    });
  }, []);

  return (
    <div>
      <div className="home-part-two-middle">
          {
          state.allCourses.map((course, id) => (
            <div className="home-card" key={id}>
              <div style={{ marginTop: "15px" }}>
                <img src={course.course_img} alt="" />
              </div>
              <div className="course-name-and-time" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div><p className="coursename">{course.course_name}</p></div>
                <div><p className="coursetime"><img src="/min-icon.png" alt="" />{course.course_lesson_time} min</p></div>
              </div>
              <div style={{ width: "237px", height: "1px", backgroundColor: "#D9D9D9", marginTop: "20px" }}></div>

              <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <Link className="card-link" to={`/coursesingle/${course.id}`} style={{ width: "170px" }}><h5 className="coursetitle">Lorem ipsum dolor sit amet</h5></Link>
                <div className="pause-disc" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position:  "absolute" }}><img src="/pause-icon.png" alt="" /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MemberAreaIstek