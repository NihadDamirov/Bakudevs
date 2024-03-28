import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Course from "./components/CourseMainPage/Course";
import CourseSinglepage from "./components/CourseSinglepage/CourseSinglepage";
import { SignIn } from "./components/Sign/SignIn/SignIn";
import { SignUp } from "./components/Sign/SignUp/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { ResetPasswordSecondStep } from "./components/ResetPassword/ResetPasswordSecondStep/ResetPasswordSecondStep";
import AreaNav from "./components/MemberArea/AreaNav/AreaNav";
import UserProtectedRoute from "./components/UserProtectedRoute";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/coursesingle/:id" element={<CourseSinglepage />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route
          path="/resetpasswordsecondstep"
          element={<ResetPasswordSecondStep />}
        />
        <Route element={<UserProtectedRoute/>}>
          <Route path="/areanav" element={<AreaNav />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
