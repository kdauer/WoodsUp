import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PProjects from "./components/pprojects";
import FProjects from "./components/fprojects";
import Support from "./components/support";
import Links from "./components/links";
import { Switch, Route } from "react-router-dom";
// import Impress from "./components/legalnotice";
// import DSGVO from "./components/privacypolicy";

function App() {
  return (
    <div className="App">
      <h1>WoodsUp</h1>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/past-projects" component={PProjects} />
        <Route exact path="/future-projects" component={FProjects} />
        <Route path="/support" component={Support} />
        <Route path="/links" component={Links} />
        {/* <Route path="/legalnotice" component={Impress} />
        <Route path="/privacypolicy" component={DSGVO} /> */}
      </Switch>
    </div>
  );
}

export default App;
