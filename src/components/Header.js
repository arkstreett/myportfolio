import React from "react";
import KagneIMG from "../images/mylogowcolor.png";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="header">
      <motion.img src={KagneIMG} className="header__img" />

      <div className="header__nav">
        <Link>
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
