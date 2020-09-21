import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core"
import DarkSwitch from "@material-ui/core/Switch"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import Home from "./components/Home";
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import MaterialHeader from "./components/MaterialHeader";


function App() {
  const [darkMode, setDarkMode] = useState(false);
 
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light" ,
    },
  })

  return (
    <body>
          <BrowserRouter>
          <ThemeProvider theme={theme}>
              <Paper style={{ height: "100%"}}>
              
                <MaterialHeader />
                <a style={{ float: "right", paddingRight: "30px", paddingTop: "10px"}}><DarkSwitch checked={darkMode} onClick={() => setDarkMode(!darkMode)} /></a>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/resume" component={Resume}/>
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </Paper>
              </ThemeProvider>
            </BrowserRouter>
           
    </body>
  );
}

export default App;
