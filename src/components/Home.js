import React from "react";
import "../styles/Homepage.css";
import Typical from "react-typical";

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
      </div>
    </div>
  );
}

export default Home;
