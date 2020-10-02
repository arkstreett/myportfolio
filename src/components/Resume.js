import React from "react";
import { Link } from "react-router-dom"
import Resume1 from "../images/FALLRESUME2020.jpg"
import "../styles/Resume.css"
import Button from '@material-ui/core/button';




function Resume() {
  return (
    <div className="resume">
        <div className="resume__container"><img src={Resume1}/>
      
        
        <Link to={Resume1} target="_blank" download><Button variant="contained" color="primary" disableElevation>
  Download
      </Button>
      </Link>
        </div>
    </div>
  );
}

export default Resume;