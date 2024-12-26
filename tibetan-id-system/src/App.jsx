import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./components/AdminDashboard";
import RegistrationForm from "./components/RegistrationForm";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./components/UserDashboard";
import DigitalID from "./components/DigitalID";
import { useAuth } from "./authContext";

function App() {
  const { user, userRole, loading } = useAuth();

  console.log("App component rendered");
  console.log("User:", user);
  console.log("UserRole:", userRole);
  console.log("Loading:", loading);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route
        path="/dashboard"
        element={
          user ? (
            userRole === "member" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin"
        element={
          user ? (
            userRole === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/digital-id"
        element={
          user ? (
            userRole === "member" ? (
              <DigitalID />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
