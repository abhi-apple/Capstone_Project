import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here
    console.log(formData);
  };

  return (
    <div className="white1"> {/* Apply a class for white background */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <button type="submit" className="login-button">Login</button> {/* Apply a class for styling */}
      </form>
    </div>
  );
}

export default LoginPage;
