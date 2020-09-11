import React from "react";
import Resume1 from "../images/resume1.jpg"
import Resume2 from "../images/resume2.jpg"
import "../styles/Resume.css"
import ControlPointIcon from '@material-ui/icons/ControlPoint';




function Resume() {
  return (
    <div className="resume">
        <div className="resume__container"><img src={Resume1}/>
        <img src={Resume2}/></div>
        
        <a href="https://drive.google.com/file/d/1cc7_gMTGCky6S5hqEuKZQypN00FV_Q5b/view?usp=sharing" rel="noopener noreferrer" target="_blank" download><button>Download <ControlPointIcon/></button></a>
    </div>
  );
}

export default Resume;