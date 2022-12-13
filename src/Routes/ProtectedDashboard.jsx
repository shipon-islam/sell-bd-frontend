import { Navigate, Outlet } from "react-router-dom";

function ProtectedDashboard() {
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return user?.role === "admin" ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default ProtectedDashboard;
