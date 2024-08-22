import React from "react";
import "./style.css";
import Link from "./Link/index";
import Curve from "./Curve/index";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/AboutUs",
    },
    {
      title: "Project",
      href: "/Projects",
    },
    {
      title: "Services",
      href: "/Service",
    },
    {
      title: "Contact Us",
      href: "/ContactUs",
    },
  ];
  return (
    <motion.div variants={menuSlide} animate="enter" exit="exit" initial="initial" className="menu">
      <div className="body">
        <div className="logo-container">
          <img className="content-logo" src="./iv_logo.png" />
        </div>
        <div className="nav">
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
        <div className="footer">
          <a onClick={() => window.open("https://www.instagram.com/candor.itsolution/")}>Instagram</a>
          <a>Linkedin</a>
          <a onClick={() => window.open("mailto:hello@candor.it")}>Email</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
