import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const AdminManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (id, role) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { role });
    alert(`User role updated to ${role}`);
  };

  return (
    <div>
      <h1>Admin Management</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button onClick={() => handleRoleChange(user.id, "admin")}>
            Make Admin
          </button>
          <button onClick={() => handleRoleChange(user.id, "user")}>
            Remove Admin
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminManagement;
