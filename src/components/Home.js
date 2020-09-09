import React from "react";
import "../styles/Homepage.css";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home-page">
      <div className="banner">
        <h1>
          Hi, my name is<a style={{ color: "#957397" }}> Anthony Streett</a>.
        </h1>

        <div className="typical">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "I'm a Full Stack Software Engineer.",
              800,
              "who pays close attention to detail...",
              400,
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
