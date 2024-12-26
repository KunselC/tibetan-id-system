import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the TANC ID System</h1>
      <p>
        This system helps manage and store Tibetan Association of Northern
        California member information securely.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Register
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
