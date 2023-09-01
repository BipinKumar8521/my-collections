import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">My Collections</Link>
      <span className="auth">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </span>
    </nav>
  );
}
