import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token && token !== "null" ? <Outlet /> : <Navigate to="/signin" />;
};

export default UserProtectedRoute;
