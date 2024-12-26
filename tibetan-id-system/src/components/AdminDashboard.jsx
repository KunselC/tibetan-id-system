import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const querySnapshot = await getDocs(collection(db, "applications"));
      const apps = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplications(apps);
    };
    fetchApplications();
  }, []);

  const handleApproval = async (id, status) => {
    const docRef = doc(db, "applications", id);
    await updateDoc(docRef, { status });
    alert(`Application ${status}`);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {applications.map((app) => (
        <div key={app.id}>
          <p>TANC ID: {app.tancId}</p>
          <p>
            Name: {app.firstName} {app.lastName}
          </p>
          <p>Email: {app.email}</p>
          <p>Status: {app.status}</p>
          <img src={app.greenbookPhoto} alt="Greenbook" width="200" />
          <img src={app.photo} alt="Applicant" width="200" />
          <button onClick={() => handleApproval(app.id, "Approved")}>
            Approve
          </button>
          <button onClick={() => handleApproval(app.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
