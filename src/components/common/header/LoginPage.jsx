import React, { useState } from "react";
import "./LoginPage.css"; // Import your CSS file
import { useHistory } from "react-router-dom";
function LoginPage() {
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
      const response = await fetch("http://localhost:4242/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful");
        console.log("Token:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.userName);
        // You can store the token in localStorage or sessionStorage here
        // Redirect the user to another page or perform other actions as needed
        history.push("/HomePage");
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="white1">
      {" "}
      {/* Apply a class for white background */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">userName:</label>
          <input
            type="userName"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="input-field" // Apply a class for styling
          />
        </div>
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
        <button type="submit" className="login-button">
          Login
        </button>{" "}
        {/* Apply a class for styling */}
      </form>
    </div>
  );
}

export default LoginPage;
