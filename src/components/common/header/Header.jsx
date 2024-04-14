import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/courses">Explore Courses</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/technologies">Technologies</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="right-align">
              <p>Hello</p>
            </div>
          ) : (
            <div className="right-align">
              <Link to="/register">
                <button className="primary-btn b1">Signup</button>
              </Link>
              <Link to="/login">
                <button className="pb b2">Login</button>
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
