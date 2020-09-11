import React from "react";
import KagneIMG from "../images/mylogowcolor.png";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="header">
      <Link to="/"><motion.img src={KagneIMG} className="header__img" /></Link>

      <div className="header__nav">
        <Link to="/resume">
          <a className="header__links">Resume</a>
        </Link>

        <Link>
          <a className="header__links">Get In Touch </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
