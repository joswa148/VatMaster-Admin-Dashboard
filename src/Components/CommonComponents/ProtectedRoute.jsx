// ✅ 1) Create: src/Components/CommonComponents/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthed = localStorage.getItem("ADMIN_AUTH") === "true";

  // if not logged in -> send to /admin
  if (!isAuthed) return <Navigate to="/admin" replace />;

  return children;
};

export default ProtectedRoute;
