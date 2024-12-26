import React from "react";
import { useAuth } from "../authContext";

const UserDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Your Digital ID</h1>
      <p>TANC ID: {user.tancId}</p>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <img src={user.photo} alt="Your Photo" width="200" />
    </div>
  );
};

export default UserDashboard;
