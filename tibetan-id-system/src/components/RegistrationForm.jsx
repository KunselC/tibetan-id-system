import React, { useState } from "react";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Form.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    tancId: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        "defaultPassword" // Set a default password or prompt user to set one
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        tancId: formData.tancId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthdate: formData.birthdate,
        gender: formData.gender,
        email: formData.email,
        address: formData.address,
        photo: formData.photo ? URL.createObjectURL(formData.photo) : null,
        role: "pending",
      });

      alert(
        "Registration successful. Please bring your payment to 5200 Huntington Ave, Ste 200, Richmond, CA 94804, United States."
      );
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Tibetan ID System</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tancId">TANC ID Number</label>
          <input
            type="text"
            id="tancId"
            name="tancId"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Your Photo</label>
          <input type="file" id="photo" name="photo" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
