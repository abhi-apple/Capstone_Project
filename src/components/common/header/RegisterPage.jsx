import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      {/* Implement your registration form here */}
      <Link to="/login">Already registered? Click here to login</Link>
    </div>
  );
};

export default RegisterPage;
