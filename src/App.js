import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume"

function App() {
  return (
    <body>
    <BrowserRouter>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume}/>
          <Route/>
        </Switch>
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App;
