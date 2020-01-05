import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <nav className="Navigations">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </nav>
  );
}

export default Navigation;
