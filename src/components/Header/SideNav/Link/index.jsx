import React from "react";
import { motion } from "framer-motion";
import { slide } from "../anim";
import { Link } from "react-router-dom";

export default function index({ data }) {
  return (
    <motion.div custom={data.index} variants={slide} animate="enter" exit="exit" initial="initial" className="link">
      <Link to={data.href} className="Link">
        {data.title}
      </Link>
    </motion.div>
  );
}
