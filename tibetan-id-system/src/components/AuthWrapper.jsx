import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext";

const AuthWrapper = ({ children, adminOnly = false }) => {
  const { user, role } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthWrapper;
