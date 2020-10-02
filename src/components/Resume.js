import React from "react";
import Resume1 from "../images/FALLRESUME2020.jpg"
import "../styles/Resume.css"
import Button from '@material-ui/core/button';




function Resume() {
  return (
    <div className="resume">
        <div className="resume__container"><img src={Resume1}/>
      
        
        <a href="https://drive.google.com/file/d/1cc7_gMTGCky6S5hqEuKZQypN00FV_Q5b/view?usp=sharing" rel="noopener noreferrer" target="_blank" download><Button variant="contained" color="primary" disableElevation>
  Download <a className="pdf"> PDF.</a>
      </Button>
      </a>
        </div>
    </div>
  );
}

export default Resume;