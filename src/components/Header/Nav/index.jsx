import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <nav className="navbar__item">
      <ul>
        <li>
          <Link to="/AboutUs">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <Link to="/">
          <img src="/home/logo.png" className="header__logo" />
        </Link>
        <li>
          <Link to="/Service">Services</Link>
        </li>
        <li>
          <Link href="#contact" to="/ContactUs">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
