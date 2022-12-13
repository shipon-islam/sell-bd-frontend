import { Navigate, Outlet } from "react-router-dom";

function ProtectRoutes() {
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : false;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoutes;
