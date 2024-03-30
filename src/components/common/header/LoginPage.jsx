import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      {/* Implement your login form here */}
      <Link to="/register">New to website? Click here to register</Link>
    </div>
  );
};

export default LoginPage;
