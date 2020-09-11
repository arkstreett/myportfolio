import React from "react";
import Resume1 from "../images/resume1.jpg"
import Resume2 from "../images/resume2.jpg"
import "../styles/Resume.css"



function Resume() {
  return (
    <div className="resume__container">
        
        <img src={Resume1}/>
        <img src={Resume2}/>
    </div>
  );
}

export default Resume;