import React, { useState } from "react";
import "./RegisterPage.css"; // Import your CSS file
import { useHistory } from "react-router-dom";
function RegisterPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    userName: "",

    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4242/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        // You can redirect the user to another page here if needed
        history.push("/login");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="white2">
      {" "}
      {/* Apply a class for white background */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">userName:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="input-field" // Apply a class for styling
          />
        </div>
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field" // Apply a class for styling
          />
        </div> */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field" // Apply a class for styling
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>{" "}
        {/* Apply a class for styling */}
      </form>
    </div>
  );
}

export default RegisterPage;
