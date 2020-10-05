import React from "react";
import "../styles/Homepage.css";
import Typical from "react-typical";
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Home() {
  return (
    <div className="home-page">
      <div className="banner">
        <h1>
          Hi, my name is<a style={{ color: "#B55267" }}> Anthony Streett</a>.
        </h1>

        <div className="typical">
          <Typical
            loop={1}
            wrapper="b"
            steps={[
              "I'm a Full Stack Software Engineer.",
              1000,
              "who pays close attention to detail...",
              1000,
              "and pushes his boundaries!",
              1000,
            ]}
          />
        </div>

        <div className="home-icons">
           
              <a href="https://github.com/arkstreett" rel="noreferrer nopener" target="_blank"><GitHubIcon /></a>
            
              <a href="https://www.youtube.com/channel/UCVZ-3aiaF3eMIzdKqiRp5Sw?view_as=subscriber" rel="noreferrer nopener" target="_blank"><YouTubeIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
